import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent
{
  newTask: Task = {
    id: '',
    title: '',
    description: '',
    tags: [],
    priority: 'Medium',
    dueDate: new Date(),
    projectId: ''
  };
  @Output() taskAdded = new EventEmitter<Task>();
  addTask()
  {
    this.newTask.id = Math.random().toString(36).substring(2);
    this.taskAdded.emit(this.newTask);
    this.newTask = { 
      id: '',
      title: '',
      description: '',
      tags: [],
      priority: 'Medium',
      dueDate: new Date() 
    };
  }
}