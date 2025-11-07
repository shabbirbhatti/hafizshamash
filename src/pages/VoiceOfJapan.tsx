import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Facebook, Newspaper } from 'lucide-react';

const VoiceOfJapan = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Newspaper className="h-16 w-16 mx-auto text-primary" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary animate-fadeIn ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('voiceTitle')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? 'Your trusted source for Pakistani community news, events, and stories in Japan'
              : language === 'ur'
              ? 'جاپان میں پاکستانی کمیونٹی کی خبروں، تقریبات اور کہانیوں کا آپ کا قابل اعتماد ذریعہ'
              : '日本のパキスタンコミュニティのニュース、イベント、ストーリーのための信頼できる情報源'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://www.youtube.com/@VoiceofJapanOfficial" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" />
                YouTube Channel
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="https://www.facebook.com/meharshamas/" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-5 w-5" />
                Facebook Page
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Voice of Japan */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-8 text-center text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'About Voice of Japan' : language === 'ur' ? 'وائس آف جاپان کے بارے میں' : 'ボイス・オブ・ジャパンについて'}
            </h2>
            {language === 'en' && (
              <div className="prose prose-lg mx-auto">
                <p className="mb-4">
                  Voice of Japan is a premier media platform dedicated to serving the Pakistani diaspora in Japan. 
                  Founded by Hafiz Mahar Shamash, it has become the go-to source for community news, cultural content, 
                  and vital information for Pakistanis living in Japan.
                </p>
                <p className="mb-4">
                  Through our YouTube channel and Facebook page, we provide comprehensive coverage of community events, 
                  diplomatic activities, cultural celebrations, and important updates that matter to our community.
                </p>
                <p>
                  Voice of Japan bridges the communication gap, ensuring that Pakistani expatriates stay connected 
                  with their roots while successfully integrating into Japanese society.
                </p>
              </div>
            )}
            {language === 'ur' && (
              <div className="prose prose-lg mx-auto urdu-text">
                <p className="mb-4">
                  وائس آف جاپان جاپان میں پاکستانی تارکین وطن کی خدمت کے لیے وقف ایک اولین میڈیا پلیٹ فارم ہے۔
                  حافظ مہر شمس کی طرف سے قائم کیا گیا، یہ جاپان میں رہنے والے پاکستانیوں کے لیے کمیونٹی کی خبروں، 
                  ثقافتی مواد، اور اہم معلومات کا مرکز بن گیا ہے۔
                </p>
                <p className="mb-4">
                  ہمارے یوٹیوب چینل اور فیس بک پیج کے ذریعے، ہم کمیونٹی کی تقریبات، سفارتی سرگرمیوں، 
                  ثقافتی تقریبات، اور اہم اپ ڈیٹس کی جامع کوریج فراہم کرتے ہیں جو ہماری کمیونٹی کے لیے اہمیت رکھتی ہیں۔
                </p>
                <p>
                  وائس آف جاپان مواصلاتی خلا کو پر کرتا ہے، اس بات کو یقینی بناتے ہوئے کہ پاکستانی تارکین وطن 
                  اپنی جڑوں سے جڑے رہیں جبکہ جاپانی معاشرے میں کامیابی سے ضم ہو رہے ہیں۔
                </p>
              </div>
            )}
            {language === 'jp' && (
              <div className="prose prose-lg mx-auto japanese-text">
                <p className="mb-4">
                  ボイス・オブ・ジャパンは、日本のパキスタン人ディアスポラにサービスを提供することに特化した
                  プレミアメディアプラットフォームです。ハーフィズ・マハル・シャマシュによって設立され、
                  日本に住むパキスタン人にとってのコミュニティニュース、文化的コンテンツ、
                  重要な情報の情報源となっています。
                </p>
                <p className="mb-4">
                  YouTubeチャンネルとFacebookページを通じて、コミュニティイベント、外交活動、
                  文化的祝賀、そしてコミュニティにとって重要な更新情報の包括的なカバレッジを提供しています。
                </p>
                <p>
                  ボイス・オブ・ジャパンはコミュニケーションのギャップを埋め、パキスタンの海外在住者が
                  日本社会にうまく統合されながら、そのルーツとつながり続けることを保証します。
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'What We Cover' : language === 'ur' ? 'ہم کیا کور کرتے ہیں' : '取り扱うコンテンツ'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-fadeIn">
              <CardContent className="p-6 text-center">
                <h3 className={`font-semibold text-lg mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Community News' : language === 'ur' ? 'کمیونٹی خبریں' : 'コミュニティニュース'}
                </h3>
                <p className={`text-sm ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en'
                    ? 'Latest updates from Pakistani community in Japan'
                    : language === 'ur'
                    ? 'جاپان میں پاکستانی کمیونٹی سے تازہ ترین خبریں'
                    : '日本のパキスタンコミュニティの最新情報'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <h3 className={`font-semibold text-lg mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Cultural Events' : language === 'ur' ? 'ثقافتی تقریبات' : '文化イベント'}
                </h3>
                <p className={`text-sm ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en'
                    ? 'Coverage of cultural celebrations and gatherings'
                    : language === 'ur'
                    ? 'ثقافتی تقریبات اور اجتماعات کی کوریج'
                    : '文化的祝賀と集まりの報道'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <h3 className={`font-semibold text-lg mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Diplomatic Updates' : language === 'ur' ? 'سفارتی اپ ڈیٹس' : '外交アップデート'}
                </h3>
                <p className={`text-sm ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en'
                    ? 'Pakistan-Japan relations and embassy activities'
                    : language === 'ur'
                    ? 'پاکستان-جاپان تعلقات اور سفارت خانے کی سرگرمیاں'
                    : 'パキスタン・日本関係と大使館活動'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <h3 className={`font-semibold text-lg mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Success Stories' : language === 'ur' ? 'کامیابی کی کہانیاں' : 'サクセスストーリー'}
                </h3>
                <p className={`text-sm ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en'
                    ? 'Inspiring stories from Pakistani community'
                    : language === 'ur'
                    ? 'پاکستانی کمیونٹی کی متاثر کن کہانیاں'
                    : 'パキスタンコミュニティからの感動的なストーリー'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Stay Connected' : language === 'ur' ? 'جڑے رہیں' : 'つながり続ける'}
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? 'Subscribe to our channels for the latest updates and community news'
              : language === 'ur'
              ? 'تازہ ترین خبروں اور کمیونٹی کی خبروں کے لیے ہمارے چینلز کو سبسکرائب کریں'
              : '最新情報とコミュニティニュースについては、チャンネルを登録してください'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://www.youtube.com/@VoiceofJapanOfficial" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe on YouTube
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="https://www.facebook.com/meharshamas/" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-5 w-5" />
                Follow on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceOfJapan;
