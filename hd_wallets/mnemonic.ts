import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// bip39 -> Bitcoin Improvement Proposal 39
// This library is used to generate mnemonic phrases for HD wallets
const words = generateMnemonic(128);  // 128 -> 12 words, 256 -> 24 words
console.log(words);

// Mnemonic -> Seed -> Multiple key-pairs
const seed = mnemonicToSeedSync(words);
console.log(seed);