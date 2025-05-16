var isPalindrome = function (num) {
	if (num < 0){
		return false;
	}
	let y = num;
	let inverse = 0;
	while (y !== 0){
		inverse = (inverse*10) + (y%10);
		y = (y - (y%10)) / 10;
	}
	if (inverse === x){
		return true;
	}
	return false;
}
