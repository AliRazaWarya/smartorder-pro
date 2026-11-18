# 🧾 SmartOrder PRO — Wholesale Sales Booker & WhatsApp Billing App

**SmartOrder PRO** ek professional order booking, auto-calculation aur instant WhatsApp billing system hai jo distributors, FMCG agencies, wholesalers aur sales order bookers ke liye design kiya gaya hai.

Yeh app mobile phones, tablets aur desktop sab par 100% responsive aur offline chalti hai.

---

## 🌟 Features (Tamam Purani Sahuliyat + Naye Features)

### ✅ Purani Sahuliyat (100% Intact):
1. **🏪 Distributor Profile**: Company name, contact number, market/city address, aur booker name (auto-saved).
2. **👤 Customer / Retailer Details**: Shop name, WhatsApp number (+92), shop location / delivery instructions.
3. **🧮 Auto-Calculation Table**: Item name (datalist auto-suggestions), Qty, Rate aur live Amount auto-calculation.
4. **Order Adjustments**: Overall Order Discount (PKR), Delivery/Tax charges, Payment status dropdown (Cash on Delivery, Paid, Credit/Udhaar, JazzCash/EasyPaisa).
5. **🧾 Live Digital Slip Preview**: A4 size sleek receipt slip with company header, slip #, date & time, customer details, items table, and totals.
6. **📱 Smart Digital QR Code**: Live QR code generator jo kisi bhi phone camera se scan ho kar slip details verify karta hai.
7. **💬 Instant WhatsApp Bill**: Aik click par itemized, beautifully formatted bill generate kar ke customer ke WhatsApp par send karta hai.
8. **💾 Order History / Saved Records**: Har slip ko save karna, dubara open karna, aur clear karne ki mukammal sahulat.
9. **🖨 Print / PDF Export**: Directly thermal ya regular printer par print ya PDF download.

---

### 🚀 Naye Advanced Features (New Additions):
1. **⚡ Fast Tap Wholesale Catalog (Quick Chips)**:
   - Bar bar likhne ki zaroorat nahi! Cheeni 50kg, Cooking Oil 16L, Aata 20kg, Ghee, Chai patti, Soaps wagera ke quick chips sirf aik tap se bill me add ho jate hain.
   - Custom item chips add karne ki sahulat.
2. **👥 Saved Retailers / Address Book**:
   - Rozana ke purane dokandaron ko dropdown se direct select karein, unka number aur location khud fill ho jayegi.
3. **🌐 Multi-Language Support (English / اردو / Roman Urdu)**:
   - Header me dropdown se instant English, Ba-qaida Urdu ya Roman Urdu me switch karein.
4. **🖼 Save Bill as Image (PNG)**:
   - Agar direct slip image bhejni ho, tou `Save Slip Image` button se high-resolution PNG picture download karein.
5. **🖨 58mm Thermal Bluetooth POS Mode**:
   - Field sales bookers jo pocket thermal bluetooth printers use karte hain, unke liye 58mm slip format toggle.
6. **📊 Daily Sales Dashboard (KPI Bar)**:
   - Aaj ke kul orders, kul sale (PKR), vasool shuda cash, aur credit (udhaar) ka fori live hisaab.
7. **📈 Export to Excel (CSV)**:
   - Pura order data aik click par Excel/CSV sheet me download karein.
8. **💾 Data Backup & Restore**:
   - Ek phone se doosre phone par sara data JSON file ke zariye transfer karein.
9. **📱 Progressive Web App (PWA) & 100% Offline Support**:
   - Mandi ya market me internet chala bhi jaye, tab bhi Service Worker ke zariye app mukammal kaam karti hai.
10. **🌓 Dark / Light Theme Toggle**:
    - Raat ke waqt ya low-light me eyes ko relax karne ke liye modern dark mode.

---

## 🛠 Project Structure

```
smartorder-pro/
├── index.html                  # Main Web & Mobile App (All logic & styling)
├── manifest.json               # PWA App Manifest (Icon, Name, Splash)
├── sw.js                       # Service Worker for 100% Offline Field Booking
├── icons/
│   ├── icon-192.png            # Mobile Home Screen Icon (192x192)
│   └── icon-512.png            # Mobile Splash Screen Icon (512x512)
├── package.json                # Project Scripts & Capacitor config
├── generate-icons.js           # PWA Icon generator script
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages Auto-Deploy workflow
└── README.md                   # Complete Guide
```

---

## 🚀 GitHub Par Repository Banana Aur Push Karna

Apne terminal (PowerShell / Command Prompt) me ye commands chalayein:

### Step 1: Git Initialize & Commit (Local)
```bash
cd "C:\Users\MGC\.gemini\antigravity\scratch\smartorder-pro"
git init
git add .
git commit -m "Initial commit: SmartOrder PRO v1.0 complete with PWA and WhatsApp billing"
```

### Step 2: GitHub Par Repository Banayein
1. [GitHub.com](https://github.com/new) par jayein aur login karein.
2. Repository Name likhein: `smartorder-pro`
3. Description: `Wholesale Order Booking, Auto-Calculation & WhatsApp Billing App`
4. Isse **Public** rakhein.
5. **Create repository** par click karein.

### Step 3: Local Code Ko GitHub Par Push Karein
Apni GitHub repo ka URL copy karein aur yeh commands run karein:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/smartorder-pro.git
git push -u origin main
```

---

## 🌐 Free Deployment (Live Website Link)

### Tareeqa A: GitHub Pages (Automatic - Free)
1. GitHub par apni repo ki **Settings** > **Pages** me jayein.
2. **Build and deployment** > Source me **GitHub Actions** select karein (humne `.github/workflows/deploy.yml` pehle se bana diya hai).
3. Push hote hi 1-2 minute me aapki live app is link par chal jayegi:
   `https://<YOUR_GITHUB_USERNAME>.github.io/smartorder-pro/`

### Tareeqa B: Vercel (1-Click Free Hosting)
1. [vercel.com](https://vercel.com) par jayein aur "Add New Project" karein.
2. Apni GitHub repo `smartorder-pro` select karein aur **Deploy** dabayein.
3. Aapko instant custom URL mil jayega (e.g. `smartorder-pro.vercel.app`).

---

## 📱 Mobile App Banana (Android & iOS)

Aap is app ko 3 aasan tareeqon se mobile app bana sakte hain:

### Tareeqa 1: Direct Mobile Install (PWA - Recommended & Instant)
Yeh sab se tez aur behtareen tareeqa hai jo har Android aur iPhone par bina kisi Play Store ke kaam karta hai:
1. Apne mobile phone ke Google Chrome browser me deployed link open karein.
2. Chrome ke top right **3 dots (⋮)** par click karein.
3. **"Install app"** ya **"Add to Home screen"** (ہوم اسکرین پر شامل کریں) par click karein.
4. Mobile screen par SmartOrder PRO ka original app icon aa jayega.
5. Jab aap isse open karenge tou yeh bilkul **asli Android app** ki tarah full-screen open hogi (bina browser address bar ke) aur **offline** bhi chalegi!

---

### Tareeqa 2: PWABuilder Se 2 Minute Me Android APK File Banana
Agar aapko apne phone me `.apk` install karni hai ya doston ko WhatsApp par `.apk` file share karni hai:
1. Apni deployed website ka link copy karein (maslan `https://<username>.github.io/smartorder-pro/`).
2. [www.pwabuilder.com](https://www.pwabuilder.com/) par jayein.
3. Apna link paste karein aur **Start** dabayein.
4. PWABuilder sab check kar ke **"Package for Stores"** > **Android** ka button dega.
5. **Download Package** par click karein. Aapko ready-made Signed APK mil jayegi jo kisi bhi Android phone par install ho sakti hai!

---

### Tareeqa 3: Capacitor Native APK Build (Android Studio)
Agar aap Android Studio ke zariye build karna chahte hain:
```bash
cd "C:\Users\MGC\.gemini\antigravity\scratch\smartorder-pro"
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "SmartOrder PRO" com.smartorder.app --web-dir .
npx cap add android
npx cap open android
```
Android Studio open ho jayega jahan se aap **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)** select kar ke `.apk` bana sakte hain.

---

## 📄 License
MIT License — Commercial aur personal dono purposes ke liye open use.
