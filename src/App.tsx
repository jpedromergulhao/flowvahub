import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Singup from "./pages/Singup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={< ResetPassword/>} />
      <Route
        path="/rewards"
        element={
          <ProtectedRoute>
            <Rewards />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}