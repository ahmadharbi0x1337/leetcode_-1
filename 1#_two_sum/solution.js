var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++){
        hash[nums[i]] = i;
    }
    let result = [];
    for (let j = 0; j < nums.length; j++){
        let complement = target - nums[j];
        if (hash[complement] && hash[complement] != j){
            result.push(j);
            result.push(hash[complement])
            return result;
        }
    }
};
