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
var FromRow = GetInputConstructorValue("FromRow", loader);
var ToRow = GetInputConstructorValue("ToRow", loader);
try{
    var code = loader.GetAdditionalData() + _.template($("#Excel_DeleteRows_code").html())({
        "FilePath": FilePath["updated"],
        "SheetIndexOrName": SheetIndexOrName["updated"],
        "FromRow": FromRow["updated"],
        "ToRow": ToRow["updated"],
		"Sync": BrowserAutomationStudio_UsesWaitCode()
    });
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e){}