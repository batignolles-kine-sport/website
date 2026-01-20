import React, { useEffect, useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

// SSR-safe HTML parser that extracts headings without using DOM APIs
// SSR-safe HTML parser that extracts headings without using DOM APIs
function parseHeadingsFromHTML(html: string): Heading[] {
    const headings: Heading[] = [];

    // Match all h2 tags non-greedily
    // [\s\S] matches any character including newlines
    const h2Regex = /<h2[\s\S]+?<\/h2>/gi;

    // Helper to decode HTML entities
    const decodeHtmlEntities = (text: string) => {
        const entities: Record<string, string> = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
            '&#x27;': "'"
        };
        return text.replace(/&(?:amp|lt|gt|quot|#39|#x27);/g, entity => entities[entity] || entity);
    };

    let match;
    let index = 0;

    while ((match = h2Regex.exec(html)) !== null) {
        const fullTag = match[0];

        // Extract ID
        const idMatch = fullTag.match(/id="([^"]*)"/);
        const id = idMatch ? idMatch[1] : `heading-${index}`;

        // Extract text content
        // 1. Remove all HTML tags
        // 2. Remove trailing #
        // 3. Decode entities
        let text = fullTag
            .replace(/<[^>]+>/g, '')
            .replace(/\s*#+$/, '')
            .trim();

        text = decodeHtmlEntities(text);

        if (text) {
            headings.push({ id, text, level: 2 });
            index++;
        }
    }

    return headings;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
    const [activeId, setActiveId] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Extract headings from HTML content - SSR-safe
    const headings = useMemo(() => {
        return parseHeadingsFromHTML(content);
    }, [content]);

    // Track if component is mounted (client-side)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Scroll spy effect - client-side only
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that is most visible
                let mostVisibleEntry = null;
                let maxRatio = 0;

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        mostVisibleEntry = entry;
                    }
                });

                if (mostVisibleEntry) {
                    setActiveId((mostVisibleEntry as IntersectionObserverEntry).target.id);
                }
            },
            {
                rootMargin: '-100px 0px -66% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        );

        // Observe all h2 elements in the prose content
        const headingElements = document.querySelectorAll('.prose h2');
        headingElements.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
            observer.observe(heading);
        });

        // Set initial active heading
        if (headingElements.length > 0 && !activeId) {
            setActiveId(headingElements[0].id);
        }

        return () => observer.disconnect();
    }, [content, isMounted]);

    const scrollToHeading = (id: string) => {
        if (typeof window === 'undefined') return;

        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    if (headings.length === 0) return null;

    return (
        <>
            {/* Mobile Toggle - only render on client */}
            {isMounted && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-800 transition-colors"
                >
                    <span>Sommaire</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </button>
            )}

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Table of Contents */}
            <nav className="hidden lg:block">
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                    Sommaire
                </h3>
                <ul className="space-y-4 border-l-2 border-slate-100 pl-4">
                    {headings.map((heading) => (
                        <li key={heading.id}>
                            <button
                                onClick={() => scrollToHeading(heading.id)}
                                className={`
                                    group flex w-full items-start gap-3 text-left text-sm transition-all
                                    ${activeId === heading.id
                                        ? 'font-bold text-primary translate-x-1'
                                        : 'text-slate-500 hover:text-slate-900 hover:translate-x-1'
                                    }
                                `}
                            >
                                <span className="line-clamp-2">{heading.text}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
