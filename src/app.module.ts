import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // force .env to be loaded
    }),

    // Debug log to check environment values at runtime
    (() => {
      console.log('🔍 DB Config from ENV:', {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME,
      });
      return TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: +(process.env.DB_PORT || 5432),
        username: process.env.DB_USER || 'todo_user',
        password: process.env.DB_PASS || 'todo_pass',
        database: process.env.DB_NAME || 'todo_db',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // ok for demo/assignment; use migrations for prod
        logging: false,
      });
    })(),

    TasksModule,
  ],
})
export class AppModule {}
