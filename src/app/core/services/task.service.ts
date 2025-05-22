import { Injectable } from '@angular/core';
import { Task } from '../../features/tasks/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
      completed: false,
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
      completed: false,
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      completed: false,
    },
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getAll() {
    return this.tasks;
  }

  getById(id: string) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      console.error('Task not found');
      return;
    }
    return task;
  }

  getByUserId(userId: string) {
    if (!userId) {
      console.error('User ID is required');
      return [];
    }
    const userTasks = this.tasks.filter(task => task.userId === userId);
    if (userTasks.length === 0) {
      console.error('No tasks found for this user');
      return [];
    }
    return userTasks;
  }

  update(id: string, task: Task) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...task };
      this.saveTasks();
    } else {
      console.error('Task not found');
    }
  }

  delete(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    if (this.tasks.length === 0) {
      this.wipeAllTasks();
    } else {
      this.saveTasks();
    }
  }

  create(task: Task) {
    const existingTask = this.tasks.find(t => t.id === task.id);
    if (existingTask) {
      console.error('Task with this ID already exists');
      return;
    }
    this.tasks.unshift(task);
    this.saveTasks();
    // this.tasks = [task, ...this.tasks];
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private wipeAllTasks() {
    localStorage.removeItem('tasks');
  }
}
