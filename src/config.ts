/**
import algosdk from "algosdk"

const algodToken = "a".repeat(64);
const server:string = "http://localhost";
const port:string = "4001";

const mnemonic: string = "world young movie usage enter special smooth script stable cousin pool auto ability pattern habit library focus snake immense inhale work rely discover about comfort"

export function getClient(): algosdk.Algodv2{
    let client = new algosdk.Algodv2(algodToken,server,port);
    return client;
}

export function getAccount(): algosdk.Account{
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
 */