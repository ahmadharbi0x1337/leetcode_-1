var groupAnagrams = function(strs) {
    // Building a dict containing the anagrams alongside the indices of them.
    let freq = {};
    let n = strs.length;
    for (let i = 0; i < n; i++){
        let word = strs[i];
        let dupStr = word;
        dupStr = dupStr.split('').sort().join('');
        if (!freq[dupStr]){
            freq[dupStr] = [i];
        }else{
            freq[dupStr].push(i);
        }
    }
    // building the array group
    const grouped = [];
    for (let j in freq){
        const indices = freq[j];
        const group = [];
        let k = 0;
        for (let i of indices){
            group.push(strs[i]);
        }
        grouped.push(group);
    }
    return grouped;
};
