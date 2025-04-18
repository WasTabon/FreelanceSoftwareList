var FilePath = GetInputConstructorValueFilename("FilePath", loader);
if(FilePath["original"].length == 0){
    Invalid(tr("File path") + " " + tr("is empty"));
    return;
};
var SheetIndexOrName = GetInputConstructorValue("SheetIndexOrName", loader);
if(SheetIndexOrName["original"].length == 0){
    Invalid(tr("Sheet index or name") + " " + tr("is empty"));
    return;
};
var FromCell = GetInputConstructorValue("FromCell", loader);
if(FromCell["original"].length == 0){
	Invalid(tr("From cell") + " " + tr("is empty"));
    return;
};
var ToCell = GetInputConstructorValue("ToCell", loader);
if(ToCell["original"].length == 0){
	Invalid(tr("To cell") + " " + tr("is empty"));
    return;
};
var Styles = GetInputConstructorValue("Styles", loader);
if(Styles["original"].length == 0){
	Invalid(tr("Styles") + " " + tr("is empty"));
    return;
};
try{
    var code = loader.GetAdditionalData() + _.template($("#Excel_SetStylesToCellsRange_code").html())({
        "FilePath": FilePath["updated"],
        "SheetIndexOrName": SheetIndexOrName["updated"],
        "FromCell": FromCell["updated"],
        "ToCell": ToCell["updated"],
        "Styles": Styles["updated"],
		"Sync": BrowserAutomationStudio_UsesWaitCode()
    });
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e){}