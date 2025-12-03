import React from 'react';
import { Card } from '../components/Common';
import { MOCK_WORK_ITEMS, CHART_DATA_STATUS, CHART_DATA_BURNDOWN } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
      {trend && (
        <p className={`text-xs mt-1 ${trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
          {trend > 0 ? '+' : ''}{trend}% 较上周
        </p>
      )}
    </div>
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="待处理需求" 
          value="12" 
          icon={AlertCircle} 
          color="bg-blue-500"
          trend={12}
        />
        <StatCard 
          label="本周已完成" 
          value="8" 
          icon={CheckCircle2} 
          color="bg-emerald-500"
          trend={5}
        />
        <StatCard 
          label="剩余工时 (Hrs)" 
          value="142" 
          icon={Clock} 
          color="bg-amber-500"
          trend={-8}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="燃尽图 (Burndown)">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA_BURNDOWN}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorActual)" name="实际剩余" />
                <Area type="monotone" dataKey="ideal" stroke="#cbd5e1" strokeDasharray="5 5" fill="transparent" name="理想剩余" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="工作项分布">
          <div className="h-64 w-full flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CHART_DATA_STATUS}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {CHART_DATA_STATUS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mr-12">
              {CHART_DATA_STATUS.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-600">{item.name}</span>
                  <span className="text-sm font-bold text-slate-800 ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card title="最近更新">
        <div className="flow-root">
          <ul role="list" className="-my-5 divide-y divide-slate-100">
            {MOCK_WORK_ITEMS.map((item) => (
              <li key={item.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      item.type === '缺陷' ? 'bg-red-100 text-red-600' : 
                      item.type === '需求' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.type === '缺陷' ? 'BUG' : item.type === '需求' ? 'REQ' : 'TSK'}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 truncate">
                      {item.id} • 更新于 {item.updatedAt}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-slate-900">
                    <img src={item.assignee.avatar} alt="" className="w-6 h-6 rounded-full border border-white shadow-sm" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;