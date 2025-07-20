function asciiToBytes(asciiString) {
    return Array.from(asciiString).map(char => char.charCodeAt(0));
}

const asciiString = "Hello, World!";
const bytes = asciiToBytes(asciiString);
console.log(bytes);
