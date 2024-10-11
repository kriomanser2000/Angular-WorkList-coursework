import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from '../FunctionApp/src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaskService
{
    private apiUrl = environment.apiUrl;
    constructor (private http: HttpClient) {}
    getTasks(): Observable<Task[]>
    {
        return this.http.get<Task[]>(this.apiUrl);
    }
    addTasks(task: Task): Observable<Task>
    {
        return this.http.post<Task>(this.apiUrl, task);
    }
    updateTask(task: Task): Observable<Task> 
    {
        return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
    }
    deleteTask(id: string): Observable<void> 
    {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    searchTasks(query: string): Observable<Task[]> 
    {
        return this.http.get<Task[]>(`${this.apiUrl}/search?query=${query}`);
    }
}
