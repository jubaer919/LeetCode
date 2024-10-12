/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let cols = Array(9).fill().map(() => new Set())
    let rows = Array(9).fill().map(() => new Set())
    let squers = Array(9).fill().map(() => new Set())
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c]
            
            if(val === ".") continue
            
            const squersIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
            
            if (rows[r].has(val) || cols[c].has(val) || squers[squersIndex].has(val)) {
                return false
            }
            
            cols[c].add(val)
            rows[r].add(val)
            squers[squersIndex].add(val)
        }
    }
    
    return true
};