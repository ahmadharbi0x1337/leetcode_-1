var isValid = function(s) {
    const stack = [];
    let map = {
        ')':'(',
        '}':'{',
        ']':'[',
    };

    for (let char of s){
        if (char in map){
            const top = stack.pop()
            if (top !== map[char]){
                return false;
            }
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
};
