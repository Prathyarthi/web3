function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
}

const bytes = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
console.log(bytesToAscii(bytes));