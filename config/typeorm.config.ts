import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeormConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};