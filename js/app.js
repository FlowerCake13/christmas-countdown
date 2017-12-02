//console.log('aiohifaihodsfa')
window.onload = function(){
	var time = document.getElementById('time1');
	var months = document.getElementById('months');
	var timer = setInterval(updateTime, 1000);

	function updateTime() {
		var date = new Date();
		var hr = date.getHours();
		var min = date.getMinutes();
		var month = date.getMonth();
		var day = date.getDate();

		if (min < 10) {
			time.innerHTML = hr + ":" + '0' + min; 
		}else{
			time.innerHTML = hr + ":" + min;
		}
		//console.log(month)
		if (month == 11) {
			if (day < 25) {
				var daysTil = day - 25;
				months.innerHTML = daysTil + " day(s)til Christmas";
			}else if (day == 25) {
				months.innerHTML = "Happy Christmas!"
			}else if(day > 25){
				months.innerHTML = "A year-ish until next Christmas!"
			}
		}else{
				var monthsUntil = 11 - month;
				//console.log(monthsUntil)
				months.innerHTML =  monthsUntil + " month(s)til Christmas"; 
			}
	}
}
