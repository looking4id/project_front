import React, { useState } from 'react';
import { MOCK_WORK_ITEMS } from '../constants';
import { StatusBadge, PriorityBadge } from '../components/Common';
import { Filter, Search, Plus, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const WorkItems = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = MOCK_WORK_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm min-h-[600px] flex flex-col">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="搜索标题或ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-md text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          </div>
          <button className="p-2 border border-slate-300 rounded-md hover:bg-slate-50 text-slate-600">
            <Filter size={18} />
          </button>
          <button className="p-2 border border-slate-300 rounded-md hover:bg-slate-50 text-slate-600">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm">
          <Plus size={18} />
          <span>新建事项</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-16">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                  ID <ArrowUpDown size={14} />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-1/3">
                标题
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                类型
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                状态
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                优先级
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                负责人
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 group-hover:underline">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-sm text-slate-900">
                  <div className="line-clamp-1">{item.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                   {item.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <PriorityBadge priority={item.priority} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img className="h-6 w-6 rounded-full" src={item.assignee.avatar} alt="" />
                    <span className="text-sm text-slate-600">{item.assignee.name}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="border-t border-slate-200 px-6 py-4 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          显示 1 到 {filteredItems.length} 条，共 {filteredItems.length} 条
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-slate-300 rounded text-sm disabled:opacity-50" disabled>上一页</button>
          <button className="px-3 py-1 border border-slate-300 rounded text-sm disabled:opacity-50" disabled>下一页</button>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;