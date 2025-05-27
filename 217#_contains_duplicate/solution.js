var containsDuplicate = function(nums) {
	let freq = {};
	for (let i = 0; i < nums.length; i++) {
		if (freq[nums[i]]) {
			return true;
		}
		if (!freq[nums[i]]) {
			freq[nums[i]] = 1;
		}
	}
	return false;
};
