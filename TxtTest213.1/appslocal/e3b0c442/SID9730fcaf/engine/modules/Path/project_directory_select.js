var Save = this.$el.find("#Save").val().toUpperCase();
if(Save.length == 0){
	Invalid(tr("The parameter \"") + tr("Variable") + tr("\" is not specified"));
    return;
};
try{
	var code = loader.GetAdditionalData() + _.template($("#project_directory_code").html())({
		variable: "VAR_" + Save
	});
	code = Normalize(code, 0);
	BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e){}