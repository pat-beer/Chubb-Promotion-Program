# 📱 Chubb Life Calculator - My Legacy Plan V(5) Blossom

A Progressive Web App (PWA) for calculating insurance premiums for Chubb Life's My Legacy Plan V(5) Blossom.

## 🌟 Features

- ✅ **2-Pay and 5-Pay Options** - Calculate premiums for both payment plans
- ✅ **Premium Discount** - 10% discount calculation (Oct 1 - Dec 31, 2025)
- ✅ **Prepayment Option** - Calculate prepayment with 4% p.a. interest rate
- ✅ **Goal Seek Calculator** - Find required annual premium for target amount
- ✅ **Exchange Rate Adjustment** - Customize USD/HKD and USD/THB rates
- ✅ **Manual Levy Override** - Set levy amount manually when needed
- ✅ **Offline Support** - Works without internet connection
- ✅ **Auto-Update** - Notifies when new version is available
- ✅ **Mobile-First Design** - Optimized for smartphones and tablets

## 🚀 Demo

**Live Demo:** [https://[your-github-username].github.io/chubb-calculator/](https://[your-github-username].github.io/chubb-calculator/)

## 📲 Installation

### Install as Mobile App

**iOS (Safari):**
1. Open the link in Safari
2. Tap the "Share" button
3. Select "Add to Home Screen"
4. Tap "Add"

**Android (Chrome):**
1. Open the link in Chrome
2. Tap the menu (3 dots)
3. Select "Add to Home Screen" or "Install App"
4. Tap "Install"

## 🛠️ Technical Stack

- **HTML5** - Modern semantic markup
- **CSS3** - Responsive design with Flexbox/Grid
- **Vanilla JavaScript** - No dependencies
- **Service Worker** - Offline functionality and caching
- **Web App Manifest** - PWA configuration

## 📁 File Structure

```
chubb-calculator/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── icon-192.png       # App icon (192x192)
├── icon-512.png       # App icon (512x512)
└── README.md          # Documentation
```

## 🔄 How to Update

When you need to update the calculator:

1. **Edit `index.html`** - Make your changes
2. **Update version in `index.html`**:
   ```html
   <div class="version-info">Version X.X.X | Updated: YYYY-MM-DD</div>
   ```
3. **Update `sw.js`** cache version:
   ```javascript
   const CACHE_VERSION = 'chubb-calc-vX.X.X-YYYYMMDD-HHMM';
   ```
4. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update to version X.X.X"
   git push origin main
   ```

## 📋 Policy Information

### Minimum Premium Requirements
- **2-Pay:** USD $4,610
- **5-Pay:** USD $1,977
- **Maximum Age:** 75 years
- **Insurance Levy:** 0.1% per year, capped at HKD $100

### Current Promotion (Oct 1 - Dec 31, 2025)
- **Premium Discount:** 10%
- **Prepayment Interest Rate:** 4% p.a.

### Extra Premium Discount Offer
- **Rider Name:** Easy Shield Waiver of Premium Benefit
- **Extra Discount:** 2% each year
- **Period:** October 1 - December 31, 2025
- **More Info:** [Chubb Website](https://www.chubb.com/hk-en/personal/easy-shield-waiver-of-premium-benefit.html)

## ⚙️ Development

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/chubb-calculator.git
   ```
2. Open `index.html` in a browser or use a local server:
   ```bash
   python -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`

### Testing PWA Features
- Use Chrome DevTools → Application tab
- Test Service Worker registration
- Test offline functionality
- Check cache storage

## 🌐 GitHub Pages Deployment

1. Go to repository Settings
2. Navigate to "Pages" section
3. Select source: "Deploy from a branch"
4. Select branch: `main` and folder: `/ (root)`
5. Click "Save"
6. Your app will be available at: `https://[your-username].github.io/chubb-calculator/`

## 📝 Version History

### Version 2.0.0 (2025-10-02)
- ✨ Added PWA support with offline functionality
- ✨ Added Goal Seek calculator
- ✨ Added manual levy override option
- ✨ Updated promotion period to Oct-Dec 2025
- ✨ Added auto-update notification
- 🐛 Fixed Goal Seek calculation bugs
- 🎨 Improved mobile UI/UX

### Version 1.0.0 (2025-09-29)
- 🎉 Initial release
- ✅ Basic premium calculation
- ✅ 2-Pay and 5-Pay options
- ✅ Exchange rate settings

## ⚠️ Disclaimer

This calculator is for **estimation purposes only**. Please consult with your financial advisor for official quotes and policy details.

## 📧 Contact

For questions or issues, please contact:
- **Developer:** [Your Name]
- **Email:** [your-email@example.com]

## 📄 License

© 2025 Chubb Life Insurance. All rights reserved.

---

**Note:** This is an unofficial calculator tool. For official information, please visit [Chubb Life Hong Kong](https://www.chubb.com/hk-en/).