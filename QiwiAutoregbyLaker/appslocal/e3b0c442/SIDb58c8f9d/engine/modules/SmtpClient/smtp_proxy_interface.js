<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({id:"ProxyText", description:tr("Proxy String"), default_selector: "string", disable_int:true}) %>
    <%= _.template($('#input_constructor').html())({id:"ProxyType", description:tr("Proxy Type"), default_selector: "string", disable_int:true, value_string: "http", variants: ["http","socks5","auto"]}) %>
    <%= _.template($('#input_constructor').html())({id:"ProxyLogin", description:tr("Proxy Login. Can be blank."), default_selector: "string", disable_int:true}) %>
    <%= _.template($('#input_constructor').html())({id:"ProxyPassword", description:tr("Proxy password. Can be blank."), default_selector: "string", disable_int:true}) %></div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>