var FilePath = GetInputConstructorValueFilename("FilePath", loader);
if(FilePath["original"].length == 0){
    Invalid(tr("The parameter \"") + tr("File path") + tr("\" is not specified"));
    return;
};
var SheetIndexOrName = GetInputConstructorValue("SheetIndexOrName", loader);
if(SheetIndexOrName["original"].length == 0){
    Invalid(tr("The parameter \"") + tr("Sheet index or name") + tr("\" is not specified"));
    return;
};
var ColumnIndexOrName = GetInputConstructorValue("ColumnIndexOrName", loader);
if(ColumnIndexOrName["original"].length == 0){
	Invalid(tr("The parameter \"") + tr("Column index or name") + tr("\" is not specified"));
    return;
};
var Width = GetInputConstructorValue("Width", loader);
if(Width["original"].length == 0){
	Invalid(tr("The parameter \"") + tr("Width") + tr("\" is not specified"));
    return;
};
try{
    var code = loader.GetAdditionalData() + _.template($("#Excel_SetColumnWidth_code").html())({
        "FilePath": FilePath["updated"],
        "SheetIndexOrName": SheetIndexOrName["updated"],
        "ColumnIndexOrName": ColumnIndexOrName["updated"],
        "Width": Width["updated"],
		"Sync": BrowserAutomationStudio_UsesWaitCode()
    });
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e){}
