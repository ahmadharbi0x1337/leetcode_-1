var romanToInt = function(s) {
    let num = 0;
    let hashm = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    for (let i = 0; i < s.length; i++){
        if (hashm[s[i]] < hashm[s[i+1]] && hashm[s[i+1]] != undefined){
            num += hashm[s[i+1]] - hashm[s[i]];
            i++;
            continue;
        }
        num += hashm[s[i]];
    }
    return num;
};
