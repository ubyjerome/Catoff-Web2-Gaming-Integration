export function shortenPublicKey(publicKey) {
    const shortened = publicKey.slice(0, 2) + '...' + publicKey.slice(-2);
    return shortened;
}
