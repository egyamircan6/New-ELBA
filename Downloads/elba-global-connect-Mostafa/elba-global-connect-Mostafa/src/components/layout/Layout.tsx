import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ServiceRequestPopup from '../Form/ServiceRequestPopup';
import PromoPopup from '../PromoPopup';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isRTL } = useLanguage();
  const [isServicePopupOpen, setIsServicePopupOpen] = useState(false);

  return (
    <div className={cn(
      "min-h-screen flex flex-col",
      isRTL ? "font-cairo" : "font-sans"
    )}>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Popups */}
      <ServiceRequestPopup  domain ="https://elba-eg.com"  isOpen={isServicePopupOpen}  onClose={() => setIsServicePopupOpen(false)} showOnLoad={true}  />
      <PromoPopup />
    </div>
  );
};

export default Layout;
