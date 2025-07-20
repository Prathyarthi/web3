import crypto from 'crypto';
function findHashWithPrefix(prefix) {
    let input = 0;

    while (true) {
        const inputString = '100xdevs' + input.toString();
        const hash = crypto.createHash('sha256').update(inputString).digest('hex');

        if (hash.startsWith(prefix)) {
            return {
                input: inputString,
                hash: hash
            }
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}, Hash: ${result.hash}`);