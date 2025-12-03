import React, { useState } from 'react';
import { Tabs } from '../components/Common';
import { MOCK_WEBHOOKS } from '../constants';
import { Copy, Eye, EyeOff, Trash2, Edit2, Plus, Info, CheckCircle2 } from 'lucide-react';

const GeneralSettings = () => (
  <div className="max-w-3xl space-y-6 animate-fade-in">
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-medium text-slate-900 mb-6">基本信息</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">项目名称 *</label>
          <input 
            type="text" 
            defaultValue="敏捷研发项目01" 
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">项目标识 (Key) *</label>
          <input 
            type="text" 
            defaultValue="P1000" 
            disabled
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md shadow-sm text-slate-500 sm:text-sm cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">描述</label>
          <textarea 
            rows={4}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue="这是一个自动创建的示例项目，如不需要可自行删除。"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">项目状态</label>
           <select className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
             <option>进行中</option>
             <option>已归档</option>
           </select>
        </div>
        <div className="pt-4 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm transition-colors">保存更改</button>
        </div>
      </div>
    </div>
  </div>
);

const WebhookSettings = () => {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-slate-900">WebHooks 管理</h3>
          <p className="text-sm text-slate-500 mt-1">
            配置 Webhook 以便在项目发生特定事件时通知外部服务。
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm transition-colors">
          <Plus size={18} />
          <span>新建 WebHook</span>
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex gap-3">
         <Info className="text-amber-600 flex-shrink-0" size={20} />
         <div className="text-sm text-amber-800">
           <p className="font-medium">安全提示</p>
           <p>Webhook 密钥用于验证请求来源，请勿泄露给无关人员。文档可查阅 <a href="#" className="underline">Webhook 数据格式说明</a>。</p>
         </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">名称 / URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">触发事件</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">状态</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">最近运行</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {MOCK_WEBHOOKS.map((hook) => (
              <tr key={hook.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-slate-900">{hook.name}</div>
                  <div className="text-xs text-slate-500 font-mono mt-1 truncate max-w-xs">{hook.url}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {hook.events.map(e => (
                      <span key={e} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">
                        {e}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {hook.active ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                       已启用
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                       已停用
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {hook.lastTriggered}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-3">
                    <button className="text-blue-600 hover:text-blue-900"><Edit2 size={16} /></button>
                    <button className="text-red-600 hover:text-red-900"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mt-6">
         <h4 className="text-sm font-medium text-slate-900 mb-4">Webhook 快速测试</h4>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
               <label className="block text-xs font-medium text-slate-500 uppercase mb-1">目标 URL</label>
               <input type="text" disabled value="https://oapi.dingtalk.com/robot/..." className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-slate-500" />
            </div>
             <div>
               <label className="block text-xs font-medium text-slate-500 uppercase mb-1">Secret (签名密钥)</label>
               <div className="relative">
                  <input 
                    type={showSecret ? "text" : "password"} 
                    value="SEC82910391203910293..." 
                    disabled 
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-sm text-slate-500 pr-10" 
                  />
                  <button 
                    onClick={() => setShowSecret(!showSecret)}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                  >
                    {showSecret ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
               </div>
            </div>
         </div>
         <div className="mt-4">
            <button className="px-4 py-2 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-md text-sm font-medium shadow-sm transition-colors">
               发送测试请求
            </button>
         </div>
      </div>
    </div>
  );
};

const FieldSettings = () => (
    <div className="space-y-6">
         <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-medium text-slate-900">需求类型设置</h3>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                    + 添加需求类型
                </button>
            </div>
            <div className="p-0">
                 <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">排序</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">名称</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">描述</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">是否启用</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        <tr>
                            <td className="px-6 py-4 text-slate-400">::</td>
                            <td className="px-6 py-4 text-sm text-slate-900">
                                需求 <span className="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">默认类型</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500">-</td>
                            <td className="px-6 py-4">
                                <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-blue-600 space-x-3">
                                <button className="hover:underline">查看配置</button>
                                <button className="hover:underline">数据迁移</button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
         </div>
    </div>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: '基本设置' },
    { id: 'fields', label: '项目字段设置' },
    { id: 'webhooks', label: 'WebHooks' },
    { id: 'members', label: '成员管理' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">项目设置</h2>
      
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="mt-6">
        {activeTab === 'general' && <GeneralSettings />}
        {activeTab === 'webhooks' && <WebhookSettings />}
        {activeTab === 'fields' && <FieldSettings />}
        {activeTab === 'members' && (
          <div className="text-center py-12 text-slate-500 bg-white border border-slate-200 rounded-lg border-dashed">
             暂无权限查看成员列表
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;