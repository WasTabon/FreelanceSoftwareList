<div class="container-fluid httpclientxpath">
	  <%= _.template($('#input_constructor').html())({id:"Text", description:tr("Text To Apply"), default_selector: "string", disable_int:true, help: 
{
	description: tr("Text, target of xpath query. You can put any xml or html here. Not valid or damaged xml is also acceptable.")
}}) %>
      <%= _.template($('#input_constructor').html())({id:"Value", description:tr("Xpath Query"), default_selector: "string", disable_int:true,variants: ["//title<br/><span style='color:gray;font-size:small'>" + tr("Get page title") + "</span>","//a<br/><span style='color:gray;font-size:small'>" + tr("Get all links") + "</span>","//img<br/><span style='color:gray;font-size:small'>" + tr("Find image") + "</span>","//img/@src<br/><span style='color:gray;font-size:small'>" + tr("Find image source") + "</span>","//*[@id='ID']<br/><span style='color:gray;font-size:small'>" + tr("Find element by id") + "</span>","//*[contains(@class,'CLASS')]<br/><span style='color:gray;font-size:small'>" + tr("Find element by class") + "</span>","//*[contains(@class,'CLASS') and @id='ID']<br/><span style='color:gray;font-size:small'>" + tr("Find element by class and id") + "</span>","//div[@id='ID_PARENT']/div[@id='ID_CHILD']<br/><span style='color:gray;font-size:small'>" + tr("Find element which contains parent") + "</span>"], help: 
{
  description: tr("Xpath query"), examples:
  [
    {
      code:"//title",description:tr("Get page title.")
    },
    
    {
      code:"//a",description:tr("Get all links.")
    },
    
    {
      code:"//img",description:tr("Find image.")
    },
    
    {
      code:"//img/@src",description:tr("Find image source(image url).")
    }
    ,
    
    {
      code:"//*[@id='ID']",description:tr("Find element by id.")
    },
    
    {
      code:"//*[contains(@class,'CLASS')]",description:tr("Find element by class. Element can have several classes, so need to use contains function.")
    }
    ,
    
    {
      code:"//*[contains(@class,'CLASS') and @id='ID']",description:tr("Find element by class and id.")
    },
    
    {
      code:"//div[@id='ID_PARENT']/div[@id='ID_CHILD']",description:tr("Find element which contains parent.")
    }
  ]
}}) %>
      <%= _.template($('#variable_constructor').html())({id:"Save", description:tr("Variable To Save"), default_variable: "XPATH_COUNT", help: 
{
  description: tr("This variable will be set to number of elements matching query."), examples:
  [
    {
      code:"0",description:tr("There are no elements which matches query.")
    },
    {
      code:"3",description:tr("There are 3 elements which matches query.")
    }
  ]
}}) %>
</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Execute xpath query and get number of element which matches.</div>
      <div class="tr tooltip-paragraph-fold">Html to apply query is obtained from 'Text To Apply' setting.</div>
  <div class="tr tooltip-paragraph-last-fold">If you want to apply xpath query to last http response, you need to use 'Http Client' module.</div>
    </div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>