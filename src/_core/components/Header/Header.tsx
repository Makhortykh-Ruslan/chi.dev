import StarBorder from '@/components/StarBorder';

import { HEADER_CONFIG } from './constants/header.config';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">Chi.dev</div>

        {/* Navigation via anchors */}
        <nav className="flex gap-6">
          {HEADER_CONFIG.map((el) => (
            <a
              key={el.id}
              href={`#${el.id}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {el.name}
            </a>
          ))}
        </nav>

        <StarBorder
          as="button"
          className="custom-class"
          color="cyan"
          speed="5s"
        >
          Download CV
        </StarBorder>
      </div>
    </header>
  );
};
