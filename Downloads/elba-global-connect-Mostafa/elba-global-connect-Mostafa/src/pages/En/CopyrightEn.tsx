import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Copyright = () => {
  const { t, isRTL, language } = useLanguage();

  const sections = [
    { title: t('copyright.ownership.title'), content: t('copyright.ownership.desc') },
    { title: t('copyright.permitted.title'), content: t('copyright.permitted.desc') },
    { title: t('copyright.restrictions.title'), content: t('copyright.restrictions.desc') },
    { title: t('copyright.trademarks.title'), content: t('copyright.trademarks.desc') },
    { title: t('copyright.infringement.title'), content: t('copyright.infringement.desc') },
  ];

  return (
    <Layout>
      <SEOHead 
        title={language === 'ar' ? 'حقوق الطبع والنشر - صيانة إلبا' : 'Copyright Policy - Elba Maintenance'}
        description={language === 'ar' 
          ? 'سياسة حقوق الطبع والنشر لموقع صيانة إلبا.'
          : 'Copyright Policy for Elba Maintenance website.'
        }
      />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-4 text-foreground",
            isRTL ? "font-cairo" : "font-sans"
          )}>
            {t('copyright.title')}
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
                  {t('copyright.intro')}
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
                    © {new Date().getFullYear()} {t('footer.brand')}. {t('footer.rights')}.
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

export default Copyright;
