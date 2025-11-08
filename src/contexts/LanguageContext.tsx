import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    community: "Community Work",
    voiceOfJapan: "Voice of Japan",
    carBusiness: "Car Business",
    activities: "Daily Activities",
    contact: "Contact",
    
    // Hero
    heroTitle: "Connecting Communities Through Leadership & Vision",
    heroSubtitle: "Community Leader | Entrepreneur | Media Founder",
    learnMore: "Learn More",
    whatsappNow: "WhatsApp Now",
    
    // About
    aboutTitle: "About Hafiz Mahar Shamash",
    biography: "Biography",
    
    // Community
    communityTitle: "Community Leadership & Relations",
    diplomaticWork: "Diplomatic & Community Work",
    
    // Voice of Japan
    voiceTitle: "Voice of Japan Media Platform",
    latestNews: "Latest Updates",
    
    // Car Business
    carTitle: "Quality Used Japanese Cars",
    trustQuality: "Trust, Quality & Reliability",
    inquireNow: "Inquire Now",
    
    // Activities
    activitiesTitle: "Daily Activities & Updates",
    
    // Contact
    contactTitle: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    chatOnWhatsApp: "Chat on WhatsApp",
    
    // Footer
    connectingHearts: "Building Bridges, Creating Opportunities",
    designedBy: "Designed by Shabbir Bhatti",
  },
  ur: {
    // Navigation
    home: "ہوم",
    about: "تعارف",
    community: "کمیونٹی کام",
    voiceOfJapan: "وائس آف جاپان",
    carBusiness: "کار کاروبار",
    activities: "روزانہ سرگرمیاں",
    contact: "رابطہ",
    
    // Hero
    heroTitle: "قیادت اور وژن کے ذریعے کمیونٹیز کو جوڑنا",
    heroSubtitle: "کمیونٹی لیڈر | کاروباری | میڈیا بانی",
    learnMore: "مزید جانیں",
    whatsappNow: "واٹس ایپ کریں",
    
    // About
    aboutTitle: "حافظ مہر شمس کے بارے میں",
    biography: "سوانح حیات",
    
    // Community
    communityTitle: "کمیونٹی قیادت اور تعلقات",
    diplomaticWork: "سفارتی اور کمیونٹی کام",
    
    // Voice of Japan
    voiceTitle: "وائس آف جاپان میڈیا پلیٹ فارم",
    latestNews: "تازہ ترین خبریں",
    
    // Car Business
    carTitle: "معیاری جاپانی استعمال شدہ گاڑیاں",
    trustQuality: "اعتماد، معیار اور وشوسنییتا",
    inquireNow: "ابھی پوچھیں",
    
    // Activities
    activitiesTitle: "روزانہ کی سرگرمیاں اور اپ ڈیٹس",
    
    // Contact
    contactTitle: "رابطے میں رہیں",
    name: "نام",
    email: "ای میل",
    message: "پیغام",
    sendMessage: "پیغام بھیجیں",
    chatOnWhatsApp: "واٹس ایپ پر چیٹ کریں",
    
    // Footer
    connectingHearts: "پل بنانا، مواقع پیدا کرنا",
    designedBy: "ڈیزائن از شبیر بھٹی",
  },
  jp: {
    // Navigation
    home: "ホーム",
    about: "プロフィール",
    community: "コミュニティ活動",
    voiceOfJapan: "ボイス・オブ・ジャパン",
    carBusiness: "中古車事業",
    activities: "日々の活動",
    contact: "お問い合わせ",
    
    // Hero
    heroTitle: "リーダーシップとビジョンでコミュニティを繋ぐ",
    heroSubtitle: "コミュニティリーダー | 起業家 | メディア創設者",
    learnMore: "詳細を見る",
    whatsappNow: "WhatsAppで連絡",
    
    // About
    aboutTitle: "ハーフィズ・マハル・シャマシュについて",
    biography: "経歴",
    
    // Community
    communityTitle: "コミュニティリーダーシップと関係",
    diplomaticWork: "外交・コミュニティ活動",
    
    // Voice of Japan
    voiceTitle: "ボイス・オブ・ジャパン メディアプラットフォーム",
    latestNews: "最新ニュース",
    
    // Car Business
    carTitle: "高品質日本中古車",
    trustQuality: "信頼、品質、信頼性",
    inquireNow: "今すぐお問い合わせ",
    
    // Activities
    activitiesTitle: "日々の活動とアップデート",
    
    // Contact
    contactTitle: "お問い合わせ",
    name: "お名前",
    email: "メールアドレス",
    message: "メッセージ",
    sendMessage: "送信",
    chatOnWhatsApp: "WhatsAppでチャット",
    
    // Footer
    connectingHearts: "架け橋を築き、機会を創造する",
    designedBy: "デザイン：シャビール・バッティ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
