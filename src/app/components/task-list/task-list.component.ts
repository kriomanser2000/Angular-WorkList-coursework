import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit 
{
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit() 
  {
    this.loadTasks();
  }
  loadTasks() 
  {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  deleteTask(id: string) 
  {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}