document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "ea27dc3c97e1479985f9239fb088d5c5"; // Ganti dengan kunci API Anda dari OpenWeatherMap

    const getWeatherButton = document.getElementById("getWeather");
    const cityInput = document.getElementById("city");
    const weatherResult = document.getElementById("weatherResult");

    getWeatherButton.addEventListener("click", function () {
        const city = cityInput.value;
        if (!city) {
            alert("Silakan masukkan nama kota terlebih dahulu.");
            return;
        }

        // Membuat URL untuk permintaan cuaca saat ini
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // Melakukan permintaan AJAX menggunakan fetch API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Gagal mengambil data cuaca.");
                }
                return response.json();
            })
            .then(data => {
                // Menampilkan data cuaca pada halaman
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherResult.innerHTML = `Cuaca saat ini di ${city}: ${description}, Suhu: ${temperature}°C`;
            })
            .catch(error => {
                alert(error.message);
            });
    });
});
