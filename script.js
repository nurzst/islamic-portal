document.addEventListener("DOMContentLoaded", async function () {
    const suraMenu = document.getElementById("sura-menu");
    const suraTitle = document.getElementById("sura-title");
    const suraText = document.getElementById("sura-text");

    // 📌 Функция загрузки списка сур
    async function loadSuras() {
        try {
            let response = await fetch("https://api.alquran.cloud/v1/surah");
            let data = await response.json();

            data.data.forEach(sura => {
                let li = document.createElement("li");
                li.textContent = `${sura.number}. ${sura.englishName} (${sura.name})`;
                li.addEventListener("click", () => loadSura(sura.number));
                suraMenu.appendChild(li);
            });
        } catch (error) {
            console.error("Ошибка загрузки сур:", error);
        }
    }

    // 📌 Функция загрузки конкретной суры
    async function loadSura(suraNumber) {
        try {
            let response = await fetch(`https://api.alquran.cloud/v1/surah/${suraNumber}`);
            let data = await response.json();
            suraTitle.textContent = `${data.data.englishName} (${data.data.name})`;
            suraText.innerHTML = data.data.ayahs.map(ayah => `<p>${ayah.numberInSurah}. ${ayah.text}</p>`).join("");
        } catch (error) {
            console.error("Ошибка загрузки аятов:", error);
        }
    }

    // 📌 Загружаем список сур при загрузке страницы
    loadSuras();
});
