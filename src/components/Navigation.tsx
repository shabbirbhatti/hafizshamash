import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/car-business', label: t('carBusiness') },
    { path: '/contact', label: t('contact') },
  ];

  const communityItems = [
    { path: '/community', label: t('community') },
    { path: '/voice-of-japan', label: t('voiceOfJapan') },
    { path: '/activities', label: t('activities') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Hafiz Mehar Shamash Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform"
            />
            <span className={`font-bold text-base sm:text-lg text-foreground whitespace-nowrap ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'Hafiz Mehar Shamash' : language === 'ur' ? 'حافظ مہر شمس' : 'ハーフィズ・シャマシュ'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all hover:text-primary relative pb-1 whitespace-nowrap ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                } ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
            
            {/* Community Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-all hover:text-primary relative pb-1 whitespace-nowrap inline-flex items-center gap-1 h-auto p-0 ${
                    communityItems.some(item => isActive(item.path)) ? 'text-primary' : 'text-foreground'
                  } ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}
                >
                  {language === 'en' ? 'Community Work' : language === 'ur' ? 'کمیونٹی ورک' : 'コミュニティワーク'}
                  <ChevronDown className="h-3.5 w-3.5" />
                  {communityItems.some(item => isActive(item.path)) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border-2 border-border shadow-xl z-[100]">
                {communityItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`w-full cursor-pointer hover:bg-muted transition-colors py-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary py-2 ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  } ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Community Work Section */}
              <div className="border-t border-border pt-4 mt-2">
                <p className={`text-sm font-bold text-foreground mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Community Work' : language === 'ur' ? 'کمیونٹی ورک' : 'コミュニティワーク'}
                </p>
                <div className="space-y-1">
                  {communityItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium transition-colors hover:text-primary hover:bg-muted/50 py-3 px-4 block rounded-lg ${
                        isActive(item.path) ? 'text-primary bg-muted' : 'text-foreground'
                      } ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
