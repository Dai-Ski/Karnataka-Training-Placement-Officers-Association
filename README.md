# KTPOA Platform - Karnataka Training & Placement Officers Association

### Empowering Students. Strengthening Industry Connections.

This repository contains the official web platform for the **Karnataka Training & Placement Officers Association (KTPOA)**. The platform is designed to manage flagship events, student-centric initiatives, and streamline administrative workflows through a dynamic, database-driven architecture.

---

## 🚀 Key Features

### 📅 Dynamic Event Management
- **Full CRUD Support**: Manage all upcoming and flagship events via a secure Admin Dashboard.
- **Categorized Content**: Events are organized into *Flagship*, *Student-Centric*, and *Regular* sections.
- **Icon Management**: Visual icon picker using Lucide for consistent branding.
- **Structured Highlights**: Support for bulleted lists and detailed event locations/dates.

### 📊 Secure User Data Export
- **Google Sheets Integration**: One-click export of all registered Students, TPOs, and Industry partners.
- **Multi-Tab Organization**: Data is automatically siloed into categorized tabs.
- **Data Integrity**: Automatic deduplication and clearing of existing sheet data before every export.
- **Service Account Security**: Authorized via Google Service Account with Base64-encoded PEM keys.

### 🔐 Multi-Role Security
- **Admin Dashboard**: Protected by rate-limited login and environment-driven credentials.
- **OTP Verification**: Secure registration flows for all user types.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons, Sonner (Toasts)
- **Backend**: Node.js, Express, Mongoose (MongoDB)
- **APIs**: Google Sheets API v4, Google Drive API v3 (via `google-spreadsheet`)
- **Email**: Resend API

---

## ⚙️ Environment Variables

### Backend (`server/.env`)
| Key | Description |
| :--- | :--- |
| `MONGODB_URI` | MongoDB Atlas Connection String |
| `RESEND_API_KEY` | Resend API Key |
| `RESEND_FROM_EMAIL` | Authorized sender email (e.g. `info@ktpoa.org`) |
| `ADMIN_ID` | Admin Login ID |
| `ADMIN_PASSWORD` | Admin Login Password |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google Service Account Email |
| `GOOGLE_PRIVATE_KEY_BASE64` | Base64-encoded private key (Quoted single-line) |
| `GOOGLE_SHEET_ID` | Target Google Sheet ID for exports |

### Frontend (`react_app/.env`)
| Key | Description |
| :--- | :--- |
| `VITE_API_URL` | Base URL for the backend API (e.g. `http://localhost:5000/api`) |

---

## 📦 Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Dai-Ski/Karnataka-Training-Placement-Officers-Association.git
cd Karnataka-Training-Placement-Officers-Association
```

### 2. Setup Backend
```bash
cd server
npm install
# Create .env based on the table above
npm run dev
```

### 3. Setup Frontend
```bash
cd react_app
npm install
# Create .env with VITE_API_URL=http://localhost:5000/api
npm run dev
```

---

## 🌍 Deployment

### **Backend (Render)**
1. Connect your GitHub repository.
2. Set the Build Command: `npm install`
3. Set the Start Command: `npm start`
4. Add all environment variables in the **Settings > Environment Variables** tab.

### **Frontend (Vercel)**
1. Import the repository and select the `react_app` directory as the root.
2. Framework Preset: **Vite**.
3. Add `VITE_API_URL` pointing to your Render backend (e.g. `https://your-api.onrender.com/api`).

---

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📬 Contact

**Karnataka Training & Placement Officers Association (KTPOA)**  
Building stronger career opportunities by connecting education, skills, and industry.
