import { AbiItem } from 'web3-utils';
interface ERC20AbiItem {
    constant?: boolean;
    inputs?: {
        name: string;
        type: string;
    }[];
    name?: string;
    outputs?: {
        name: string;
        type: string;
    }[];
    payable?: boolean;
    stateMutability: "nonpayable" | "payable" | "view";
    type: "function" | "constructor" | "fallback" | "event";
    // "anonymous?": boolean;
}
export const ERC20_ABI: ERC20AbiItem[] = [{"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_logic","type":"address"},{"name":"_admin","type":"address"},{"name":"_data","type":"bytes"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]
