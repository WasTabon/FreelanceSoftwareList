var Save = this.$el.find("#Save").val().toUpperCase();
var StringValue = GetInputConstructorValue("String", loader);
var Year = GetInputConstructorValue("Year", loader);
var Month = GetInputConstructorValue("Month", loader);
var Day = GetInputConstructorValue("Day", loader);
var Hour = GetInputConstructorValue("Hour", loader);
var Minute = GetInputConstructorValue("Minute", loader);
var Second = GetInputConstructorValue("Second", loader);
var Millisecond = GetInputConstructorValue("Millisecond", loader);


if(Save.length == 0)
{
  Invalid("Variable is empty");
  return;
}

if(StringValue["original"].length == 0)
{
  Invalid("String is empty");
  return;
}

if(Month["original"].length == 0)
{
  Invalid("Month is empty");
  return;
}

if(Day["original"].length == 0)
{
  Invalid("Day is empty");
  return;
}

if(Hour["original"].length == 0)
{
  Invalid("Hour is empty");
  return;
}

if(Minute["original"].length == 0)
{
  Invalid("Minute is empty");
  return;
}

if(Second["original"].length == 0)
{
  Invalid("Second is empty");
  return;
}

if(Millisecond["original"].length == 0)
{
  Invalid("Millisecond is empty");
  return;
}


if(Year["original"].length == 0)
{
  Invalid("Year is empty");
  return;
}

 try{
  var code = loader.GetAdditionalData() + _.template($("#changedate_code").html())(
  	{
  		variable:"VAR_" + Save,
  		value: StringValue["updated"],
  		month: Month["updated"],
  		day: Day["updated"],
  		hour: Hour["updated"],
  		minute: Minute["updated"],
  		second: Second["updated"],
  		millisecond: Millisecond["updated"],
  		year: Year["updated"]
  	
  	})
  code = Normalize(code,0)
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e)
{}