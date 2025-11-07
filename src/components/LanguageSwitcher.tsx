import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="h-8 px-3"
        >
          EN
        </Button>
        <Button
          variant={language === 'ur' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('ur')}
          className="h-8 px-3 urdu-text"
        >
          اردو
        </Button>
        <Button
          variant={language === 'jp' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('jp')}
          className="h-8 px-3 japanese-text"
        >
          日本語
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
