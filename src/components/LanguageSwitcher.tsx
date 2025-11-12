import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const getCurrentLanguageLabel = () => {
    switch (language) {
      case 'en': return 'EN';
      case 'ur': return 'اردو';
      case 'jp': return '日本';
      default: return 'EN';
    }
  };

  return (
    <>
      {/* Mobile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
          <Button variant="outline" size="sm" className="h-9 px-3 gap-2">
            <Globe className="h-4 w-4" />
            <span className={`text-xs font-medium ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {getCurrentLanguageLabel()}
            </span>
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 bg-background border-2 border-border shadow-xl z-[100]">
          <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
            <span className="text-sm font-medium">EN</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage('ur')} className="cursor-pointer">
            <span className="text-sm font-medium urdu-text">اردو</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage('jp')} className="cursor-pointer">
            <span className="text-sm font-medium japanese-text">日本</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Desktop Button Group */}
      <div className="hidden lg:flex items-center gap-1 bg-muted/50 rounded-lg p-0.5">
        <Globe className="h-3.5 w-3.5 text-muted-foreground ml-1.5" />
        <div className="flex items-center gap-0.5">
          <Button
            variant={language === 'en' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('en')}
            className="h-7 px-2 min-w-[40px] text-xs font-medium"
          >
            EN
          </Button>
          <Button
            variant={language === 'ur' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('ur')}
            className="h-7 px-2 min-w-[40px] text-xs font-medium urdu-text"
          >
            اردو
          </Button>
          <Button
            variant={language === 'jp' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('jp')}
            className="h-7 px-2 min-w-[45px] text-xs font-medium japanese-text"
          >
            日本
          </Button>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
