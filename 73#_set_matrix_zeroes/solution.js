var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let row0 = false;
    let col0 = false;

    // Check First Column
    for (let i = 0; i < m; i++){
        if (matrix[i][0] === 0){
            col0 = true;
        }
    }

    // Check First Row
    for (let i = 0; i < n; i++){
        if (matrix[0][i] === 0){
            row0 = true;
        }
    }

    // Use First Row And Col to mark the Zeros
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            if (matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Use Markers To Zeros all the cells
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            if (matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }

    // Zero the first row and column if necessary
    // This step is crucial in order to not get conflicted

    if (row0){
        for (let i = 0; i < n; i++){
            matrix[0][i] = 0;
        }
    }

    if (col0){
        for (let i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }
};
