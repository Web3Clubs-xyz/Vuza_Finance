import axios from 'axios';
import { ethers } from 'ethers';

const HOSTED_SDK_URL = 'https://api-v2.pendle.finance/core/';

type MethodReturnType<Data> = {
    tx: {
        data: string;
        to: string;
        value: string;
    };
    data: Data;
};

export async function callSDK<Data>(path: string, params: Record<string, any> = {}) {
   try {
    console.log("here")
        const response = await axios.get<MethodReturnType<Data>>(HOSTED_SDK_URL + path, { params });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error calling SDK:', error);
        throw new Error('SDK call failed'); // Custom error handling if needed
    }
}

export async function getSigner() {
    const provider = new ethers.JsonRpcProvider('https://arb1.arbitrum.io/rpc');
    console.log(provider)

    const signer = new ethers.Wallet('c1e6a9049da577eeaed39aeca3e68be1350674c0463554f70b26f45fc3b1eea9', provider);
    const balance = await provider.getBalance(signer.address);
    console.log('Balance: ', ethers.formatEther(balance), 'ETH');
    return signer;
}