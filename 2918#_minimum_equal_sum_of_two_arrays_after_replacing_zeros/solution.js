// DON'T COPY/PASTE, THERE IS BETTER CODE THAN THIS, and Probably Better Approach, Read and Understand the Approach And look for a better cleaner code.
var minSum = function(nums1, nums2) {
    // Calculating the Sum of Arrays And Storing Zero's with their quantity
    let arr1_z = {};
    let arr2_z = {};
    let arr1_zx = 0;
    let arr2_zx = 0;
    let arr1_sum = nums1.reduce((acc, cv, index) => {
        if (cv === 0){
            arr1_z[index] = 0;
            arr1_zx++;
        }
        return acc + cv;
    }, 0
    );
    let arr2_sum = nums2.reduce ((acc, cv, index) => {
        if (cv === 0){
            arr2_z[index] = 0;
            arr2_zx++;
        }
        return acc + cv;
    }, 0
    );

    diff = Math.abs(arr1_sum - arr2_sum);

    z_more = Math.max(arr1_zx, arr2_zx);

    if (diff > 0 && z_more === 0){
        return -1;
    }

    let minSum1 = arr1_sum + arr1_zx;
    let minSum2 = arr2_sum + arr2_zx;

    if (minSum1 === minSum2) return minSum1;

    let z_available = (minSum1 < minSum2) ? arr1_zx : arr2_zx;

    if (z_available === 0 && minSum1 !== minSum2) return -1;

    if (diff > z_available * 999_999_999) return -1;

    return minSum1 > minSum2 ? minSum1 : minSum2;


};
