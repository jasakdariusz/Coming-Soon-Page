document.addEventListener("DOMContentLoaded", function(){

	let countDownDate = new Date("May 31, 2018 00:00:00").getTime();

	let countDownFunction = setInterval(function() {

		let now = new Date().getTime();

		let distance = countDownDate - now;

		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("countdown").innerHTML = days + " DAYS " + hours + " HOURS " + minutes + " MINUTES " + seconds + " SECONDS";

		if(distance < 0) {
			clearInterval(countDownFunction);
			document.getElementById("countdown").innerHTML = "EXPIRED";
		}

	},1000);

});