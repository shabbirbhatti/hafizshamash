import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-0.5">
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
  );
};

export default LanguageSwitcher;
