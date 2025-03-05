import { Link } from "@remix-run/react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo-light.png" 
            className="h-8 dark:hidden" 
            alt="Logo" 
          />
          <img 
            src="/logo-dark.png" 
            className="h-8 hidden dark:block" 
            alt="Logo" 
          />
        </Link>
        
        <div className="flex gap-6 items-center">
          <ThemeToggle />
          <div className="flex gap-4">
            <Link 
              to="/news/world" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              World
            </Link>
            <Link 
              to="/news/tech" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              Technology
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
