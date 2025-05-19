var triangleType = function(nums){
	for (let i = 0; i < nums.length-1; i++){
        	if (nums[i] > nums[i+1]){
            		let tmp = nums[i];
            		nums[i] = nums[i+1];
            		nums[i+1] =tmp;
		}
    	}
        if (nums[2] >= nums[0]+nums[1]) return "none";

        if (nums[0] === nums[1] && nums[0] === nums[2]){
        	return 'equilateral';
    	}
    	else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]){
        	return 'isosceles';
    	}else{
        	return 'scalene';
    	}
