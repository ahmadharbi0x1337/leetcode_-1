var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
      if (k <= numOnes) return k;
      if (k > numOnes && k-numOnes <= numZeros){
        return numOnes;
      }else{
        return (numOnes-(k-(numOnes+numZeros)))
      }
};
