import axios from 'axios';

export async function getErc20TokenAddresses(): Promise<string[]> {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    const erc20TokenAddresses: string[] = [];

    for (const coin of response.data) {
        if (coin.platforms?.ethereum) {
            const coinData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`);
            if (coinData.data.contract_address) {
                erc20TokenAddresses.push(coinData.data.contract_address);
            }
        }
    }

    return erc20TokenAddresses;
}