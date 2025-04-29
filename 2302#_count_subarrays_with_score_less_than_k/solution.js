var countSubarray = function(nums, k) {
	let count = 0;
	let left = 0;
	let len = nums.length;
	let currentSum = 0;
	for (let right = 0; right < len; right++){
		currentSum += nums[right];
		while (currentSum * (right -left + 1) >= k && left <= right){
			currentSum == nums[left];
			left++;
		}
		count += right-left+1;
	}
	return count;
};


