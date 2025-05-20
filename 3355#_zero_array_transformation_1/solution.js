var isZeroArray = function (nums, queries) {

	let n = nums.length;

	let diff = new Array(n+1).fill(0);

	for (let [l, r] of queries) {
		diff[l]++;
		if (r+1 < n) diff[r+1]--;
	}

	const coverage = new Array(n);

	coverage[0] = diff[0];

	for (let i = 1; i < n; i++) {
		coverage[i] = coverage[i-1] + diff[i];
	}

	for (let i = 0; i < n; i++) {
		if (nums[i] > coverage[i]){
			return false;
		}
	}
	return true;
}
