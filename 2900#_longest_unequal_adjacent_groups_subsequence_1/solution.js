
var getLongestSubsequence = function(words, groups) {
    let result = [];
    let last = -1;
    for (let i = 0; i < words.length; i++){
        if (result.length === 0 || groups[i] !== last){
            result.push(words[i]);
            last = groups[i];
        }
    }
    return result;
};
