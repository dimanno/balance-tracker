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
    payable: boolean;
    stateMutability: "nonpayable" | "payable" | "view";
    type: "function" | "constructor" | "fallback" | "event";
}
export const ERC20_ABI: ERC20AbiItem[] = [
    {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint8' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];
