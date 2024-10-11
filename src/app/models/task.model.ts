export interface Task
{
    id: string;
    title: string;
    description: string;
    tags: string[];
    priority: 'Low' | 'Medium' | 'High';
    dueDate: Date;
    projectId?: string; 
}