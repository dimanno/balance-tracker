import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import fs from 'fs/promises';
import path from 'path';
import { BalancesService } from './balances.service';

@Injectable()
export class BalanceJob implements OnApplicationBootstrap {
    private readonly address: string;
    private readonly balanceFilePath: string;

    constructor(private readonly balancesService: BalancesService, private readonly configService: ConfigService) {
        this.address = this.configService.get<string>('ADDRESS');
        this.balanceFilePath = path.join(__dirname, '../..', 'result/balances.json');
    }

    async onApplicationBootstrap() {
        await this.writeBalancesToFile(await this.fetchBalances());
    }

    @Cron('*/1 * * * *')
    async handleCron() {
        await this.writeBalancesToFile(await this.fetchBalances());
    }

    private async fetchBalances(): Promise<{ time: string; balances: any }> {
        const balances = await this.balancesService.getBalances(this.address);
        return {
            time: new Date().toISOString(),
            balances,
        };
    }

    private async writeBalancesToFile(balances: { time: string; balances: any }) {
        try {
            await fs.writeFile(this.balanceFilePath, JSON.stringify(balances));
            console.log(`Balances written to file at ${balances.time}`);
        } catch (err) {
            console.error(`Failed to write balances to file: ${err}`);
        }
    }
}