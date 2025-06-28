import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';
import { RoleSelectionPage } from './components/auth/RoleSelectionPage';
import { LoginPage } from './components/auth/LoginPage';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import ParentDashboard from './pages/dashboard/ParentDashboard';

function App() {
  const { role } = useUser();

  return (
    <Routes>
      {/* Default route shows role selection */}
      <Route path="/" element={<RoleSelectionPage />} />
      
      {/* Login route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected dashboard routes */}
      <Route
        path="/dashboard/student"
        element={role === "student" ? <StudentDashboard /> : <Navigate to="/" replace />}
      />
      <Route
        path="/dashboard/teacher"
        element={role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" replace />}
      />
      <Route
        path="/dashboard/parent"
        element={role === "parent" ? <ParentDashboard /> : <Navigate to="/" replace />}
      />

      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;