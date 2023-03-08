import { Injectable } from '@nestjs/common';
import * as process from "process";
import Web3 from 'web3';
import axios from 'axios';

import { infura_project_uri, coingecko_api } from '../const'
import {ERC20_ABI} from './abiItem';

@Injectable()
export class BalancesService {
    async getBalances(address: string): Promise<any> {
        const web3 = new Web3(`${infura_project_uri}${process.env.INFURA_API_KEY}`);
        const ethBalance = await web3.eth.getBalance(address);
        const coinGeckoResponse = await axios.get(`${coingecko_api}coins/list`);
        const coinList = await coinGeckoResponse.data;
        const erc20Tokens = coinList.filter((coin) => coin.platforms?.ethereum);

        const erc20TokenBalances = await Promise.all(
            erc20Tokens.map(async (token) => {
                const contract = new web3.eth.Contract(ERC20_ABI, token.platforms.ethereum);
                const balance = await contract.methods.balanceOf(address).call();
                const decimals = await contract.methods.decimals().call();
                const symbol = token.symbol.toUpperCase();
                return {
                    symbol,
                    balance: balance / 10 ** decimals,
                };
            })
        );

        return {
            eth: web3.utils.fromWei(ethBalance),
            erc20: erc20TokenBalances,
        };
    };
}
