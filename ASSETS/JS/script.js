var mymap = L.map('mapid').setView([43.18289245551174, 3.0033091048731557], 14);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);






var viaDomitia = L.icon({
    iconUrl: 'ASSETS/IMAGES/MARQUEURS/via.png',

    iconSize:     [70, 65], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([43.18377726999478, 3.0041662787910663], {icon: viaDomitia}).addTo(mymap)
    .bindPopup('<h1>Via Domitia</h1> <br> <img src="ASSETS/IMAGES/LIEUX/via.jpg"> <br> La voie Domitienne (Via Domitia) est une voie romaine construite à partir de 118 av. J.-C. pour relier l’Italie à la péninsule Ibérique en traversant la Gaule narbonnaise.')
    .openPopup();







var cultura = L.icon({
    iconUrl: 'ASSETS/IMAGES/MARQUEURS/cultura.png',

    iconSize:     [31, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

    
L.marker([43.17980518002467, 3.031314084323742], {icon: cultura}).addTo(mymap)
    .bindPopup('<h1>Cultura</h1> <br> <img src="ASSETS/IMAGES/LIEUX/cultura.jpeg"> <br> Cultura est une enseigne de distribution française appartenant à la société Socultur, filiale du holding Sodival. Elle est la troisième enseigne spécialisée dans la commercialisation de biens et loisirs culturels et créatifs en France.')
    .openPopup();    







var mcDonald = L.icon({
    iconUrl: 'ASSETS/IMAGES/MARQUEURS/macdo.png',

    iconSize:     [50, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([43.18254137860739, 3.028184434260234], {icon: mcDonald}).addTo(mymap)
    .bindPopup('<h1>McDonald\'s</h1> <br> <img src="ASSETS/IMAGES/LIEUX/macdo.jpeg"> <br> McDonald\'s est une chaîne de restauration rapide américaine.')
    .openPopup();    









var simplyTattoo = L.icon({
    iconUrl: 'ASSETS/IMAGES/MARQUEURS/simply.svg',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([43.18240742784494, 3.0025548113129776], {icon: simplyTattoo}).addTo(mymap)
    .bindPopup('<h1>Simply Tattoo</h1> <br> <img src="ASSETS/IMAGES/LIEUX/simply.jpeg"> <br> Chez Simply Tattoo, vous pourrez trouver un large choix de piercing et rencontrer des tatoueurs et un perceur exceptionnel.')
    .openPopup();    









var yvesRocher = L.icon({
    iconUrl: 'ASSETS/IMAGES/MARQUEURS/yvesrocher.png',

    iconSize:     [38, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([43.160765321492924, 2.981185582477126], {icon: yvesRocher}).addTo(mymap)
    .bindPopup('<h1>Yves Rocher</h1> <br> <img src="ASSETS/IMAGES/LIEUX/yvesrocher.jpg"> <br>  Yves Rocher France est une entreprise de cosmétique fondée par Yves Rocher à La Gacilly et dont le siège social est situé à Rennes..')
    .openPopup();    





fetch('http://api.openweathermap.org/data/2.5/weather?q=Narbonne&lang=fr&units=metric&appid=12278076c2110f13b6adc2aca47dee23').then((response) =>
	response.json().then((data) => {
		console.log(data);
		document.querySelector('#city').innerHTML = data.name;
		document.querySelector('#temp').innerHTML = Math.trunc(data.main.temp) + '°';
		document.querySelector('#description').innerHTML = data.weather[0].description;
		document.querySelector('#humidity').innerHTML = data.main.humidity + '% d\'humidité';
		document.querySelector('#wind').innerHTML = 'Vitesse du vent estimée à ' + data.wind.speed + 'km/h';		
	})
);