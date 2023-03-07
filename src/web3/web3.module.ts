import { Module } from '@nestjs/common';
import Web3 from 'web3';

@Module({
    providers: [
        {
            provide: Web3,
            useValue: new Web3('https://mainnet.infura.io/v3/638ca83bc00e482cb576df54d71046d9'),
        },
    ],
    exports: [Web3],
})
export class Web3Module {}

