

# Elba Appliances Maintenance Website

A bilingual (Arabic/English) website for Elba cooker and appliance maintenance services with a bold, professional design.

---

## 🌐 Core Features

### Language System
- Toggle switch in header to switch between Arabic (RTL) and English (LTR)
- All pages available in both languages
- Proper right-to-left layout support for Arabic content

### Navigation & Header
- Sticky header with Elba logo
- Main menu: Home, Devices, Blog, Contact Us
- Language toggle button (AR/EN)
- WhatsApp quick-contact button
- Mobile hamburger menu

---

## 📄 Pages Structure

### 1. Home Page (EN & AR)
- **Hero Section**: Full-screen with video/animated gradient background, bold headline "Professional Elba Appliance Maintenance", and call-to-action buttons
- **Services Overview**: Cards showcasing repair, installation, and maintenance services
- **Why Choose Us**: Trust badges, years of experience, certified technicians
- **Latest Blog Articles**: 3 recent maintenance tips
- **Contact CTA Section**: Phone and WhatsApp quick links

### 2. Devices Page (EN & AR)
- **Hero with Image Slider**: Rotating images of Elba appliances
- **Dropdown Filter Menu**: Filter by device type (Cookers, Ovens, Hoods)
- **Device Grid**: Cards showing different Elba appliance models with "Request Service" buttons
- **Animated category sections** with hover effects

### 3. Blog Page (EN & AR)
- Grid of article cards with thumbnail, title, excerpt
- Categories/tags for filtering
- Sample articles about appliance maintenance tips

### 4. Article Detail Page (EN & AR)
- Full article content with proper typography
- Related articles sidebar
- Share buttons
- Service request CTA at bottom

### 5. Contact Us Page (EN & AR)
- Contact information (phone, WhatsApp, email)
- Working hours
- Service areas covered
- Map placeholder
- Contact form (links to WhatsApp/Phone)

### 6. Privacy Policy Page (EN & AR)
- Full privacy policy content (adapted from reference)
- Clean, readable layout

### 7. Copyright Page (EN & AR)
- Copyright policy content (adapted from reference)
- Legal information

---

## 🎯 Interactive Elements

### Service Request Popup
- Appears on page load (with delay) or button click
- Fields: Name, Phone Number, Appliance Type dropdown (Cooker/Oven/Hood), Issue Description
- Submit opens WhatsApp with pre-filled message containing all form data

### Promotional Popup
- Dismissible banner/modal for special offers
- "Don't show again" option using local storage

---

## 🎨 Design Style

- **Bold & Professional**: Strong contrast, impactful hero sections
- **Colors**: Based on Elba brand (we'll use professional blues/dark tones)
- **Animations**: Smooth fade-ins, slide effects, hover interactions
- **Typography**: Clean, modern fonts with clear hierarchy
- **RTL Support**: Proper Arabic text alignment and mirrored layouts

---

## 📱 Responsiveness
- Fully responsive design for mobile, tablet, and desktop
- Touch-friendly navigation for mobile
- Optimized hero sections for all screen sizes

---

## 🔧 Technical Approach
Since Lovable uses React (not Next.js), we'll implement:
- React Router for page navigation
- Meta tags component for SEO optimization
- i18n context for language switching
- Local storage for user preferences (language, popup dismissed)
- WhatsApp deep links for form submissions

