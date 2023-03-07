import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
// import { Web3Module, Web3Service } from 'nest-web3';
import { BalancesModule } from './balances/balances.module';
// import { Web3Module } from './web3/web3.module';

@Module({
  imports: [
      // Web3Module.forRoot({
          // useFactory: (configService: ConfigService) => configService.get('WEB_3'),
          // inject:[ConfigService]
      // }),
      ConfigModule.forRoot({
          envFilePath: './.env',
      }),
      ScheduleModule.forRoot(),
      BalancesModule,
      // Web3Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
