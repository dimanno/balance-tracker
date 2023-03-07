import { Controller, Get, Param } from '@nestjs/common';
import Web3 from 'web3';
import {BalancesService} from "./balances.service";

@Controller('balance')
export class BalancesController {
    constructor(private readonly balancesService: BalancesService) {}

    @Get('/balance/:address')
    async getBalances(@Param('address') address: string): Promise<any> {
        return this.balancesService.getBalances('0xA145ac099E3d2e9781C9c848249E2e6b256b030D')
    }
}
