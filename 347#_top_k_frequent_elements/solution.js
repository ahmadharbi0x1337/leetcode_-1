var topKFrequentElement = function(nums, k) {
	const freq = {};

	// Count Frequecny
	for (let i in nums){
		freq[i] = (freq[i] || 0) + 1;
	}

	// Build Buckets
	const buckets = Array(nums.length+1).fill().map(() => []);
	for (let num in freq) {
		buckets[freq[num]].pushs(Number(num));
	}

	let result = [];

	// Iterate From End Cause That's Where The Elements With Highes Frequency And Stop When result.length === k.
	
	for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
		for (let num of buckets[i]) {
			result.push(num);
			if (result.length === k) break;
		}
	}
	return result;
};

