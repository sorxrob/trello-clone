export type TaskType = {
  id: string;
  content: string;
};

export type Tasks = {
  [any: string]: TaskType;
};

export type ColumnType = {
  id: string;
  title: string;
  taskIds: string[];
};

export type Columns = {
  [any: string]: ColumnType;
};

export type InitialData = {
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
};

export const initialData: InitialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  // Facilitate reordering of columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
