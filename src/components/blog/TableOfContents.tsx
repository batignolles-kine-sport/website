import React, { useEffect, useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    html: string;
}

// SSR-safe HTML parser that extracts headings without using DOM APIs
function parseHeadingsFromHTML(html: string): Heading[] {
    const headings: Heading[] = [];

    // RegEx to find h2 tags with id and content
    const h2Regex = /<h2[^>]*(?:\s+id="([^"]*)")?[^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/h2>/gi;

    let match;
    let index = 0;

    while ((match = h2Regex.exec(html)) !== null) {
        const id = match[1] || `heading-${index}`;
        // Clean the text: remove HTML tags and trailing # symbols
        let text = match[2]
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/\s*#+$/, '')   // Remove trailing #
            .trim();

        if (text) {
            headings.push({ id, text, level: 2 });
            index++;
        }
    }

    return headings;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ html }) => {
    const [activeId, setActiveId] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Extract headings from HTML content - SSR-safe
    const headings = useMemo(() => {
        return parseHeadingsFromHTML(html);
    }, [html]);

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
    }, [html, isMounted]);

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
            <nav
                className={`
          rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100
          lg:mx-0 lg:mb-0
          ${isOpen ? 'fixed left-0 right-0 z-40 mx-4 mb-8 shadow-lg ring-slate-200 translate-y-0' : 'hidden lg:block'}
        `}
            >
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
                    Sommaire
                </h3>
                <ul className="space-y-2">
                    {headings.map((heading) => (
                        <li key={heading.id}>
                            <button
                                onClick={() => scrollToHeading(heading.id)}
                                className={`
                  group flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all
                  ${activeId === heading.id
                                        ? 'bg-primary/10 !font-bold text-primary'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }
                `}
                            >
                                <span
                                    className={`
                    mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all
                    ${activeId === heading.id ? 'bg-primary scale-125' : 'bg-slate-300'}
                  `}
                                />
                                <span className="line-clamp-2">{heading.text}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
