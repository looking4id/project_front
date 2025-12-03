import React from 'react';
import { MOCK_SPRINTS, MOCK_USERS } from '../constants';
import { StatusBadge, Card } from '../components/Common';
import { Calendar, MoreHorizontal, Plus } from 'lucide-react';

const Sprints = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-800">迭代列表</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm">
          <Plus size={18} />
          <span>新建迭代</span>
        </button>
      </div>

      <div className="grid gap-6">
        {MOCK_SPRINTS.map((sprint) => (
          <div key={sprint.id}>
            <Card title={sprint.name} action={
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal size={20} />
              </button>
            }>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
                  <div className="flex items-center gap-4">
                    <StatusBadge status={sprint.status} />
                    <div className="flex items-center text-slate-500">
                      <Calendar size={16} className="mr-1.5" />
                      <span>{sprint.startDate} - {sprint.endDate}</span>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                     {MOCK_USERS.map(u => (
                       <img key={u.id} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={u.avatar} alt={u.name} />
                     ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">完成进度</span>
                    <span className="text-slate-500">{sprint.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${sprint.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-50">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-slate-800">14</div>
                    <div className="text-xs text-slate-500 mt-0.5">总事项</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-emerald-600">8</div>
                    <div className="text-xs text-slate-500 mt-0.5">已完成</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-amber-500">6</div>
                    <div className="text-xs text-slate-500 mt-0.5">剩余</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sprints;