var sortColors = function (nums) {
	const freq = {0:0, 1:0, 2:0};
	for (let num of nums) {
		freq[num]++;
	}

	let index = 0;
	for (const key of [0, 1, 2]) {
		const count = freq[key] || 0;
		for (let i = 0; i < count; i++) {
			nums[index] = Number(key);
			index++;
		}
	}
}

