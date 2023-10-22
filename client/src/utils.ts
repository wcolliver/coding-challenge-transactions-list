import {  formatEther, parseUnits } from "ethers"

export function wei2Eth(amount: string) {
    return formatEther(amount);
}

export function eth2Wei(amount: string) {
    return parseUnits(amount, "ether");
}