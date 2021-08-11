function makeTable(rowNum) {
	HAction.GetDefault("PageSetup", HParameterSet.HSecDef.HSet);
	with (HParameterSet.HSecDef)
	{
		PageDef.LeftMargin = MiliToHwpUnit(20.0);
		PageDef.RightMargin = MiliToHwpUnit(20.0);
		PageDef.FooterLen = MiliToHwpUnit(10.0);
		HSet.SetItem("ApplyClass", 24);
		HSet.SetItem("ApplyTo", 3);
	}
	HAction.Execute("PageSetup", HParameterSet.HSecDef.HSet);
	HAction.GetDefault("TableCreate", HParameterSet.HTableCreation.HSet);
	with (HParameterSet.HTableCreation)
	{
		Rows = rowNum;
		Cols = 6;
		WidthType = 2;
		HeightType = 1;
		WidthValue = MiliToHwpUnit(20.4);
		HeightValue = MiliToHwpUnit(22.6);
		CreateItemArray("ColWidth", 6);
		ColWidth.Item(0) = MiliToHwpUnit(0.0);
		ColWidth.Item(1) = MiliToHwpUnit(0.0);
		ColWidth.Item(2) = MiliToHwpUnit(0.0);
		ColWidth.Item(3) = MiliToHwpUnit(0.0);
		ColWidth.Item(4) = MiliToHwpUnit(0.0);
		ColWidth.Item(5) = MiliToHwpUnit(0.0);
		CreateItemArray("RowHeight", 23);
		RowHeight.Item(0) = MiliToHwpUnit(0.0);
		RowHeight.Item(1) = MiliToHwpUnit(0.0);
		RowHeight.Item(2) = MiliToHwpUnit(0.0);
		RowHeight.Item(3) = MiliToHwpUnit(0.0);
		RowHeight.Item(4) = MiliToHwpUnit(0.0);
		RowHeight.Item(5) = MiliToHwpUnit(0.0);
		RowHeight.Item(6) = MiliToHwpUnit(0.0);
		RowHeight.Item(7) = MiliToHwpUnit(0.0);
		RowHeight.Item(8) = MiliToHwpUnit(0.0);
		RowHeight.Item(9) = MiliToHwpUnit(0.0);
		RowHeight.Item(10) = MiliToHwpUnit(0.0);
		RowHeight.Item(11) = MiliToHwpUnit(0.0);
		RowHeight.Item(12) = MiliToHwpUnit(0.0);
		RowHeight.Item(13) = MiliToHwpUnit(0.0);
		RowHeight.Item(14) = MiliToHwpUnit(0.0);
		RowHeight.Item(15) = MiliToHwpUnit(0.0);
		RowHeight.Item(16) = MiliToHwpUnit(0.0);
		RowHeight.Item(17) = MiliToHwpUnit(0.0);
		RowHeight.Item(18) = MiliToHwpUnit(0.0);
		RowHeight.Item(19) = MiliToHwpUnit(0.0);
		RowHeight.Item(20) = MiliToHwpUnit(0.0);
		RowHeight.Item(21) = MiliToHwpUnit(0.0);
		RowHeight.Item(22) = MiliToHwpUnit(0.0);
		TableProperties.CellSpacing = MiliToHwpUnit(0.0);
		TableProperties.RepeatHeader = 1;
		TableProperties.PageBreak = TableBreak("Cell");
		TableProperties.Width = 5777;
		TableProperties.TableBorderFill.BorderApplyTo = 0;
	}
	HAction.Execute("TableCreate", HParameterSet.HTableCreation.HSet);
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HorzRelTo = HorzRel("Para");
		TreatAsChar = 1;
		OutsideMarginBottom = MiliToHwpUnit(0.5);
		OutsideMarginTop = MiliToHwpUnit(0.5);
		OutsideMarginRight = MiliToHwpUnit(0.5);
		OutsideMarginLeft = MiliToHwpUnit(0.5);
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		CellMarginBottom = MiliToHwpUnit(0.5);
		CellMarginTop = MiliToHwpUnit(0.5);
		CellMarginRight = MiliToHwpUnit(0.5);
		CellMarginLeft = MiliToHwpUnit(0.5);
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 1);
		ShapeTableCell.Height = MiliToHwpUnit(7.5);
		ShapeTableCell.Width = MiliToHwpUnit(25.37);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 1);
		ShapeTableCell.Width = MiliToHwpUnit(30.77);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 1);
		ShapeTableCell.Width = MiliToHwpUnit(38.76);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveRight");
	HAction.Run("MoveRight");
	HAction.Run("MoveRight");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 1);
		ShapeTableCell.Width = MiliToHwpUnit(23.5);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveLeft");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 1);
		ShapeTableCell.Width = MiliToHwpUnit(23.5);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveLeft");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 1);
		ShapeTableCell.Width = MiliToHwpUnit(27.95);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
		ShapeTableCell.HasMargin = 1;
		ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
		ShapeTableCell.HasMargin = 1;
		ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
		ShapeTableCell.HasMargin = 1;
		ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveLeft");
	HAction.Run("MoveLeft");
	HAction.Run("MoveLeft");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
		ShapeTableCell.HasMargin = 1;
		ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveLeft");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
		ShapeTableCell.HasMargin = 1;
		ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.Run("MoveLeft");
	HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	with (HParameterSet.HShapeObject)
	{
		HSet.SetItem("ShapeType", 3);
		HSet.SetItem("ShapeCellSize", 0);
		ShapeTableCell.HasMargin = 1;
		ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);
		ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);
	}
	HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);
	HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
	with (HParameterSet.HCharShape)
	{
		FaceNameUser = "명조";
		FontTypeUser = FontType("HFT");
		FaceNameSymbol = "한양중고딕";
		FontTypeSymbol = FontType("HFT");
		FaceNameOther = "한양신명조";
		FontTypeOther = FontType("HFT");
		FaceNameJapanese = "한양중고딕";
		FontTypeJapanese = FontType("HFT");
		FaceNameHanja = "한양중고딕";
		FontTypeHanja = FontType("HFT");
		FaceNameLatin = "한양중고딕";
		FontTypeLatin = FontType("HFT");
		FaceNameHangul = "한양중고딕";
		FontTypeHangul = FontType("HFT");
	}
	HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
	HAction.Run("CharShapeBold");
	HAction.Run("ParagraphShapeAlignCenter");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "구분";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
	with (HParameterSet.HCharShape)
	{
		FaceNameUser = "명조";
		FontTypeUser = FontType("HFT");
		FaceNameSymbol = "한양중고딕";
		FontTypeSymbol = FontType("HFT");
		FaceNameOther = "한양신명조";
		FontTypeOther = FontType("HFT");
		FaceNameJapanese = "한양중고딕";
		FontTypeJapanese = FontType("HFT");
		FaceNameHanja = "한양중고딕";
		FontTypeHanja = FontType("HFT");
		FaceNameLatin = "한양중고딕";
		FontTypeLatin = FontType("HFT");
		FaceNameHangul = "한양중고딕";
		FontTypeHangul = FontType("HFT");
	}
	HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
	HAction.Run("CharShapeBold");
	HAction.Run("ParagraphShapeAlignCenter");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "사용일자";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
	with (HParameterSet.HCharShape)
	{
		FaceNameUser = "명조";
		FontTypeUser = FontType("HFT");
		FaceNameSymbol = "한양중고딕";
		FontTypeSymbol = FontType("HFT");
		FaceNameOther = "한양신명조";
		FontTypeOther = FontType("HFT");
		FaceNameJapanese = "한양중고딕";
		FontTypeJapanese = FontType("HFT");
		FaceNameHanja = "한양중고딕";
		FontTypeHanja = FontType("HFT");
		FaceNameLatin = "한양중고딕";
		FontTypeLatin = FontType("HFT");
		FaceNameHangul = "한양중고딕";
		FontTypeHangul = FontType("HFT");
	}
	HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
	HAction.Run("CharShapeBold");
	HAction.Run("ParagraphShapeAlignCenter");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "상호명";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
	with (HParameterSet.HCharShape)
	{
		FaceNameUser = "명조";
		FontTypeUser = FontType("HFT");
		FaceNameSymbol = "한양중고딕";
		FontTypeSymbol = FontType("HFT");
		FaceNameOther = "한양신명조";
		FontTypeOther = FontType("HFT");
		FaceNameJapanese = "한양중고딕";
		FontTypeJapanese = FontType("HFT");
		FaceNameHanja = "한양중고딕";
		FontTypeHanja = FontType("HFT");
		FaceNameLatin = "한양중고딕";
		FontTypeLatin = FontType("HFT");
		FaceNameHangul = "한양중고딕";
		FontTypeHangul = FontType("HFT");
	}
	HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
	HAction.Run("CharShapeBold");
	HAction.Run("ParagraphShapeAlignCenter");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "ㄱ";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	HAction.Run("DeleteBack");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "금액";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
	with (HParameterSet.HCharShape)
	{
		FaceNameUser = "명조";
		FontTypeUser = FontType("HFT");
		FaceNameSymbol = "한양중고딕";
		FontTypeSymbol = FontType("HFT");
		FaceNameOther = "한양신명조";
		FontTypeOther = FontType("HFT");
		FaceNameJapanese = "한양중고딕";
		FontTypeJapanese = FontType("HFT");
		FaceNameHanja = "한양중고딕";
		FontTypeHanja = FontType("HFT");
		FaceNameLatin = "한양중고딕";
		FontTypeLatin = FontType("HFT");
		FaceNameHangul = "한양중고딕";
		FontTypeHangul = FontType("HFT");
	}
	HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
	HAction.Run("CharShapeBold");
	HAction.Run("ParagraphShapeAlignCenter");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "영수증 매수";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	HAction.Run("MoveRight");
	HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
	with (HParameterSet.HCharShape)
	{
		FaceNameUser = "명조";
		FontTypeUser = FontType("HFT");
		FaceNameSymbol = "한양중고딕";
		FontTypeSymbol = FontType("HFT");
		FaceNameOther = "한양신명조";
		FontTypeOther = FontType("HFT");
		FaceNameJapanese = "한양중고딕";
		FontTypeJapanese = FontType("HFT");
		FaceNameHanja = "한양중고딕";
		FontTypeHanja = FontType("HFT");
		FaceNameLatin = "한양중고딕";
		FontTypeLatin = FontType("HFT");
		FaceNameHangul = "한양중고딕";
		FontTypeHangul = FontType("HFT");
	}
	HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
	HAction.Run("CharShapeBold");
	HAction.Run("ParagraphShapeAlignCenter");
	HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
	HParameterSet.HInsertText.Text = "비고";
	HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
	
	function returnFirstCell() {
    		for(var i = 0; i < 6; i++) HAction.Run("TableLeftCell");
	}
	returnFirstCell();	

	function fillCell() {
    		HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
		with (HParameterSet.HCellBorderFill)
		{
			FillAttr.Type = BrushType("NullBrush|WinBrush");
			FillAttr.WinBrushFaceStyle = HatchStyle("None");
			FillAttr.WinBrushHatchColor = RGBColor(0, 0, 0);
			FillAttr.WinBrushFaceColor = RGBColor(255, 247, 204);
			FillAttr.WindowsBrush = 1;
		}
		HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
 		HAction.Run("TableCellShapeFillColor");
	}

	fillCell();
	for(var i = 0; i < 5; i++) {
		HAction.Run("TableRightCellAppend");
		fillCell();
	}
	
	returnFirstCell();
	
	function thead1() {
    		HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
		with (HParameterSet.HCellBorderFill)
		{
			BorderWidthBottom = HwpLineWidth("0.5mm");
			BorderTypeBottom = HwpLineType("DoubleSlim");
			FillAttr.GradationAlpha = 0;
			FillAttr.ImageAlpha = 0;
		}
		HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	}

	thead1();
	for(var i = 0; i < 5; i++) {
		HAction.Run("TableRightCellAppend");
		thead1();
	}
	returnFirstCell();
	function thead2() {
   		 HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
		with (HParameterSet.HCellBorderFill)
		{
			BorderWidthTop = HwpLineWidth("0.5mm");
			FillAttr.GradationAlpha = 0;
			FillAttr.ImageAlpha = 0;
		}
		HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	}
	thead2();
	for(var i = 0; i < 5; i++) {
		HAction.Run("TableRightCellAppend");
		thead2();
	}
	//end
	HAction.Run("TableRightCell");
}

function makeTable_script() {
    return 'function makeTable(rowNum) {' +
    'HAction.GetDefault("PageSetup", HParameterSet.HSecDef.HSet);with (HParameterSet.HSecDef){PageDef.LeftMargin = MiliToHwpUnit(20.0);PageDef.RightMargin = MiliToHwpUnit(20.0);PageDef.FooterLen = MiliToHwpUnit(10.0);HSet.SetItem("ApplyClass", 24);HSet.SetItem("ApplyTo", 3);}HAction.Execute("PageSetup", HParameterSet.HSecDef.HSet);HAction.GetDefault("TableCreate", HParameterSet.HTableCreation.HSet);with (HParameterSet.HTableCreation){Rows = rowNum;Cols = 6;WidthType = 2;HeightType = 1;WidthValue = MiliToHwpUnit(20.4);HeightValue = MiliToHwpUnit(22.6);CreateItemArray("ColWidth", 6);ColWidth.Item(0) = MiliToHwpUnit(0.0);ColWidth.Item(1) = MiliToHwpUnit(0.0);ColWidth.Item(2) = MiliToHwpUnit(0.0);ColWidth.Item(3) = MiliToHwpUnit(0.0);ColWidth.Item(4) = MiliToHwpUnit(0.0);ColWidth.Item(5) = MiliToHwpUnit(0.0);CreateItemArray("RowHeight", 23);RowHeight.Item(0) = MiliToHwpUnit(0.0);RowHeight.Item(1) = MiliToHwpUnit(0.0);RowHeight.Item(2) = MiliToHwpUnit(0.0);RowHeight.Item(3) = MiliToHwpUnit(0.0);RowHeight.Item(4) = MiliToHwpUnit(0.0);RowHeight.Item(5) = MiliToHwpUnit(0.0);RowHeight.Item(6) = MiliToHwpUnit(0.0);RowHeight.Item(7) = MiliToHwpUnit(0.0);RowHeight.Item(8) = MiliToHwpUnit(0.0);RowHeight.Item(9) = MiliToHwpUnit(0.0);RowHeight.Item(10) = MiliToHwpUnit(0.0);RowHeight.Item(11) = MiliToHwpUnit(0.0);RowHeight.Item(12) = MiliToHwpUnit(0.0);RowHeight.Item(13) = MiliToHwpUnit(0.0);RowHeight.Item(14) = MiliToHwpUnit(0.0);RowHeight.Item(15) = MiliToHwpUnit(0.0);RowHeight.Item(16) = MiliToHwpUnit(0.0);RowHeight.Item(17) = MiliToHwpUnit(0.0);RowHeight.Item(18) = MiliToHwpUnit(0.0);RowHeight.Item(19) = MiliToHwpUnit(0.0);RowHeight.Item(20) = MiliToHwpUnit(0.0);RowHeight.Item(21) = MiliToHwpUnit(0.0);RowHeight.Item(22) = MiliToHwpUnit(0.0);TableProperties.CellSpacing = MiliToHwpUnit(0.0);TableProperties.RepeatHeader = 1;TableProperties.PageBreak = TableBreak("Cell");TableProperties.Width = 5777;TableProperties.TableBorderFill.BorderApplyTo = 0;}HAction.Execute("TableCreate", HParameterSet.HTableCreation.HSet);HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HorzRelTo = HorzRel("Para");TreatAsChar = 1;OutsideMarginBottom = MiliToHwpUnit(0.5);OutsideMarginTop = MiliToHwpUnit(0.5);OutsideMarginRight = MiliToHwpUnit(0.5);OutsideMarginLeft = MiliToHwpUnit(0.5);HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){CellMarginBottom = MiliToHwpUnit(0.5);CellMarginTop = MiliToHwpUnit(0.5);CellMarginRight = MiliToHwpUnit(0.5);CellMarginLeft = MiliToHwpUnit(0.5);HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 1);ShapeTableCell.Height = MiliToHwpUnit(7.5);ShapeTableCell.Width = MiliToHwpUnit(25.37);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveRight");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 1);ShapeTableCell.Width = MiliToHwpUnit(30.77);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveRight");' +
    'HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 1);ShapeTableCell.Width = MiliToHwpUnit(38.76);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveRight");HAction.Run("MoveRight");HAction.Run("MoveRight");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 1);ShapeTableCell.Width = MiliToHwpUnit(23.5);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveLeft");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 1);ShapeTableCell.Width = MiliToHwpUnit(23.5);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveLeft");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 1);ShapeTableCell.Width = MiliToHwpUnit(27.95);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);ShapeTableCell.HasMargin = 1;ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveRight");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);ShapeTableCell.HasMargin = 1;ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveRight");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);ShapeTableCell.HasMargin = 1;ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveLeft");HAction.Run("MoveLeft");HAction.Run("MoveLeft");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);ShapeTableCell.HasMargin = 1;ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveLeft");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);ShapeTableCell.HasMargin = 1;ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);}' +
    'HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.Run("MoveLeft");HAction.GetDefault("TablePropertyDialog", HParameterSet.HShapeObject.HSet);with (HParameterSet.HShapeObject){HSet.SetItem("ShapeType", 3);HSet.SetItem("ShapeCellSize", 0);ShapeTableCell.HasMargin = 1;ShapeTableCell.MarginBottom = MiliToHwpUnit(1.0);ShapeTableCell.MarginTop = MiliToHwpUnit(1.0);ShapeTableCell.MarginRight = MiliToHwpUnit(1.0);ShapeTableCell.MarginLeft = MiliToHwpUnit(1.0);}HAction.Execute("TablePropertyDialog", HParameterSet.HShapeObject.HSet);HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);with (HParameterSet.HCharShape){FaceNameUser = "명조";FontTypeUser = FontType("HFT");FaceNameSymbol = "한양중고딕";FontTypeSymbol = FontType("HFT");FaceNameOther = "한양신명조";FontTypeOther = FontType("HFT");FaceNameJapanese = "한양중고딕";FontTypeJapanese = FontType("HFT");FaceNameHanja = "한양중고딕";FontTypeHanja = FontType("HFT");FaceNameLatin = "한양중고딕";FontTypeLatin = FontType("HFT");FaceNameHangul = "한양중고딕";FontTypeHangul = FontType("HFT");}HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.Run("CharShapeBold");HAction.Run("ParagraphShapeAlignCenter");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "구분";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);HAction.Run("MoveRight");HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);with (HParameterSet.HCharShape){FaceNameUser = "명조";FontTypeUser = FontType("HFT");FaceNameSymbol = "한양중고딕";FontTypeSymbol = FontType("HFT");FaceNameOther = "한양신명조";FontTypeOther = FontType("HFT");FaceNameJapanese = "한양중고딕";FontTypeJapanese = FontType("HFT");FaceNameHanja = "한양중고딕";FontTypeHanja = FontType("HFT");FaceNameLatin = "한양중고딕";FontTypeLatin = FontType("HFT");FaceNameHangul = "한양중고딕";FontTypeHangul = FontType("HFT");}HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.Run("CharShapeBold");HAction.Run("ParagraphShapeAlignCenter");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "사용일자";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);HAction.Run("MoveRight");HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);with (HParameterSet.HCharShape){FaceNameUser = "명조";FontTypeUser = FontType("HFT");FaceNameSymbol = "한양중고딕";FontTypeSymbol = FontType("HFT");FaceNameOther = "한양신명조";FontTypeOther = FontType("HFT");FaceNameJapanese = "한양중고딕";FontTypeJapanese = FontType("HFT");FaceNameHanja = "한양중고딕";FontTypeHanja = FontType("HFT");FaceNameLatin = "한양중고딕";FontTypeLatin = FontType("HFT");FaceNameHangul = "한양중고딕";FontTypeHangul = FontType("HFT");}HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.Run("CharShapeBold");HAction.Run("ParagraphShapeAlignCenter");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "상호명";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);HAction.Run("MoveRight");HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);with (HParameterSet.HCharShape){FaceNameUser = "명조";FontTypeUser = FontType("HFT");FaceNameSymbol = "한양중고딕";FontTypeSymbol = FontType("HFT");FaceNameOther = "한양신명조";FontTypeOther = FontType("HFT");FaceNameJapanese = "한양중고딕";FontTypeJapanese = FontType("HFT");FaceNameHanja = "한양중고딕";FontTypeHanja = FontType("HFT");FaceNameLatin = "한양중고딕";FontTypeLatin = FontType("HFT");FaceNameHangul = "한양중고딕";FontTypeHangul = FontType("HFT");}' + 
    'HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.Run("CharShapeBold");HAction.Run("ParagraphShapeAlignCenter");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "ㄱ";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);HAction.Run("DeleteBack");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "금액";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);HAction.Run("MoveRight");HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);with (HParameterSet.HCharShape){FaceNameUser = "명조";FontTypeUser = FontType("HFT");FaceNameSymbol = "한양중고딕";FontTypeSymbol = FontType("HFT");FaceNameOther = "한양신명조";FontTypeOther = FontType("HFT");FaceNameJapanese = "한양중고딕";FontTypeJapanese = FontType("HFT");FaceNameHanja = "한양중고딕";FontTypeHanja = FontType("HFT");FaceNameLatin = "한양중고딕";FontTypeLatin = FontType("HFT");FaceNameHangul = "한양중고딕";FontTypeHangul = FontType("HFT");}HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.Run("CharShapeBold");HAction.Run("ParagraphShapeAlignCenter");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "영수증 매수";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);HAction.Run("MoveRight");HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);with (HParameterSet.HCharShape){FaceNameUser = "명조";FontTypeUser = FontType("HFT");FaceNameSymbol = "한양중고딕";FontTypeSymbol = FontType("HFT");FaceNameOther = "한양신명조";FontTypeOther = FontType("HFT");FaceNameJapanese = "한양중고딕";FontTypeJapanese = FontType("HFT");FaceNameHanja = "한양중고딕";FontTypeHanja = FontType("HFT");FaceNameLatin = "한양중고딕";FontTypeLatin = FontType("HFT");FaceNameHangul = "한양중고딕";FontTypeHangul = FontType("HFT");}HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.Run("CharShapeBold");HAction.Run("ParagraphShapeAlignCenter");HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = "비고";HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);function returnFirstCell() {    for(var i = 0; i < 6; i++) HAction.Run("TableLeftCell");}returnFirstCell();function fillCell() {    HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){FillAttr.Type = BrushType("NullBrush|WinBrush");FillAttr.WinBrushFaceStyle = HatchStyle("None");FillAttr.WinBrushHatchColor = RGBColor(0, 0, 0);FillAttr.WinBrushFaceColor = RGBColor(255, 247, 204);FillAttr.WindowsBrush = 1;}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet); HAction.Run("TableCellShapeFillColor");}fillCell();for(var i = 0; i < 5; i++) {HAction.Run("TableRightCellAppend");fillCell();}returnFirstCell();function thead1() {    HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){BorderWidthBottom = HwpLineWidth("0.5mm");BorderTypeBottom = HwpLineType("DoubleSlim");FillAttr.GradationAlpha = 0;FillAttr.ImageAlpha = 0;}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);}thead1();for(var i = 0; i < 5; i++) {HAction.Run("TableRightCellAppend");thead1();}returnFirstCell();function thead2() {    HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){BorderWidthTop = HwpLineWidth("0.5mm");FillAttr.GradationAlpha = 0;FillAttr.ImageAlpha = 0;}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);}thead2();for(var i = 0; i < 5; i++) {HAction.Run("TableRightCellAppend");thead2();}HAction.Run("TableRightCell");' +
    '}';
}