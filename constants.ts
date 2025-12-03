import { Priority, Status, WorkItem, WorkItemType, User, Webhook, Sprint } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'looking4id',
  avatar: 'https://picsum.photos/200',
  role: 'Admin'
};

export const MOCK_USERS: User[] = [
  CURRENT_USER,
  { id: 'u2', name: 'Dev Team A', avatar: 'https://picsum.photos/201', role: 'Developer' },
  { id: 'u3', name: 'Product Owner', avatar: 'https://picsum.photos/202', role: 'Manager' },
];

export const MOCK_WORK_ITEMS: WorkItem[] = [
  {
    id: 'REQ-101',
    title: '用户注册页面支持手机号验证码登录',
    type: WorkItemType.Requirement,
    priority: Priority.High,
    status: Status.InProgress,
    assignee: MOCK_USERS[0],
    updatedAt: '2023-10-24 10:00'
  },
  {
    id: 'BUG-202',
    title: 'iOS端在弱网环境下支付回调延迟',
    type: WorkItemType.Bug,
    priority: Priority.High,
    status: Status.New,
    assignee: MOCK_USERS[1],
    updatedAt: '2023-10-23 15:30'
  },
  {
    id: 'TASK-305',
    title: '升级数据库中间件至最新版本',
    type: WorkItemType.Task,
    priority: Priority.Medium,
    status: Status.Done,
    assignee: MOCK_USERS[1],
    updatedAt: '2023-10-22 09:15'
  },
  {
    id: 'REQ-104',
    title: '增加数据报表导出功能 (Excel)',
    type: WorkItemType.Requirement,
    priority: Priority.Low,
    status: Status.New,
    assignee: MOCK_USERS[2],
    updatedAt: '2023-10-25 11:20'
  },
  {
    id: 'BUG-210',
    title: '首页轮播图在特定分辨率下显示错位',
    type: WorkItemType.Bug,
    priority: Priority.Medium,
    status: Status.InProgress,
    assignee: MOCK_USERS[0],
    updatedAt: '2023-10-25 14:00'
  }
];

export const MOCK_WEBHOOKS: Webhook[] = [
  {
    id: 'wh_1',
    name: 'DingTalk Notification',
    url: 'https://oapi.dingtalk.com/robot/send...',
    active: true,
    events: ['push', 'merge_request'],
    lastTriggered: '2023-10-25 09:30'
  },
  {
    id: 'wh_2',
    name: 'CI/CD Pipeline Trigger',
    url: 'https://jenkins.example.com/hooks/...',
    active: false,
    events: ['tag_push'],
    lastTriggered: '2023-10-20 18:00'
  }
];

export const MOCK_SPRINTS: Sprint[] = [
  {
    id: 'sp_1',
    name: 'Sprint 24: Core Optimization',
    status: 'active',
    startDate: '2023-10-15',
    endDate: '2023-10-29',
    progress: 65
  },
  {
    id: 'sp_2',
    name: 'Sprint 25: New Features',
    status: 'future',
    startDate: '2023-10-30',
    endDate: '2023-11-13',
    progress: 0
  }
];

export const CHART_DATA_STATUS = [
  { name: '新建', value: 2, color: '#3b82f6' },
  { name: '进行中', value: 2, color: '#f59e0b' },
  { name: '已完成', value: 1, color: '#10b981' },
];

export const CHART_DATA_BURNDOWN = [
  { day: 'Day 1', ideal: 100, actual: 100 },
  { day: 'Day 2', ideal: 90, actual: 95 },
  { day: 'Day 3', ideal: 80, actual: 85 },
  { day: 'Day 4', ideal: 70, actual: 65 },
  { day: 'Day 5', ideal: 60, actual: 55 },
  { day: 'Day 6', ideal: 50, actual: 52 },
  { day: 'Day 7', ideal: 40, actual: 38 },
];