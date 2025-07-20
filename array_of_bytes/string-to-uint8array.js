function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

function alternativeAsciiToBytes(asciiString) {
    return new TextEncoder().encode(asciiString);
}

function anotherAlternativeAsciiToBytes(asciiString) {
    let arr = [];
    for (let i = 0; i < asciiString.length; i++) {
        arr.push(asciiString.charCodeAt(i));
    }

    return new Uint8Array(arr);
}

const ascii = "Hello, World!";
const byteArray = asciiToBytes(ascii);
const alternativeByteArray = alternativeAsciiToBytes(ascii);
const anotherAlternativeByteArray = anotherAlternativeAsciiToBytes(ascii);
console.log(byteArray);
console.log(alternativeByteArray);
console.log(anotherAlternativeByteArray);