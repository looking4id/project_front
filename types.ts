export enum WorkItemType {
  Requirement = '需求',
  Task = '任务',
  Bug = '缺陷'
}

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

export enum Status {
  New = '新建',
  InProgress = '进行中',
  Done = '已完成',
  Closed = '已关闭'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface WorkItem {
  id: string;
  title: string;
  type: WorkItemType;
  priority: Priority;
  status: Status;
  assignee: User;
  updatedAt: string;
}

export interface Webhook {
  id: string;
  url: string;
  name: string;
  active: boolean;
  events: string[];
  lastTriggered?: string;
}

export interface Sprint {
  id: string;
  name: string;
  status: 'active' | 'future' | 'closed';
  startDate: string;
  endDate: string;
  progress: number;
}