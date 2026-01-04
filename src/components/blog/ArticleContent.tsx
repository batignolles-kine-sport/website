import React from 'react';

type ArticleContentProps = {
  html: string;
};

export const ArticleContent: React.FC<ArticleContentProps> = ({ html }) => {
  return (
    <>
      <style>{`
        /* Unordered List Icons */
        .prose ul > li {
            padding-left: 2rem;
            position: relative;
        }
        .prose ul > li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.4em;
          width: 20px;
          height: 20px;
          /* Green check icon */
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231a4d2e' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        /* Ordered List Counters */
        .prose ol {
          counter-reset: phase-counter;
        }
        .prose ol > li {
          counter-increment: phase-counter;
          padding-left: 3.5rem !important;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 1.25rem 1.25rem 1.25rem 3.5rem;
          transition: all 0.2s;
          position: relative;
        }
        .prose ol > li:hover {
          background-color: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }
        .prose ol > li::before {
          content: counter(phase-counter);
          position: absolute;
          left: 1rem;
          top: 1.25rem;
          width: 1.75rem;
          height: 1.75rem;
          background: linear-gradient(135deg, #1a4d2e 0%, #14532d 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.875rem;
          box-shadow: 0 2px 4px rgba(22, 163, 74, 0.2);
        }
        .prose ol > li strong:first-child {
            display: block;
            color: #1a4d2e;
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
        }
      `}</style>
      <div
        className="prose prose-slate max-w-none prose-lg prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-strong:font-bold"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
};
