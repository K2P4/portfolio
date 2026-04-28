import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@layout';

import { ProtectedRoute, PublicRoute } from './components/AuthGuard';

const Home = lazy(() => import('./page/client/Home'));
const AdminLayout = lazy(() => import('./layout/AdminLayout'));
const AdminLogin = lazy(() => import('./page/admin/AdminLogin'));
const Dashboard = lazy(() => import('./page/admin/Dashboard'));
const KnowledgeBase = lazy(() => import('./page/admin/KnowledgeBase'));

export default function App() {
  return (
    <div className="ContainerResponsive overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen  bg-white" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin/login"
            element={
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
      </Suspense>
    </div>
  );
}
