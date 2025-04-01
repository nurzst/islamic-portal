// API для времени намазов
const apiUrl = "https://api.aladhan.com/v1/timingsByCity?city=Astana&country=Kazakhstan&method=2";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("fajr").textContent = data.data.timings.Fajr;
        document.getElementById("sunrise").textContent = data.data.timings.Sunrise;
        document.getElementById("dhuhr").textContent = data.data.timings.Dhuhr;
        document.getElementById("asr").textContent = data.data.timings.Asr;
        document.getElementById("maghrib").textContent = data.data.timings.Maghrib;
        document.getElementById("isha").textContent = data.data.timings.Isha;
    });
