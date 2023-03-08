import { Injectable, Get, Param } from '@nestjs/common';
import Web3 from 'web3';

import { getErc20TokenAddresses } from './coingecko.service';
import {ERC20_ABI} from './abiItem'
@Injectable()
export class BalancesService {
    private readonly web3: Web3;
    private erc20TokenAddresses: string[]

    constructor() {
        this.web3 = new Web3('https://mainnet.infura.io/v3/40b23461f7ef42a5b49920b81f995f3c');

        getErc20TokenAddresses().then((addresses) => {
            this.erc20TokenAddresses = addresses;
        });
    }

    async getBalances(address: string): Promise<any> {
        const balances = {};
        balances['ETH'] = await this.web3.eth.getBalance(address);

        for (const tokenAddress of this.erc20TokenAddresses) {
            const contract = new this.web3.eth.Contract(ERC20_ABI, tokenAddress);
            const balance = await contract.methods.balanceOf(address).call();
            const decimals = await contract.methods.decimals().call();
            const symbol = await contract.methods.symbol().call();
            balances[symbol] = balance / 10 ** decimals;
        }
        console.log('88888', balances);
        return balances;
    }
}
