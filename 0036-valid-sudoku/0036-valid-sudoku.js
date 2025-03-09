/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row = Array.from({ length: 9 }, () => new Set());
    const col = Array.from({ length: 9 }, () => new Set());
    const squares = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') continue; // Skip empty cells

            let num = board[r][c];
            let squareRow = Math.floor(r / 3);
            let squareCol = Math.floor(c / 3);

            // Check if number already exists in row, column, or 3x3 square
            if (row[r].has(num) || col[c].has(num) || squares[squareRow][squareCol].has(num)) {
                return false;
            }

            // Add number to sets
            row[r].add(num);
            col[c].add(num);
            squares[squareRow][squareCol].add(num);
        }
    }
    return true;
};