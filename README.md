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

