var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;

    let freq = Array(26).fill(0);
    
    for (let char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < t; i++) {
        let newFreq = Array(26).fill(0);

        for (let j = 0; j < 26; j++) {
            let count = freq[j];

            if (j === 25) { // 'z'
                newFreq[0] = (newFreq[0] + count) % MOD; // 'a'
                newFreq[1] = (newFreq[1] + count) % MOD; // 'b'
            } else {
                newFreq[j + 1] = (newFreq[j + 1] + count) % MOD;
            }
        }

        freq = newFreq;
    }

    return freq.reduce((sum, count) => (sum + count) % MOD, 0);
}
