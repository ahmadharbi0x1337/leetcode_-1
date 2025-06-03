var isPalindrome = function(s) {
	let str = s.replace(/[^a-zA-Z0-9]/g, '');

	let left = 0;
	let right = str.length-1;

	while (left < right) {
		if (str[left] !== str[right]) return false;
		right--;
		left++;
	}
	return true;
}

