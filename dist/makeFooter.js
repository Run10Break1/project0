function makeFooter(sumup) {
    HAction.Run("TableCellBlockRow");
	for(var i = 0; i < 3; i++) HAction.Run("TableLeftCell");
    HAction.Run("TableMergeCell");
    
    HAction.Run("TableColBegin");
    makeSolidLine("bottom");
    for(var i = 0; i < 3; i++) {
        HAction.Run("TableRightCell");
        makeSolidLine("bottom");
    }

    HAction.Run("TableColBegin");
    makeSolidLine("top");
    for(var i = 0; i < 3; i++) {
        HAction.Run("TableRightCell");
        makeSolidLine("top");
    }

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

}

function makeFooter_script() {
    return 'function makeFooter(sumup) {' +
    'HAction.Run("TableCellBlockRow");for(var i = 0; i < 3; i++) HAction.Run("TableLeftCell");HAction.Run("TableMergeCell");HAction.Run("TableColBegin");makeSolidLine("bottom");for(var i = 0; i < 3; i++) {HAction.Run("TableRightCell");makeSolidLine("bottom");}HAction.Run("TableColBegin");makeSolidLine("top");for(var i = 0; i < 3; i++) {HAction.Run("TableRightCell");makeSolidLine("top");}HAction.Run("TableColBegin");fillCell();for(var i = 0; i < 3; i++) {HAction.Run("TableRightCell");fillCell();}HAction.Run("TableColBegin");writeText(10, black, true, false, "중고딕", sumup["name"], "center");HAction.Run("TableRightCell");writeText(10, black, true, true, "중고딕", sumup["costSum"], "right");HAction.Run("TableColEnd");' +
    '}';
}