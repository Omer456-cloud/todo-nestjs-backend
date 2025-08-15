import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum TaskStatus {
  PENDING = 'Pending',
  DONE = 'Done',
  IN_PROGRESS = 'In Progress',
  PAUSED = 'Paused'
}

export enum TaskPriority {
  RED = 'Red',    // High
  YELLOW = 'Yellow', // Medium
  BLUE = 'Blue'   // Normal
}

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  details?: string;

  @Column({ type: 'date', nullable: true })
  dueDate?: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.PENDING })
  status: TaskStatus;

  @Column({ type: 'enum', enum: TaskPriority, default: TaskPriority.BLUE })
  priority: TaskPriority;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: true })
  isActive: boolean;
}
