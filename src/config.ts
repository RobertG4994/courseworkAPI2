
import algosdk from "algosdk"

const algodToken = "a".repeat(64);
const server:string = "http://localhost";
const port:string = "4001";

const mnemonic: string = "online dance soldier demise first copper tackle city vessel combine young theme misery nice initial mandate dish east suspect dragon what sail board abandon hood"

export function getClient(): algosdk.Algodv2{
    let client = new algosdk.Algodv2(algodToken,server,port);
    return client;
}

export function getAccount(): algosdk.Account{
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
 