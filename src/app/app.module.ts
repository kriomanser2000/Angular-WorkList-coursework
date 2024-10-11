import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        TaskListComponent,
        TaskFormComponent,
        ProjectFormComponent
    ],
})
export class AppModule{}