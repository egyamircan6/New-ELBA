import React from "react";
import footerBg from '../../../assets/footer.png'
import logo from '../../../assets/logo (2).png'

export default function Footer() {
  return (
   <footer 
  dir="rtl" 
  className="relative text-white py-10 px-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${footerBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-4 gap-20">

    <div>

      <img src={logo}alt="" />
    </div>

    {/* الصفحات الاساسية */}
    <div>
      <h3 className="text-sm font-bold mb-4">الصفحات الاساسية</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="#" className="hover:text-white">الرئيسية</a></li>
        <li><a href="#" className="hover:text-white">من نحن</a></li>
        <li><a href="#" className="hover:text-white">تواصل معنا</a></li>
        <li><a href="#" className="hover:text-white">المدونه</a></li>
      </ul>
    </div>

    {/* السياسات */}
    <div>
      <h3 className="text-sm font-bold mb-4">السياسات</h3>
      <ul className="text-gray-300 text-sm">
        <li><a href="#" className="hover:text-white">سياسة الخصوصية</a></li>
      </ul>
    </div>

    {/* تواصل معنا + اللوجو */}
    <div className="flex  gap-4">
      
      <div>
        <h3 className="text-sm font-bold mb-3">تواصل معنا</h3>
        <div className="flex gap-2">
          
          <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" className="w-4 h-4" />
          </a>

          <a href="#" className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" className="w-4 h-4 invert" />
          </a>

          <a href="#" className="w-7 h-7 rounded-full bg-[#1877F2] flex items-center justify-center">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" className="w-4 h-4 invert" />
          </a>

        </div>
      </div>

      {/* Logo */}
    
    </div>
  
  </div>

  
</footer>
  );
}