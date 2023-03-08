import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BalancesModule } from './balances/balances.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: './.env',
      }),
      ScheduleModule.forRoot(),
      BalancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
