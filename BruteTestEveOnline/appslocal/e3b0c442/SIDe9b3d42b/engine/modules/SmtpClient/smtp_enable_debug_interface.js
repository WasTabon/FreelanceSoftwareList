<div class="container-fluid">
   <%= _.template($('#input_constructor').html())({id:"EnableDebug", description:tr("Enable debug"), default_selector: "string", disable_int:true, value_string: "enable", variants: ["enable","disable"]}) %>

</div>
<div class="tooltipinternal tr">Enable debug before sending email.</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
