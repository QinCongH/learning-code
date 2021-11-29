function myAjax(obj) {
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
