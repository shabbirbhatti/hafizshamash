import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
      <Globe className="h-4 w-4 text-muted-foreground ml-2" />
      <div className="flex items-center gap-0.5">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="h-8 px-2.5 min-w-[50px] text-xs font-medium"
        >
          EN
        </Button>
        <Button
          variant={language === 'ur' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('ur')}
          className="h-8 px-2.5 min-w-[50px] text-xs font-medium urdu-text"
        >
          اردو
        </Button>
        <Button
          variant={language === 'jp' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('jp')}
          className="h-8 px-2.5 min-w-[60px] text-xs font-medium japanese-text"
        >
          日本
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
