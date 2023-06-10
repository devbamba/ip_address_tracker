// let url = `https://geo.ipify.org/api/v2/country?apiKey=at_dPaswT3P0s8TyrwkhQRjZrBAvnDSH&ipAddress=8.8.8.8`

let adress = document.querySelector("#adress");
let svgOne = document.querySelector("#svg1"); 

svgOne.addEventListener('click', function(){
        let url = `https://geo.ipify.org/api/v2/country?apiKey=at_dPaswT3P0s8TyrwkhQRjZrBAvnDSH&ipAddress=${adress.value}`
        fetch(url).then((response) =>
           response.json().then((data) => {
            console.log(data)

            document.querySelector("#ip-adress").innerHTML = data.ip;
            document.querySelector("#location").innerHTML = data.location.country + ', ' + data.location.region;
            document.querySelector("#timezone").innerHTML = data.location.timezone;
            document.querySelector("#isp").innerHTML = data.isp;

          })

        );
})

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);


// document.querySelector("#adress").addEventListener('input', function(){
//     if(this.value.length == 15){
//         let url = `https://geo.ipify.org/api/v2/country?apiKey=at_dPaswT3P0s8TyrwkhQRjZrBAvnDSH&ipAddress=${this.value}`
//         fetch(url).then((response) =>
//            response.json().then((data) => {
//             console.log(data)

//             document.querySelector("#ip-adress").innerHTML = data.ip;
//             document.querySelector("#location").innerHTML = data.location.country + ', ' + data.location.region;
//             document.querySelector("#timezone").innerHTML = data.location.timezone;
//             document.querySelector("#isp").innerHTML = data.isp;

//           })

//         );
//     }
// })
