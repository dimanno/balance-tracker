import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exeptions/exceptions.filter';
import { ScheduleModule } from '@nestjs/schedule';
import { BalancesModule } from './balances/balances.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true
      }),
      ScheduleModule.forRoot(),
      BalancesModule,
  ],
  controllers: [],
  providers: [
      {
          provide: APP_FILTER,
          useClass: AllExceptionsFilter,
      }
  ],
})
export class AppModule {}
