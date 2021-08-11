function defaultFunction() {
    function makeSolidLine(level) {
        HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	    with (HParameterSet.HCellBorderFill)
	    {
            if(level == "bottom") {
                BorderWidthBottom = HwpLineWidth("0.5mm");
                BorderTypeBottom = HwpLineType("Solid");
            } else if(level == "top") BorderTypeTop = HwpLineType("Solid");

		    FillAttr.GradationAlpha = 0;
		    FillAttr.ImageAlpha = 0;
	    }
	    HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
    }
    function divideCell() {
	    HAction.GetDefault("TableSplitCell", HParameterSet.HTableSplitCell.HSet);
	    with (HParameterSet.HTableSplitCell)
	    {
		    Cols = 0;
		    DistributeHeight = 1;
    	}
	    HAction.Execute("TableSplitCell", HParameterSet.HTableSplitCell.HSet);
    }

    function makeBottomDotLine() {
        HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	    with (HParameterSet.HCellBorderFill)
	    {
	    	BorderTypeBottom = HwpLineType("Dot");
	    }
	    HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
    }

    function makeTopDotLine() {
        HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	    with (HParameterSet.HCellBorderFill)
	    {
	    	BorderTypeTop = HwpLineType("Dot");
	    }
	    HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
    }

    function fillCell() {
	    HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	    HAction.Run("TableCellShapeFillColor");
	    HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
	    with (HParameterSet.HCellBorderFill)
	    {
	    	FillAttr.Type = BrushType("NullBrush|WinBrush");
	    	FillAttr.WinBrushFaceStyle = HatchStyle("None");
	    	FillAttr.WinBrushHatchColor = RGBColor(0, 0, 0);
	    	FillAttr.WinBrushFaceColor = RGBColor(244, 229, 178);
	    	FillAttr.WindowsBrush = 1;
	    }
	    HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);
    }

    function writeText(px, color, bold, italic, font, text, order) {
        if(bold == true) HAction.Run("CharShapeBold");
        if(italic == true) HAction.Run("CharShapeItalic");
        
        HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);
        var o = HParameterSet.HCharShape;
        
        o.FontTypeUser = FontType("TTF");
        o.FontTypeSymbol = FontType("TTF");
        o.FontTypeOther = FontType("TTF");
        o.FontTypeJapanese = FontType("TTF");
        o.FontTypeHanja = FontType("TTF");
        FaceNameHangul = font;
        FaceNameLatin = font;
           o.TextColor = RGBColor(color[0], color[1], color[2]);
        o.Height = PointToHwpUnit(px);
        
        HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);
        HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);
        HParameterSet.HInsertText.Text = text;
        HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);
        if(order == "right") HAction.Run("ParagraphShapeAlignRight");
	    else if(order == "center") HAction.Run("ParagraphShapeAlignCenter");
    }
}

function defaultFunction_script() {
    return 'function makeSolidLine(level) {HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){if(level == "bottom") {BorderWidthBottom = HwpLineWidth("0.5mm");BorderTypeBottom = HwpLineType("Solid");} else if(level == "top") BorderTypeTop = HwpLineType("Solid");FillAttr.GradationAlpha = 0;FillAttr.ImageAlpha = 0;}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);}' + 
    'function divideCell() {HAction.GetDefault("TableSplitCell", HParameterSet.HTableSplitCell.HSet);with (HParameterSet.HTableSplitCell){Cols = 0;DistributeHeight = 1;}HAction.Execute("TableSplitCell", HParameterSet.HTableSplitCell.HSet);}' + 
    'function makeBottomDotLine() {HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){BorderTypeBottom = HwpLineType("Dot");}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);}' + 
    'function makeTopDotLine() {HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){BorderTypeTop = HwpLineType("Dot");}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);}' + 
    'function fillCell() {HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);HAction.Run("TableCellShapeFillColor");HAction.GetDefault("CellBorderFill", HParameterSet.HCellBorderFill.HSet);with (HParameterSet.HCellBorderFill){FillAttr.Type = BrushType("NullBrush|WinBrush");FillAttr.WinBrushFaceStyle = HatchStyle("None");FillAttr.WinBrushHatchColor = RGBColor(0, 0, 0);FillAttr.WinBrushFaceColor = RGBColor(244, 229, 178);FillAttr.WindowsBrush = 1;}HAction.Execute("CellBorderFill", HParameterSet.HCellBorderFill.HSet);}' + 
    'function writeText(px, color, bold, italic, font, text, order) {if(bold == true) HAction.Run("CharShapeBold");if(italic == true) HAction.Run("CharShapeItalic");HAction.GetDefault("CharShape", HParameterSet.HCharShape.HSet);var o = HParameterSet.HCharShape;o.FontTypeUser = FontType("TTF");o.FontTypeSymbol = FontType("TTF");o.FontTypeOther = FontType("TTF");o.FontTypeJapanese = FontType("TTF");o.FontTypeHanja = FontType("TTF");FaceNameHangul = font;FaceNameLatin = font;   o.TextColor = RGBColor(color[0], color[1], color[2]);o.Height = PointToHwpUnit(px);HAction.Execute("CharShape", HParameterSet.HCharShape.HSet);HAction.GetDefault("InsertText", HParameterSet.HInsertText.HSet);HParameterSet.HInsertText.Text = text;HAction.Execute("InsertText", HParameterSet.HInsertText.HSet);if(order == "right") HAction.Run("ParagraphShapeAlignRight");else if(order == "center") HAction.Run("ParagraphShapeAlignCenter");}';
}