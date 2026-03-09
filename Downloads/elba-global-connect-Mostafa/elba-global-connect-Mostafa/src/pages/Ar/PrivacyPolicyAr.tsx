import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const PrivacyPolicy = () => {
  const { t, isRTL, language } = useLanguage();

  const sections = [
    { title: t('privacy.collection.title'), content: t('privacy.collection.desc') },
    { title: t('privacy.use.title'), content: t('privacy.use.desc') },
    { title: t('privacy.protection.title'), content: t('privacy.protection.desc') },
    { title: t('privacy.sharing.title'), content: t('privacy.sharing.desc') },
    { title: t('privacy.cookies.title'), content: t('privacy.cookies.desc') },
    { title: t('privacy.contact.title'), content: t('privacy.contact.desc') },
  ];

  return (
    <Layout>
      <SEOHead 
        title={language === 'ar' ? 'سياسة الخصوصية - صيانة إلبا' : 'Privacy Policy - Elba Maintenance'}
        description={language === 'ar' 
          ? 'سياسة الخصوصية لموقع صيانة إلبا. تعرف على كيفية حماية معلوماتك.'
          : 'Privacy Policy for Elba Maintenance website. Learn how we protect your information.'
        }
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4 text-foreground",
            isRTL ? "font-cairo" : "font-sans"
          )}>
            {t('privacy.title')}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-10">
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {t('privacy.intro')}
                </p>

                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <div 
                      key={index}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h2 className={cn(
                        "text-xl md:text-2xl font-bold mb-3 text-foreground",
                        isRTL ? "font-cairo" : "font-sans"
                      )}>
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                  <p>
                    {isRTL 
                      ? `آخر تحديث: ${new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}`
                      : `Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
