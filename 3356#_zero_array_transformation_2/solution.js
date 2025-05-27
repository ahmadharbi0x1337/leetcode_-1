var minZeroArray = function(nums, queries) {
	
	if (nums.every(x => x === 0)) return 0;

	function canBeZero(nums, queries, k){
		let n = nums.length;
		let diff = Array(n+1).fill(0);

		for (let i = 0; i < k; i++){
			let [l, r, val] = queries[i];
			diff[l] += val;
			if (r+1 < n){
				diff[r+1] -= val;
			}
		}

		let coverage = Array(n);

		coverage[0] = diff[0];

		for (let i = 1; i < n; i ++){
			coverage[i] = coverage[i-1] + diff[i];
		}

		for (let i = 0; i < n; i++){
			if (coverage[i] < nums[i]){
				return false;
			}
		}
		return true;
	}

	let low = 1;
	let high = n;
	let answer = -1;

	while (low <= high){
		let mid = Math.floor((low+high)/2);
		if (canBeZero(nums, queries, mid){
			answer = mid;
			high = mid - 1;
		}else{
			low = mid + 1;
		}
	}
	return answer;
};
