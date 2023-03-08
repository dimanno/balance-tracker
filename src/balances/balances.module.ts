import { Module } from '@nestjs/common';
import { BalancesController } from './balances.controller';
import { BalancesService } from './balances.service';
import {BalanceJob} from "./balances.utils";

@Module({
    imports: [],
    controllers: [BalancesController],
    providers: [BalancesService, BalanceJob]
})
export class BalancesModule {}
