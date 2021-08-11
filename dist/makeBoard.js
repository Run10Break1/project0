function makeBoard(mId, info, sumup) {
    var len = info.length - 1;

    black = [0, 0, 0];
    order = ["", "center", "center", "right", "center", "center"];

    writeText(10, black, false, true, "함초롬바탕", mId, "center");
    for(var i = 0; i < len; i++) {
        for(var j = 1; j < 6; j++) {
            HAction.Run("TableRightCell");
            writeText(9, black, false, false, "함초롬바탕", info[i][j], order[j]);
            makeBottomDotLine();
            divideCell();
        }

        HAction.Run("TableRightCell");
    }

    
    for(var i = 1; i < 6; i++) {
        HAction.Run("TableRightCell");
        writeText(9, black, false, false, "함초롬바탕", info[len][i], order[j]);
    }
    
    HAction.Run("TableColBegin");
    for(var i = 1; i < 6; i++) {
        HAction.Run("TableRightCell");
        makeBottomDotLine();
    }

    HAction.Run("TableRightCell");

    {   
        
        HAction.Run("TableCellBlockRow");
	    for(var i = 0; i < 3; i++) HAction.Run("TableLeftCell");
	    HAction.Run("TableMergeCell");
	
        
        HAction.Run("TableColBegin");
        makeBottomDotLine();
        for(var i = 0; i < 3; i++) {
            HAction.Run("TableRightCell");
            makeBottomDotLine();
        }

        
        HAction.Run("TableColBegin");
        makeTopDotLine();

        
        HAction.Run("TableColBegin");
        fillCell();
        for(var i = 0; i < 3; i++) {
            HAction.Run("TableRightCell");
            fillCell();
        }

        
        HAction.Run("TableColBegin");
        writeText(10, black, true, false, "중고딕", sumup["name"], "center");
        HAction.Run("TableRightCell");
        writeText(10, black, true, true, "중고딕", sumup["costSum"], "right");

        HAction.Run("TableColEnd");
        HAction.Run("TableRightCell");
    }
}
function makeBoard_script() {
    return 'function makeBoard(mId, sumup, info) {' + 
    'var len = info.length - 1;black = [0, 0, 0];order = ["", "center", "center", "right", "center", "center"];writeText(10, black, false, true, "함초롬바탕", mId, "center");for(var i = 0; i < len; i++) {for(var j = 1; j < 6; j++) {HAction.Run("TableRightCell");writeText(9, black, false, false, "함초롬바탕", info[i][j], order[j]);makeBottomDotLine();divideCell();}HAction.Run("TableRightCell");}for(var i = 1; i < 6; i++) {HAction.Run("TableRightCell");writeText(9, black, false, false, "함초롬바탕", info[len][i], order[i]);}HAction.Run("TableColBegin");for(var i = 1; i < 6; i++) {HAction.Run("TableRightCell");makeBottomDotLine();}HAction.Run("TableRightCell");' + 
    '{   HAction.Run("TableCellBlockRow");for(var i = 0; i < 3; i++) HAction.Run("TableLeftCell");HAction.Run("TableMergeCell");HAction.Run("TableColBegin");makeBottomDotLine();for(var i = 0; i < 3; i++) {HAction.Run("TableRightCell");makeBottomDotLine();}HAction.Run("TableColBegin");makeTopDotLine();HAction.Run("TableColBegin");fillCell();for(var i = 0; i < 3; i++) {HAction.Run("TableRightCell");fillCell();}HAction.Run("TableColBegin");writeText(10, black, true, false, "중고딕", sumup["name"], "center");HAction.Run("TableRightCell");writeText(10, black, true, true, "중고딕", sumup["costSum"], "right");HAction.Run("TableColEnd");HAction.Run("TableRightCell");}' +
    '}';
}