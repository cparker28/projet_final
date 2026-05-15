import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { statues } from "../data/oeuvres";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
console.log("Mapbox Access Token:", mapboxgl.accessToken);

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [2.3522, 48.8566],
  zoom: 11.5,
});

statues.forEach((statue) => {
  new mapboxgl.Marker({
  color: "#8C8ED7"
})
    .setLngLat(statue.coordinates as [number, number])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
            <div class="popup-content">
                <h3>${statue.name}</h3>

                <p class="artist">${statue.artist}, ${statue.year}</p>
                <img src="${statue.image}" alt="${statue.name}" />

            </div>
`       )
    )
    .addTo(map);
});

map.on("load", () => {
  console.log("map loaded");
});