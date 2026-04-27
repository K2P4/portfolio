import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaRobot, FaBars } from 'react-icons/fa';
import { supabase } from '../lib/supabase';
import { navItems } from '../data/adminNav';
import Seo from '../components/Seo';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

export default function AdminLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-night text-slate-300">
      <Seo title="Admin | Phyo Thura" pathname="/admin" noIndex />
      {/* Sidebar */}
      <aside className={`bg-slate-800 border-r border-slate-800 transition-all duration-300 flex flex-col h-screen ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <FaRobot size={24} />
          </div>
          {isSidebarOpen && <span className="font-semibold text-xl text-white tracking-tight">AdminPanel</span>}
        </div>

        <nav className="flex-1 mt-4 px-5 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 ' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                }`
              }
            >
              <div className="text-xl">{item.icon && <item.icon />}</div>
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-slate-400 hover:bg-red-500/10 hover:text-red-400 group"
            aria-label="Log out"
          >
            <div className="text-xl font-semibold">
              <FaSignOutAlt />
            </div>
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-slate-800/50 backdrop-blur-md border-b border-slate-800 flex items-center px-8 justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <FaBars size={20} />
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{user?.name}</p>
              <p className="text-xs text-slate-500">{user?.email}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold ring-2 ring-slate-800 shadow-xl capitalize">
              {user?.email?.charAt(0) || 'A'}
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto bg-night">
          <div className="p-8">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}
