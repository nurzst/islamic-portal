document.addEventListener("DOMContentLoaded", function () {
    const city = "Astana";
    const country = "Kazakhstan";
    const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                const timings = data.data.timings;
                const timesDiv = document.getElementById("prayer-times");

                timesDiv.innerHTML = `
                    <div class="prayer-card">Фаджр <br> ${timings.Fajr}</div>
                    <div class="prayer-card">Зухр <br> ${timings.Dhuhr}</div>
                    <div class="prayer-card">Аср <br> ${timings.Asr}</div>
                    <div class="prayer-card">Магриб <br> ${timings.Maghrib}</div>
                    <div class="prayer-card">Иша <br> ${timings.Isha}</div>
                `;
            } else {
                document.getElementById("prayer-times").innerText = "Ошибка загрузки данных.";
            }
        })
        .catch(error => {
            document.getElementById("prayer-times").innerText = "Ошибка соединения.";
            console.error("Ошибка:", error);
        });
});
