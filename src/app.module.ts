import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';
import { TasksService } from './tasks/tasks.service';
import { TypeormConfig } from '../config/typeorm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(TypeormConfig),
    TypeOrmModule.forFeature([Task]),
    UsersModule,
  ],
  providers: [TasksService],
  controllers: [],
})
export class AppModule {}
