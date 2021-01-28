function $(selector){
	var result = document.querySelectorAll(selector);
	if(result.length === 1){
		return result[0];
	}	
	else{
		return result;
	}
}
function getRandomColor(){
	var arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	var result = "#";
	for(var i = 0; i < 6;i++){
		var index = Math.round(Math.random() * 15)
		result = result + arr[index]
	}
	return result
}
function parseDate(date){
	var date = date || new Date();

	var result = "";
	result = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes():date.getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" +date.getSeconds():date.getSeconds());
	return result;
}

function getDateRange(target){
	var now = new Date();
	var n = parseInt((Math.abs(now.getTime() - target.getTime())) / 1000);

	var hours = Math.floor(n / 3600) < 10 ? "0" + Math.floor(n / 3600) : Math.floor(n / 3600)
	var minutes = Math.floor(n % 3600 / 60) < 10 ? "0" + Math.floor(n % 3600 / 60) : Math.floor(n % 3600 / 60)
	var seconds = Math.floor(n % 60) < 10 ? "0" + Math.floor(n % 60): Math.floor(n % 60);
	return hours + ":" + minutes + ":" + seconds
}