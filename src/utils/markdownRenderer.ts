import { marked, Tokens } from 'marked';
import { getCloudinaryImage, pathToPublicId, isCloudinaryImage } from './cloudinary';

// SVG Icons as strings for injection
const ICONS = {
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  tip: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  quote: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a4d2e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
};

// Helper to safely convert unknown input to string
const safeString = (input: unknown): string => {
  if (typeof input === 'string') return input;
  if (input && typeof input === 'object' && 'text' in input && typeof input.text === 'string') {
    return input.text;
  }
  return String(input ?? '');
};

// Helper to parse inline markdown (e.g. bold, italic within headers/cells)
const parseInline = (text: string): string => {
  try {
    if (typeof marked.parseInline === 'function') {
      return marked.parseInline(text) as string;
    }
    return text;
  } catch (e) {
    return text;
  }
};

// Helper to parse block markdown (e.g. list items, blockquotes)
const parseBlock = (text: string): string => {
  try {
    const res = marked.parse(text);
    if (typeof res === 'string') return res;
    return text;
  } catch (e) {
    return text;
  }
};

const renderer = {
  // 1. HEADINGS
  heading(token: Tokens.Heading) {
    const text = token.text;
    const depth = token.depth;
    const inner = parseInline(text);

    const slug = safeString(text)
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    const sizes: Record<number, string> = {
      1: 'text-4xl',
      2: 'text-3xl text-slate-900 mt-16 mb-6 pb-4 border-b border-slate-100',
      3: 'text-2xl text-slate-800 mt-10 mb-4',
      4: 'text-xl font-semibold text-slate-700 mt-8 mb-3'
    };

    // Use ICONS.link for the anchor instead of the text '#', avoiding ToC pollution
    return `
      <h${depth} id="${slug}" class="${sizes[depth] || ''} scroll-mt-32 relative group">
        ${inner}
        <a href="#${slug}" class="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-slate-300 hover:text-primary transition-all p-1" aria-label="Lien vers cette section">
          ${ICONS.link}
        </a>
      </h${depth}>
    `;
  },

  // 2. TABLES
  table(token: Tokens.Table) {
    let headerHtml = '';
    let bodyHtml = '';

    if (token.header) {
      headerHtml += '<tr>';
      token.header.forEach((cell) => {
        const content = parseInline(cell.text);
        headerHtml += `<th class="px-6 py-4">${content}</th>`;
      });
      headerHtml += '</tr>';
    }

    if (token.rows) {
      token.rows.forEach((row) => {
        bodyHtml += '<tr>';
        row.forEach((cell) => {
          const content = parseInline(cell.text);
          bodyHtml += `<td class="px-6 py-4">${content}</td>`;
        });
        bodyHtml += '</tr>';
      });
    }

    return `
      <div class="w-full overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm bg-white">
        <table class="w-full text-sm text-left border-collapse min-w-[600px]">
          <thead class="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
            ${headerHtml}
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${bodyHtml}
          </tbody>
        </table>
      </div>
    `;
  },

  // 3. BLOCKQUOTES
  blockquote(token: Tokens.Blockquote) {
    const text = token.text;
    const content = parseBlock(text);
    const cleanQuote = safeString(text).replace(/<p>|<\/p>|\n/g, '');

    let type = 'default';
    let icon = ICONS.quote;
    let classes = 'bg-white border-primary/30';

    if (cleanQuote.includes('Attention') || cleanQuote.includes('Warning')) {
      type = 'warning';
      icon = ICONS.warning;
      classes = 'bg-orange-50 border-orange-200 text-orange-900';
    } else if (cleanQuote.includes('Conseil') || cleanQuote.includes('Tip')) {
      type = 'tip';
      icon = ICONS.tip;
      classes = 'bg-green-50 border-green-200 text-green-900';
    } else if (cleanQuote.includes('Le saviez-vous') || cleanQuote.includes('Info')) {
      type = 'info';
      icon = ICONS.info;
      classes = 'bg-blue-50 border-blue-200 text-blue-900';
    }

    return `
      <blockquote class="relative pl-6 pr-4 py-4 my-8 rounded-lg border-l-4 shadow-sm ${classes} not-italic">
        <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg opacity-50"></div>
        <div class="flex flex-col gap-2 relative z-10">
          <div class="absolute -left-3 -top-2 bg-white/50 p-1 rounded-full backdrop-blur-sm border border-black/5 opacity-0"> 
             ${icon} 
          </div>
          <div class="prose-blockquote-content ml-2 [&>p]:m-0 [&>p>strong]:block [&>p>strong]:mb-1 [&>p>strong]:text-lg">
            ${content}
          </div>
        </div>
      </blockquote>
    `;
  },

  // 4. LISTS
  list(token: Tokens.List) {
    const ordered = token.ordered;
    const start = token.start;
    let body = '';

    if (token.items) {
      token.items.forEach((item) => {
        const content = parseBlock(item.text);
        body += `<li class="relative leading-relaxed group text-slate-600">${content}</li>`;
      });
    }

    if (ordered) {
      return `
        <ol class="space-y-4 my-8 list-none counter-reset-phase-counter" start="${start || 1}">
          ${body}
        </ol>
      `;
    }
    return `
      <ul class="space-y-3 my-6 list-none pl-2">
        ${body}
      </ul>
    `;
  },

  // 5. IMAGES
  image(token: Tokens.Image) {
    const href = token.href;
    const title = token.title;
    const text = token.text;
    const src = safeString(href);

    // Détection si l'image est locale (commence par / ou ./)
    const isLocal = src.startsWith('/') || src.startsWith('./');

    // Extraction du chemin et de l'extension
    const lastDotIndex = src.lastIndexOf('.');
    const extension = lastDotIndex > -1 ? src.substring(lastDotIndex) : '';
    const basePath = lastDotIndex > -1 ? src.substring(0, lastDotIndex) : src;

    // Génération du HTML pour l'image
    let pictureHtml = '';

    if (isCloudinaryImage(src)) {
      const publicId = pathToPublicId(src);

      // Générer les URLs Cloudinary pour le srcset
      // Note: getCloudinaryImage retourne un objet CloudinaryImage qui a une méthode .toURL()
      const w480 = getCloudinaryImage(publicId, { width: 480 }).toURL();
      const w800 = getCloudinaryImage(publicId, { width: 800 }).toURL();
      const w1200 = getCloudinaryImage(publicId, { width: 1200 }).toURL();
      const w1600 = getCloudinaryImage(publicId, { width: 1600 }).toURL();

      // Image par défaut (fallback)
      const defaultSrc = w800;

      pictureHtml = `
        <img 
          src="${defaultSrc}" 
          srcset="${w480} 480w, ${w800} 800w, ${w1200} 1200w, ${w1600} 1600w"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          alt="${safeString(text)}" 
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style="aspect-ratio: 16 / 9;"
          loading="lazy"
          decoding="async"
        />
      `;
    } else {
      // Image externe
      pictureHtml = `
        <img 
          src="${src}" 
          alt="${safeString(text)}" 
          class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style="aspect-ratio: 16 / 9;"
          loading="lazy"
          decoding="async"
        />
      `;
    }

    return `
      <figure class="my-8 group">
        <div class="overflow-hidden rounded-2xl border border-slate-100 shadow-md bg-slate-50">
          ${pictureHtml}
        </div>
        ${title ? `<figcaption class="mt-2 text-center text-sm text-slate-500 italic">${safeString(title)}</figcaption>` : ''}
      </figure>
    `;
  }
};

// Use the custom renderer
marked.use({ renderer });

export const renderMarkdown = (content: string): string => {
  try {
    if (!content) return '';
    // Ensure sync parsing
    const res = marked.parse(content);
    if (typeof res === 'string') return res;
    return '<div class="text-amber-600">Error: Async markdown rendering not supported.</div>';
  } catch (error) {
    console.error('Error rendering markdown:', error);
    return `<div class="p-4 bg-red-50 text-red-600 rounded">Error rendering content.</div>`;
  }
};
