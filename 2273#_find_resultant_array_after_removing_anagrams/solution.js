var removeAnagrams = function(words) {
    let result = [];
    let n = words.length;
    for (let i = 0; i < n; i++){
        if (result.length === 0){
            result.push(words[i]);
        }else{
            let current = words[i];
            let previous = result[result.length-1];
            if (current.split('').sort().join('') !== previous.split('').sort().join('')){
                result.push(current);
            }
            // Else Skip The current Word, meaning don't add the adjacent anagram to the result array
        }
    }
    return result;
};
