import crypto from 'crypto';

const input = 'Hello, World!';

const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(`Hash of "${input}": ${hash}`);
