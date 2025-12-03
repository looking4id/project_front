import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListTodo, 
  Settings, 
  GitPullRequest, 
  Bug, 
  Layers, 
  Bell, 
  Search, 
  HelpCircle,
  Plus,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { CURRENT_USER } from '../constants';

const SidebarItem = ({ to, icon: Icon, label, exact = false }: { to: string; icon: any; label: string; exact?: boolean }) => {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 mx-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

const GroupLabel = ({ label }: { label: string }) => (
  <div className="px-6 py-2 mt-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
    {label}
  </div>
);

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === '/') return '项目概览';
    if (location.pathname.includes('work-items')) return '工作项';
    if (location.pathname.includes('sprints')) return '迭代计划';
    if (location.pathname.includes('settings')) return '项目设置';
    return 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center h-16 px-6 border-b border-slate-100">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-bold text-lg text-slate-800">AgilePro</span>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-4rem)] py-4">
          <SidebarItem to="/" icon={LayoutDashboard} label="项目概览" exact />
          
          <GroupLabel label="协作" />
          <SidebarItem to="/work-items" icon={ListTodo} label="需求管理" />
          <SidebarItem to="/sprints" icon={Layers} label="迭代计划" />
          <SidebarItem to="/tasks" icon={GitPullRequest} label="任务看板" />
          <SidebarItem to="/bugs" icon={Bug} label="缺陷追踪" />

          <GroupLabel label="设置" />
          <SidebarItem to="/settings" icon={Settings} label="项目设置" />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-slate-500 hover:text-slate-700"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-slate-800 hidden sm:block">
              {getPageTitle()}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <input 
                type="text" 
                placeholder="搜索..." 
                className="pl-9 pr-4 py-1.5 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
              <Search className="absolute left-3 top-1.5 text-slate-400" size={16} />
              <div className="absolute right-3 top-1.5 text-xs text-slate-400 border border-slate-300 rounded px-1.5">/</div>
            </div>

            <button className="text-slate-400 hover:text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <button className="text-slate-400 hover:text-slate-600">
              <HelpCircle size={20} />
            </button>

            <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
              <Plus size={18} />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-100 overflow-hidden border border-indigo-200">
                <img src={CURRENT_USER.avatar} alt="User" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-slate-700 hidden md:block">
                {CURRENT_USER.name}
              </span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};