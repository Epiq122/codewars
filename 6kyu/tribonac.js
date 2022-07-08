function tribonacci(signature, n) {
    if (n === 0) return [];
    if (n === 1) return [signature[0]];
    if (n === 2) return [signature[0], signature[1]];
    if (n === 3) return [signature[0], signature[1], signature[2]];
    let result = [signature[0], signature[1], signature[2]];
    for (let i = 3; i < n; i++) {
        result.push(result[i - 1] + result[i - 2] + result[i - 3]);
    }
    return result;
}
