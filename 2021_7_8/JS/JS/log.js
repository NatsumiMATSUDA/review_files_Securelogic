function logfunc(url) {
	var userAgent = window.navigator.userAgent.toLowerCase();
	if(userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.open("GET", url);
		httpRequest.onload = function (e) {
			if (httpRequest.readyState === 4) {
				if (httpRequest.status === 200) {
					console.log(httpRequest.responseText);
				} else {
					console.error(httpRequest.status);
					console.error(httpRequest.statusText);
				}
			}
		};
		httpRequest.onerror = function (e) {
			console.error(httpRequest.statusText);
		};
		httpRequest.send();
	} else {
		fetch(url);
	}
}