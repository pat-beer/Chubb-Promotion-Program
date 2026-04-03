# Chubb Life – My Legacy Plan V Blossom Calculator

**Version 4.0** | Updated: 3 April 2026

A mobile-first Progressive Web App (PWA) for calculating premiums for the **Chubb Life My Legacy Insurance Plan V – Blossom** (2-year and 5-year payment terms).

---

## 🎯 Features

| Feature | Description |
|---|---|
| **Standard Payment** | Calculates Year 1 (discounted) and total premiums |
| **Prepayment Option** | Lump-sum calculation using Goal Seek algorithm |
| **Goal Seek Calculator** | Reverse-calculate: find premium for target grand total |
| **Extra Discount Modal** | Shows savings with Easy Shield Rider (+2%) |
| **Manual Levy Override** | Override auto-calculated insurance levy |
| **Exchange Rate Settings** | Live-editable USD/HKD and USD/THB rates |
| **Full Payment Analysis** | Detailed breakdown modal with payment schedule |
| **PWA Support** | Installable on iOS/Android, works offline |
| **Auto Promotion Banner** | Shows active/inactive status based on current date |

---

## 📋 Q2 2026 Promotion Details (1 Apr – 30 Jun 2026)

| | 2-Pay | 5-Pay |
|---|---|---|
| **Premium Discount** | **12%** (Year 1 only) 🆕 | **10%** (each year, Y1–Y5) |
| **Extra Discount (Rider)** | Extra **2%** each year (whole policy) | Same |
| **Prepayment Interest** | **4% p.a.** non-guaranteed | Same |

> ⚠️ **Key change from Q1 2026:** 2-Pay discount increased from **10% → 12%**

---

## 💱 Exchange Rates (as of 3 Apr 2026)

| Pair | Rate |
|---|---|
| USD / THB | **32.67** |
| HKD / THB | **4.16** |
| USD / HKD | **7.8534** *(derived: 32.67 ÷ 4.16)* |

---

## 🏗️ Project Structure

```
chubb-calculator/
├── index.html       ← Main calculator (single-file app)
├── manifest.json    ← PWA manifest
├── sw.js            ← Service Worker (offline support)
├── icon-192.png     ← App icon 192×192 (add manually)
├── icon-512.png     ← App icon 512×512 (add manually)
└── README.md        ← This file
```

> **Note:** Icons (`icon-192.png`, `icon-512.png`) are not included.  
> Add Chubb-branded icons in the required sizes before deploying.

---

## 🚀 Deployment (GitHub Pages)

1. Push all files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your calculator will be available at:
   ```
   https://YOUR_USERNAME.github.io/REPO_NAME/
   ```

---

## 🔄 Updating Promotions

When the promotion changes, **only update the `PROMO` block** at the top of the `<script>` section in `index.html`:

```javascript
const PROMO = {
    start:           new Date('2026-04-01'),   // ← Change start date
    end:             new Date('2026-06-30'),   // ← Change end date
    label:           '1 April – 30 June 2026', // ← Display string
    updatedDate:     '3 April 2026',           // ← Today's date
    discount2Pay:    0.12,   // ← 2-Pay discount rate (12%)
    discount5Pay:    0.10,   // ← 5-Pay discount rate (10%)
    extraDiscRate:   0.02,   // ← Extra rider discount (2%)
    prepayInterest:  0.04,   // ← Prepayment interest rate (4%)
};
```

Also update the **Changelog strip** and **version tag** in the header section.

---

## 💰 Minimum Premiums

| Payment Term | Minimum Annual Premium |
|---|---|
| 2-Pay | USD **$4,610** |
| 5-Pay | USD **$1,977** |

**Age limit:** Maximum 75 years  
**Insurance Levy:** 0.1% per year, capped at HKD $100

---

## 📱 PWA Installation

### iOS (Safari)
1. Open calculator URL in Safari
2. Tap **Share** → **Add to Home Screen**

### Android (Chrome)
1. Open calculator URL in Chrome
2. Tap menu → **Add to Home Screen**  
   or wait for the browser install prompt

---

## 📌 About Extra Discount (Easy Shield Rider)

The **Easy Shield Waiver of Premium Benefit** rider provides an additional **2% discount** on premiums for the entire policy term. Requirements:
- Must enrol together with the main Chubb MyLegacy V – Blossom plan
- Policy signing must be completed **in Hong Kong** during the promotion period
- Applicable to both 2-Pay and 5-Pay terms

[→ Official Chubb page](https://www.chubb.com/hk-en/personal/easy-shield-waiver-of-premium-benefit.html)

---

## ⚠️ Disclaimer

This calculator is for **estimation purposes only**. All figures shown are indicative. Prepayment interest rates are **non-guaranteed**. Please consult your financial advisor or official Chubb Life illustration for binding quotations.

---

*Maintained for use by Finnomena Thailand financial advisors.*
