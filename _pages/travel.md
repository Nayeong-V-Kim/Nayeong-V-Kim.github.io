---
permalink: /travel/
title: "Travel"
author_profile: true
---

<div id="globeViz" style="height: 550px; width: 100%; background: #000; border-radius: 8px; overflow: hidden;"></div>

<script src="https://unpkg.com/globe.gl@2"></script>
<script>
window.addEventListener("load", function () {
  var points = [
    { name: "Fukuoka, Japan", lat: 33.5904, lng: 130.4017 },
    { name: "Osaka, Japan", lat: 34.6937, lng: 135.5023 },
    { name: "Sapporo, Japan", lat: 43.0618, lng: 141.3545 },

    { name: "Suzhou, China", lat: 31.2989, lng: 120.5853 },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },

    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Johor Bahru, Malaysia", lat: 1.4927, lng: 103.7414 },
    { name: "Kota Kinabalu, Malaysia", lat: 5.9804, lng: 116.0735 },

    { name: "Barcelona, Spain", lat: 41.3851, lng: 2.1734 },
    { name: "Frankfurt, Germany", lat: 50.1109, lng: 8.6821 },
    { name: "Stuttgart, Germany", lat: 48.7758, lng: 9.1829 },
    { name: "Tübingen, Germany", lat: 48.5216, lng: 9.0576 },
    { name: "Milan, Italy", lat: 45.4642, lng: 9.1900 },
    { name: "Vienna, Austria", lat: 48.2082, lng: 16.3738 },
    { name: "Zurich, Switzerland", lat: 47.3769, lng: 8.5417 },
    { name: "Interlaken, Switzerland", lat: 46.6863, lng: 7.8632 },
    { name: "Colmar, France", lat: 48.0794, lng: 7.3585 },
    { name: "Strasbourg, France", lat: 48.5734, lng: 7.7521 },

    { name: "San Francisco, USA", lat: 37.7749, lng: -122.4194 },
    { name: "Berkeley, USA", lat: 37.8715, lng: -122.2730 },
    { name: "Oakland, USA", lat: 37.8044, lng: -122.2712 },
    { name: "San Jose, USA", lat: 37.3382, lng: -121.8863 },
    { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437 },
    { name: "Las Vegas, USA", lat: 36.1699, lng: -115.1398 },
    { name: "New York, USA", lat: 40.7128, lng: -74.0060 },
    { name: "Baltimore, USA", lat: 39.2904, lng: -76.6122 },
    { name: "New Orleans, USA", lat: 29.9511, lng: -90.0715 },
    { name: "Washington DC, USA", lat: 38.9072, lng: -77.0369 },
    { name: "Long Beach, USA", lat: 33.7701, lng: -118.1937 },
    { name: "Atlanta, USA", lat: 33.7490, lng: -84.3880 },
    { name: "Honolulu, Hawaii, USA", lat: 21.3069, lng: -157.8583 }
  ];

  var el = document.getElementById('globeViz');

  var world = Globe()
    (el)
    .width(el.clientWidth)
    .height(el.clientHeight)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
    .pointsData(points)
    .pointLat('lat')
    .pointLng('lng')
    .pointLabel('name')
    .pointColor(function () { return '#e63946'; })
    .pointAltitude(0.01)
    .pointRadius(0.35);

  world.pointOfView({ lat: 20, lng: 60, altitude: 2.2 });

  world.controls().autoRotate = true;
  world.controls().autoRotateSpeed = 0.5;

  window.addEventListener('resize', function () {
    world.width(el.clientWidth).height(el.clientHeight);
  });
});
</script>

### USA
* San Francisco
* Berkeley
* Oakland
* San Jose
* Los Angeles
* Las Vegas
* New York
* Baltimore
* New Orleans
* Washington DC
* Long Beach
* Atlanta
* Honolulu, Hawaii

### Europe
* Barcelona, Spain
* Frankfurt, Germany
* Stuttgart, Germany
* Tübingen, Germany
* Milan, Italy
* Vienna, Austria
* Zurich, Switzerland
* Interlaken, Switzerland
* Colmar, France
* Strasbourg, France

### Japan
* Fukuoka
* Osaka
* Sapporo

### China
* Suzhou
* Hong Kong

### Singapore & Malaysia
* Singapore
* Johor Bahru, Malaysia
* Kota Kinabalu, Malaysia
