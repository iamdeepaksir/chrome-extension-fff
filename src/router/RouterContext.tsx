import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  currentPath: string;
  queryParams: URLSearchParams;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  stripSensitiveQueryParams: (keysToKeep?: string[]) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  queryParams: new URLSearchParams(),
  navigate: () => {},
  stripSensitiveQueryParams: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [queryParams, setQueryParams] = useState<URLSearchParams>(
    () => new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setQueryParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const url = new URL(to, window.location.origin);
    const targetPath = url.pathname || '/';
    const targetSearch = url.search;

    if (options?.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    setCurrentPath(targetPath);
    setQueryParams(new URLSearchParams(targetSearch));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Securely strip query parameters from the visible browser URL bar without page refresh
  const stripSensitiveQueryParams = useCallback((keysToKeep: string[] = []) => {
    try {
      const currentUrl = new URL(window.location.href);
      const params = currentUrl.searchParams;
      const keys = Array.from(params.keys());
      let modified = false;

      for (const key of keys) {
        if (!keysToKeep.includes(key)) {
          params.delete(key);
          modified = true;
        }
      }

      if (modified) {
        const cleanUrl = currentUrl.pathname + (params.toString() ? `?${params.toString()}` : '') + currentUrl.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, queryParams, navigate, stripSensitiveQueryParams }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
  'aria-label'?: string;
}> = ({ href, className, children, title, onClick, 'aria-label': ariaLabel }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if middle click or with modifier key (ctrl/cmd) to open in new tab
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
      // If external link or mailto
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
        return;
      }
      e.preventDefault();
      if (onClick) onClick();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      title={title}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
