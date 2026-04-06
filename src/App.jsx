import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, AdminLayout } from '@layout';
import AdminLogin from './page/admin/AdminLogin';
import Home from './page/client/Home';
import Dashboard from './page/admin/Dashboard';
import KnowledgeBase from './page/admin/KnowledgeBase';

import { ProtectedRoute, PublicRoute } from './components/AuthGuard';

export default function App() {
  return (
    <div className="ContainerResponsive overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="knowledge-base" element={<KnowledgeBase />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
