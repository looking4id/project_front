import React from 'react';

// Status Badge
export const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    '新建': 'bg-blue-50 text-blue-700 ring-blue-700/10',
    '进行中': 'bg-amber-50 text-amber-700 ring-amber-700/10',
    '已完成': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    '已关闭': 'bg-slate-50 text-slate-600 ring-slate-500/10',
    'active': 'bg-green-50 text-green-700 ring-green-600/20',
    'future': 'bg-purple-50 text-purple-700 ring-purple-600/20',
  };

  const defaultStyle = 'bg-gray-50 text-gray-600 ring-gray-500/10';

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${styles[status] || defaultStyle}`}>
      {status}
    </span>
  );
};

// Priority Badge
export const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles: Record<string, string> = {
    'High': 'text-red-600 bg-red-50',
    'Medium': 'text-orange-600 bg-orange-50',
    'Low': 'text-slate-600 bg-slate-50',
  };

  return (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${styles[priority]}`}>
      {priority}
    </span>
  );
};

// Card Component
export const Card = ({ title, children, action }: { title: string; children?: React.ReactNode; action?: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        {action}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

// Tabs Component
export const Tabs = ({ tabs, activeTab, onChange }: { tabs: {id: string, label: string}[], activeTab: string, onChange: (id: string) => void }) => {
  return (
    <div className="border-b border-slate-200 mb-6">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};