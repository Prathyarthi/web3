function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

const bytes = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];

const asciiString = bytesToAscii(bytes);
console.log(asciiString);