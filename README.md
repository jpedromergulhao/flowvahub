# FlowvaHub - Rewards Dashboard

This project focuses on a high-fidelity UI, secure authentication flows, and server-side–validated reward logic built with Supabase.

## 🚀 Overview

Key focus areas included UI accuracy via Tailwind CSS, secure reward claiming via Database Functions (RPC), and a smooth user onboarding experience.

## 🛠️ Tech Stack

* **Frontend:** React.js, TypeScript and React Router
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

## ⚖️ Trade-offs & Technical Decisions

- Backend logic was prioritized for points and streak validation to prevent client-side manipulation.
- Weekly streak visualization was derived on the client to respect the original backend scope and deadline.
- Context API was chosen over heavier state management libraries to keep the architecture simple and aligned with the challenge size.

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

Given the limited timeframe, priority was given to **Supabase integration** and **server-side validation**, ensuring the reward economy was technically secure rather than purely visual. This choice allowed for a deep dive into data handling, ensuring that the most critical part of the user economy (points and streaks) was both visually accurate and technically secure.

## 🚫 Out of Scope

- Advanced analytics or admin dashboards
- Backend changes beyond the original challenge scope
- Persistent daily streak history metadata

## NOTE 

On 27/12, a few small UI refinements were made to improve the visual quality and user experience of the project. These changes are purely stylistic and do not affect any core functionality or business logic.

Since the backend version delivered by 26/12 does not expose detailed daily streak metadata, and to avoid extending the scope of the technical challenge or modifying core backend logic after the deadline, the backend was intentionally left unchanged.

The weekly streak visualization is therefore derived on the client side, based on the current day and the dailyStreak counter. This approach ensures a correct and consistent user experience while respecting the original challenge constraints. If required, this logic could be easily migrated to the backend by exposing explicit streak metadata.