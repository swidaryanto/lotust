const crypto = require('node:crypto');

// Vite 7 uses crypto.hash(), available in newer Node versions.
// Provide a compatible fallback for Node 18 local development.
if (typeof crypto.hash !== 'function') {
  crypto.hash = (algorithm, data, outputEncoding) => {
    const hash = crypto.createHash(algorithm).update(data).digest();
    return outputEncoding ? hash.toString(outputEncoding) : hash;
  };
}
