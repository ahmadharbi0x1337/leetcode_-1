var search = function(nums, target) {

	const searchBS = function(nums, left, right, target) {

		if (left > right) return -1;

		let mid = Math.floor((left+right)/2);

		if (nums[mid] === target) return true;

		if (nums[mid] > target) {
			return searchBS(nums, left, mid-1, target);
		}else{
			return searchBS(nums, mid+1, right, target);
		}
	};

	return searchBS(nums, 0, nums.length-1, target);
};

