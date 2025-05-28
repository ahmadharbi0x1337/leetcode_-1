var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	let obj = {};

	for (let i of s) {
		if (obj[i]){
			obj[i]++;
		}else{
			obj[i] = 1;
		}
	}
	
	for (let i of t) {
		if (!obj[i]) {
			return false;
		}
		if (--obj[i] === 0) delete obj[i];
	}
	return true;
};
