function myAjax(obj) {
	var defaults = {
		type: "get",
		url: "#",
		data: {},
		dataType: "jsonp", //jsonp表示跨域
		success: function(data) {
			console.log(data);
		},
		jsonp: "callback",
		jsonpCallback: "test" //函数名称
	};
	// obj属性覆盖defaults属性
	for (var key in obj) {
		defaults[key] = obj[key];
	}
	var params = "";

	for (var attr in defaults.data) {
		params += attr + "=" + defaults.data[attr] + "&"
	}
	if (params) {
		params = params.substring(0, params.length - 1);
		defaults.url += "?" +"code=utf-8"+"&"+ params;
	}
	defaults.url += "&" + defaults.jsonp + "=" + defaults.jsonpCallback;
	// 动态创建script
	console.log(defaults.url);
	var script = document.createElement("script");
	script.src = defaults.url;
	window[defaults.jsonpCallback] = function(data) {
		defaults.success(data);
	}
	var head = document.querySelector("head");
	head.appendChild(script);
}
