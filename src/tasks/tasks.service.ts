import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private repo: Repository<Task>,
  ) {}

  create(createDto: CreateTaskDto) {
    const task = this.repo.create(createDto);
    return this.repo.save(task);
  }

  async findOne(id: string) {
    const task = await this.repo.findOne({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(id: string, updateDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    Object.assign(task, updateDto);
    return this.repo.save(task);
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    await this.repo.remove(task);
    return { deleted: true };
  }

  async list(query: any) {
    // query: { page, limit, status, priority, search, isActive }
    const page = Math.max(1, parseInt(query.page || '1', 10));
    const limit = Math.min(100, parseInt(query.limit || '10', 10));
    const skip = (page - 1) * limit;

    const qb = this.repo.createQueryBuilder('task');

    if (query.status) {
      qb.andWhere('task.status = :status', { status: query.status });
    }
    if (query.priority) {
      qb.andWhere('task.priority = :priority', { priority: query.priority });
    }
    if (query.isActive !== undefined) {
      const isActive = query.isActive === 'true' || query.isActive === true;
      qb.andWhere('task.isActive = :isActive', { isActive });
    }
    if (query.search) {
      qb.andWhere('(task.name ILIKE :s OR task.details ILIKE :s)', { s: `%${query.search}%` });
    }

    // order by createdAt desc by default
    qb.orderBy('task.createdAt', 'DESC').skip(skip).take(limit);

    const [items, total] = await qb.getManyAndCount();

    return {
      items,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
