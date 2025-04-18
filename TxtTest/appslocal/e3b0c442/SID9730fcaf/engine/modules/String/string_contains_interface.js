<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"string", description: tr("String"), default_selector: "string", disable_int:true, value_string: "", help: {description: tr("The string in which to check the contains of the substring."),examples:[{code:tr("Just sample text")},{code:"Test text"},{code:"string"}]} }) %>
<%= _.template($('#input_constructor').html())({id:"substring", description: tr("Substring"), default_selector: "string", value_string: "", help: {description: tr("Substring, the contains of which is necessary to check."),examples:[{code:tr("sample")},{code:"text"},{code:"str"}]} }) %>
<%= _.template($('#block_start').html())({id:"Additional", name: tr("Additional settings"), description: ""}) %>
<%= _.template($('#input_constructor').html())({id:"from", description:tr("From index"), default_selector: "int", disable_string:true, value_number: "", min_number:0, max_number:999999, help: {description: tr("Optional parameter.") + " " + tr("The character index at which to start the search."),examples:[{code:1, description:tr("From the second character")},{code:0, description:tr("From the first character")},{code:tr("Empty string"), description:tr("From the beginning of the string")}]} }) %>
<%= _.template($('#block_end').html())() %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:tr("Variable to save the result"), default_variable: "STRING_CONTAINS", help: {description: tr("This variable will be true or false depending on whether the string contains a substring."), examples:[{code:"true",description:tr("The string contains a substring.")},{code:"false",description:tr("The string does not contain a substring.")}]} }) %>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Check if a string contains a substring.</div>
	<div class="tr tooltip-paragraph-fold">This action will return true or false depending on whether the string contains a substring. This result may be used with "If" action.</div>
	<div class="tr tooltip-paragraph-last-fold">For example, if the string is <code>"Test text"</code> and the substring <code>"text"</code>, then the action will return true, and if the string is <code>"Just example string"</code> and substring <code>"test"</code>, then the action will return false.</div>
	<div class="tr tooltip-paragraph-fold">By default, the search is performed from the beginning of the string, but this can be changed by specifying the index from which to start the search in the "From index" parameter located in the additional settings.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
