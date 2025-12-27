# FlowvaHub - Rewards Dashboard

This project features a great UI, robust authentication flows, and secure data handling using Supabase.

## 🚀 Overview

Key focus areas included UI accuracy via Tailwind CSS, secure reward claiming via Database Functions (RPC), and a smooth user onboarding experience.

## 🛠️ Tech Stack

* **Frontend:** React.js with TypeScript
* **Styling:** Tailwind CSS
* **Backend/Database:** Supabase (Auth, PostgreSQL, RPC)
* **Deployment:** Vercel

## ✨ Key Features

### 🔐 Authentication & Security
* **Email Confirmation:** Users must verify their email before accessing protected routes. The system explicitly checks the `email_confirmed_at` metadata.
* **Password Recovery:** Secure "Forgot Password" flow using Supabase `resetPasswordForEmail` with dedicated redirect handling.
* **Server-Side Logic:** Reward points and streak updates are handled via **Supabase RPC (Remote Procedure Calls)** to prevent client-side manipulation of user balances.

### 🏆 Rewards Hub & Gamification
* **Daily Streak System:** A secure check-in system that rewards users with +5 points every 24 hours. The logic prevents multiple claims on the same day using PostgreSQL date comparisons.
* **Dynamic Filtering:** Real-time filtering of rewards (All, Unlocked, Locked, Coming Soon) with dynamic counters fetched directly from the database.

### 📱 Layout
* **Interactive UI:** High-fidelity modals, loading states, and hover effects that mirror the original platform.

## 📂 Project Structure

```text
src/
 ├─ components/          # Reusable UI atoms and molecules
 ├─ components/layout/   # Dashboard-specific layout components (Nav, Header)
 ├─ context/             # Global State Management
 │   ├─ AuthContext.tsx  # Session and Authentication state
 │   └─ UserContext.tsx  # Real-time user data (Points, Streaks)
 ├─ lib/                 # Supabase client configuration
 ├─ pages/               # Main application routes
 ├─ rewards/             # Components specific to the Rewards logic
 └─ services/            # API and Database helper functions
```
## 🏗️ Architecture Pattern

* **DashboardLayout**: The central "Brain" of the application. It handles user data fetching, manages the `UserContext` provider, and decides the application flow (**Loading** -> **Onboarding** -> **Dashboard**).
* **Context API**: Used to avoid prop-drilling, ensuring user points and profile data are consistent across the Sidebar, Header, and Rewards pages.
* **Database Triggers & RPC**: PostgreSQL functions handle the incrementing of points and streak validation directly on the server to ensure data integrity and security.

## 🔧 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/jpedromergulhao/flowvahub](https://github.com/jpedromergulhao/flowvahub)
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the project**:
    ```bash
    npm run dev
    ```

## 📝 Assessment Focus

Due to the limited timeframe that I had to create this project, I prioritized them**Supabase Integration**. This choice allowed for a deep dive into data handling, ensuring that the most critical part of the user economy (points and streaks) was both visually accurate and technically secure.
