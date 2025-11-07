import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import bannerUrdu from '@/assets/banner-urdu.jpg';
import meeting1 from '@/assets/meeting-1.jpg';
import ceremony from '@/assets/ceremony.jpg';

const Activities = () => {
  const { t, language } = useLanguage();

  const activities = [
    {
      date: '2025-01-15',
      title: {
        en: 'Community Meeting with Pakistan Embassy',
        ur: 'پاکستان سفارت خانے کے ساتھ کمیونٹی میٹنگ',
        jp: 'パキスタン大使館とのコミュニティミーティング',
      },
      description: {
        en: 'Important community meeting discussing welfare programs and upcoming events',
        ur: 'فلاحی پروگراموں اور آنے والی تقریبات پر بحث کرنے والی اہم کمیونٹی میٹنگ',
        jp: '福祉プログラムと今後のイベントについて議論する重要なコミュニティミーティング',
      },
      image: meeting1,
    },
    {
      date: '2025-01-10',
      title: {
        en: 'Cultural Exchange Program',
        ur: 'ثقافتی تبادلے کا پروگرام',
        jp: '文化交流プログラム',
      },
      description: {
        en: 'Successful cultural exchange event promoting Pakistan-Japan friendship',
        ur: 'پاکستان-جاپان دوستی کو فروغ دینے والی کامیاب ثقافتی تبادلے کی تقریب',
        jp: 'パキスタン・日本友好を促進する成功した文化交流イベント',
      },
      image: ceremony,
    },
    {
      date: '2025-01-05',
      title: {
        en: 'Business Networking Event',
        ur: 'کاروباری نیٹ ورکنگ ایونٹ',
        jp: 'ビジネスネットワーキングイベント',
      },
      description: {
        en: 'Connecting Pakistani entrepreneurs and businesses in Japan',
        ur: 'جاپان میں پاکستانی کاروباری افراد اور کاروبار کو جوڑنا',
        jp: '日本のパキスタン起業家とビジネスをつなぐ',
      },
      image: bannerUrdu,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Calendar className="h-16 w-16 mx-auto text-primary" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary animate-fadeIn ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('activitiesTitle')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? 'Stay updated with the latest community activities and events'
              : language === 'ur'
              ? 'تازہ ترین کمیونٹی سرگرمیوں اور تقریبات سے اپ ڈیٹ رہیں'
              : '最新のコミュニティ活動とイベントをご確認ください'}
          </p>
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {activities.map((activity, index) => (
              <Card key={index} className="animate-fadeIn overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img
                      src={activity.image}
                      alt={activity.title[language]}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-2 p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(activity.date).toLocaleDateString(
                          language === 'en' ? 'en-US' : language === 'ur' ? 'ur-PK' : 'ja-JP',
                          { year: 'numeric', month: 'long', day: 'numeric' }
                        )}
                      </span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      {activity.title[language]}
                    </h3>
                    <p className={`text-muted-foreground ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      {activity.description[language]}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className={`text-xl font-semibold mb-4 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {language === 'en' ? 'Stay Connected' : language === 'ur' ? 'جڑے رہیں' : 'つながり続ける'}
              </h3>
              <p className={`mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {language === 'en'
                  ? 'Follow Voice of Japan on social media for real-time updates on community activities and events'
                  : language === 'ur'
                  ? 'کمیونٹی کی سرگرمیوں اور تقریبات پر حقیقی وقت کی اپ ڈیٹس کے لیے سوشل میڈیا پر وائس آف جاپان کو فالو کریں'
                  : 'コミュニティの活動やイベントのリアルタイム更新については、ソーシャルメディアでボイス・オブ・ジャパンをフォローしてください'}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Activities;
