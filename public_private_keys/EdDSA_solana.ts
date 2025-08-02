import { Keypair } from '@solana/web3.js';
import nacl from "tweetnacl";

const keypair = Keypair.generate();

const publicKey = keypair.publicKey.toBase58();
const privateKey = keypair.secretKey;

console.log("Public key:", publicKey);
console.log("Private key:", privateKey);

const message = "Hello World";
const messageUint8Array = new TextEncoder().encode(message);

const signature = nacl.sign.detached(messageUint8Array, privateKey);

const isValid = nacl.sign.detached.verify(messageUint8Array, signature, keypair.publicKey.toBytes());

console.log("Signature valid:", isValid);