# NexaForge Studio

**AI-Powered Enterprise Software Studio**  
*Building intelligent software for real-world business operations.*

---

## 🏛️ Brand Overview

**NexaForge Studio** is an independent enterprise software studio engineered to bridge bulletproof transactional database engines with frontier AI capabilities. We build secure, resilient software designed for high-volume enterprise operations without fragile wrappers or technical fluff.

### Flagship Products

| Product | Positioning | Core Tech Stack | Development Status |
| :--- | :--- | :--- | :--- |
| **DocVault AI** | Intelligent Document Management | Oracle + Claude 3.5 Sonnet + OCR + n8n | AI Core: *In Development* / Vault: *Enterprise Ready* |
| **AssetFlow** | Enterprise Asset Lifecycle Management | Oracle APEX + PL/SQL + REST APIs | *Enterprise Ready* |

---

## 🌐 Website Architecture (Vercel Ready)

| Route | Purpose | Status |
| :--- | :--- | :--- |
| `/` | Homepage, core message, value pillars, and featured ecosystem | Production Ready |
| `/products/docvault-ai` | DocVault AI deep-dive, multi-pass OCR & Claude API parsing | Production Ready |
| `/products/assetflow` | AssetFlow asset lifecycle, QR audits, maintenance, & depreciation | Production Ready |
| `/products` (Redirect) | Direct access to product catalog | Production Ready |
| `/technology` | Deep architectural specs: Oracle APEX, Claude API, OCR, n8n | Production Ready |
| `/about` | Technical founder story, studio thesis, and Claude for Startups | Production Ready |
| `/contact` | Interactive demo booking, pilot requests, and enterprise NDA contact | Production Ready |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Modern enterprise SaaS aesthetic: clean light background, deep navy `#0f172a`, teal accents `#0d9488`)
- **Hosting**: Vercel (Edge-optimized static prerendering)
- **Source Control**: GitHub (`nexaforge-studio-web`)

---

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and prerender production bundle
npm run build

# Start production server
npm run start
```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub under `nexaforge-studio-web`.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Deploy. Vercel automatically runs `npm run build` and distributes the site across global edge networks with zero configuration.

---

## ⚖️ Ethics & Data Protection Notice

- **Transparent AI Labeling**: AI features in laboratory testing or active benchmarking are transparently marked as `In Development`.
- **Zero Data Training**: All models in our pipeline operate under commercial API agreements where client data is never used for training.
- **Enterprise Isolation**: Tenant boundaries, audit logging, and cryptographic checksums are enforced at the database tier.
