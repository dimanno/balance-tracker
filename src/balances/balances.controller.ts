import { Controller, Get, Param } from '@nestjs/common';
import {BalancesService} from "./balances.service";

@Controller('balance')
export class BalancesController {
    constructor(private readonly balancesService: BalancesService) {}

    @Get(':address')
    async getBalances(@Param('address') address: string): Promise<any> {
        return this.balancesService.getBalances(address)
    }
}
