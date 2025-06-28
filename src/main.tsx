import { Route, Routes, Navigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import LandingPage from "./pages/LandingPage"; // adjust path if needed
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import ParentDashboard from "./pages/dashboard/ParentDashboard";
import RoleSelectionPage from "./pages/RoleSelectionPage";
import { LoginPage } from "./pages/LoginPage"; // or wherever it's located

function App() {
  const { role } = useUser();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/choose-role" element={<RoleSelectionPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Conditional Routing */}
      <Route
        path="/dashboard/student"
        element={role === "student" ? <StudentDashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard/teacher"
        element={role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard/parent"
        element={role === "parent" ? <ParentDashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
