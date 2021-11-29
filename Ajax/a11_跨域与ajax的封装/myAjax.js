
function myAjax(obj){
	if(obj.dataType=="jsonp"){
		myAjax_Across(obj);
	}else{
		myAjax_Normal(obj);
	}
}

// ajax
function myAjax_Normal(obj) {
	var defaults = {
		type: "get",
		url: "#",
		dataType: "json",
		data: {},
		async: true,
		success: function(result) {
			console.log(result);
		}
	};
	// obj属性覆盖defaults属性
	for (var key in obj) {
		defaults[key] = obj[key];
	}
	// 4个步骤
	var xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = ActiveXObject("Microsoft.XMLHTTP");
	}
	var params = "";
	for (var attr in defaults.data) {
		params += attr + "=" + defaults.data[attr] + "&";
	}
	if (params) {
		params = params.substring(0, params.length - 1); //截取字符串,删除最后一个&
	}
	if (defaults.type == "get") {
		defaults.url += "?" + params;
	}
	xhr.open(defaults.type, defaults.url, defaults.async);
	if (defaults.type == "get") {
		xhr.send(null);
	} else if (defaults.type == "post") {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //设置请求体信息,仅适用于post
		xhr.send(params);
	}
	if (defaults.async) {
		// 异步处理
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var result = null;
					if (defaults.dataType == "json") {
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if (defaults.dataType == "xml") {
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}
					defaults.success(result);
				}
			}
		}
	} else {
		// 同步处理
		var result = null;
		if (defaults.type == "json") {
			result = xhr.responseText;
			result = JSON.parse(result);
		} else if (defaults.type == "xml") {
			result = xhr.responseXML;
		} else {
			result = xhr.responseText;
		}
		defaults.success(result);
	}
}

// 跨域  注意：在url中如果没有语言格式，则删掉"code=utf-8"+"&"+ 
function myAjax_Across(obj) {
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
