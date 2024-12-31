export function shortenPublicKey(publicKey) {
    const shortened = publicKey.slice(0, 4) + '...' + publicKey.slice(-3);
    return shortened;
}
