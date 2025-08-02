import * as ed from "@noble/ed25519"

async function main() {
    const privateKey = ed.utils.randomPrivateKey();

    const message = new TextEncoder().encode("Hello world");

    const publicKey = await ed.getPublicKeyAsync(privateKey);

    const signature = await ed.signAsync(message, privateKey);

    const isValid = await ed.verifyAsync(signature, message, publicKey);

    console.log(isValid);
}

main()