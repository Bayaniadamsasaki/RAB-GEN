# 📊 RAB Generator - Rencana Anggaran Biaya

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> **RAB Generator** adalah aplikasi web modern untuk membuat dan mengelola Rencana Anggaran Biaya (RAB) secara digital dengan interface yang intuitif seperti Excel.

## ✨ Fitur Utama

### 💼 **Manajemen Project**
- 🏢 **Informasi Project** - Input nama project, lokasi, durasi, dan jenis pekerjaan
- 💾 **Save & Load Project** - Simpan dan muat kembali project dengan localStorage
- 🗂️ **Multi Project Management** - Kelola multiple project sekaligus
- 🗑️ **Delete Project** - Hapus project dengan konfirmasi modal

### 📋 **RAB Calculator**
- 📊 **Excel-like Interface** - Tampilan familiar seperti spreadsheet
- 🧮 **Auto Calculation** - Hitung otomatis subtotal dan grand total
- 📈 **Percentage Calculation** - Hitung bobot persentase setiap item
- 💰 **Terbilang Otomatis** - Konversi angka ke terbilang bahasa Indonesia

### 📱 **User Experience**
- 📱 **Responsive Design** - Optimal di desktop, tablet, dan mobile
- 🌙 **Dark Theme** - Interface modern dengan tema gelap
- 🔔 **Toast Notifications** - Notifikasi yang elegan tanpa alert popup
- 📌 **Sticky Navigation** - Header dan toolbar tetap terlihat saat scroll

### 📤 **Export & Print**
- 📊 **Excel Export** - Export ke file .xlsx dengan formatting lengkap
- 🖨️ **Print Ready** - Optimized untuk print dengan styling khusus
- 📋 **Tanda Tangan Digital** - Input field untuk nama instansi, jabatan, dan nama

## 🚀 Quick Start

### Prerequisites
- Node.js
- npm atau yarn
- Browser modern (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone Repository**
```bash
git clone https://github.com/Bayaniadamsasaki/RAB-GEN.git
cd RAB-GEN
```

2. **Install Dependencies**
```bash
npm install
# atau
yarn install
```

3. **Run Development Server**
```bash
npm run dev
# atau
yarn dev
```

4. **Open Browser**
```
http://localhost:3000
```

## 📖 Cara Penggunaan

### 1. **Setup Project**
- Isi informasi project (nama, lokasi, durasi, jenis pekerjaan)
- Data akan tersimpan otomatis dalam session

### 2. **Input RAB Data**
- Klik cell untuk edit langsung (seperti Excel)
- Masukkan item pekerjaan, qty, satuan, dan fee
- Total akan terhitung otomatis

### 3. **Kelola Categories**
- Setiap category memiliki subtotal dan persentase
- Tambah/hapus item dalam category
- Lihat deskripsi category untuk panduan

### 4. **Signature Information**
- Isi nama instansi/startup
- Input jabatan dan nama penanggung jawab
- Data akan muncul di export Excel

### 5. **Save Project**
- Klik "Save Project" untuk menyimpan
- Beri nama project untuk identifikasi
- Project tersimpan di browser storage

### 6. **Export Excel**
- Klik "Export Excel" untuk download
- File berformat .xlsx siap print
- Include terbilang dan signature

## 🏗️ Struktur Project

```
RAB-GEN/
├── 📁 app/
│   ├── 📁 components/
│   │   ├── 📄 ExcelWorkspace.jsx    # Main RAB interface
│   │   └── 📄 HeaderNew.jsx         # Navigation header
│   ├── 📄 globals.css               # Global styles
│   ├── 📄 layout.jsx                # Root layout
│   └── 📄 page.jsx                  # Home page
├── 📁 public/                       # Static assets
├── 📄 package.json                  # Dependencies
├── 📄 tailwind.config.js           # Tailwind configuration
├── 📄 next.config.mjs              # Next.js configuration
└── 📄 README.md                    # Documentation
```

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15.4.6** - React framework dengan App Router
- **React 18** - Library UI dengan hooks modern
- **Tailwind CSS** - Utility-first CSS framework

### **Libraries & Dependencies**
- **XLSX** - Excel file generation dan processing
- **Lucide React** - Modern icon library
- **Geist Font** - Typography dari Vercel

### **Development Tools**
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Next.js DevTools** - Development experience

## 📊 Data Categories

### 1. **USER MANAGEMENT**
- User Registration & Authentication
- User Account Management
- Role & Permission System
- Audit Logging

### 2. **APP FEATURES**  
- Data Input & Processing
- Export Functionality
- Data Management
- Digital Signature Verification

### 3. **OPERATIONAL**
- Hosting & Domain
- SSL Certificate
- SEO Optimization
- Maintenance & Support

### 4. **DEPLOYMENT**
- Server Setup
- Database Configuration
- Security Implementation
- Performance Optimization

## 🎨 Styling & UI

### **Design System**
- **Dark Theme** - Professional dark interface
- **Gray Scale** - Consistent color palette (gray-700 to gray-900)
- **Accent Colors** - Blue for primary actions, green for success
- **Typography** - Inter font family dengan proper hierarchy

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

### **Component States**
- **Hover Effects** - Subtle color transitions
- **Focus States** - Clear focus indicators
- **Loading States** - Shimmer animations
- **Error States** - Red accents untuk validasi

## 🔧 Configuration

### **Tailwind Config**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### **Next.js Config**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
```

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 88+     | ✅ Full Support |
| Firefox | 85+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 88+     | ✅ Full Support |

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

### **Netlify**
```bash
# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

### **Manual Deployment**
```bash
# Build static export
npm run build
npm run export

# Upload 'out' folder to hosting
```

## 🧪 Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static files
```

### **Environment Variables**
```env
# .env.local
NEXT_PUBLIC_APP_NAME=RAB Generator
NEXT_PUBLIC_APP_VERSION=1.0.0
```

## 📈 Performance

### **Optimization Features**
- ⚡ **Next.js App Router** - Improved performance dan SEO
- 🖼️ **Image Optimization** - Automatic image optimization
- 📦 **Code Splitting** - Automatic code splitting per page
- 🗜️ **Compression** - Gzip compression untuk static assets

### **Bundle Analysis**
```bash
# Analyze bundle size
npm run analyze
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### **Coding Standards**
- Use **ESLint** configuration
- Follow **React best practices**
- Write **descriptive commit messages**
- Add **comments** untuk complex logic

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact & Support

- **Developer**: Bayani Adamsasaki
- **GitHub**: [@Bayaniadamsasaki](https://github.com/Bayaniadamsasaki)
- **Repository**: [RAB-GEN](https://github.com/Bayaniadamsasaki/RAB-GEN)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [XLSX](https://sheetjs.com/) - Excel processing
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  <p>Made with ❤️ for better RAB management</p>
  <p>© 2025 RAB Generator. All rights reserved.</p>
</div>
