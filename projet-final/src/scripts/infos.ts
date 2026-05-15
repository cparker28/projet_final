import { statues } from "../data/oeuvres";

const grid = document.querySelector(".grid");

if (grid) {
  grid.innerHTML = statues
    .map(
      (s) => `
      <div class="card">
        <img src="${s.image}" alt="${s.name}" />

        <div class="overlay">
          <div class="card-header">
            <h3>${s.name}</h3>
            <p>${s.artist}</p>
            <p>${s.year}</p>
          </div>
          <div class="card-text">
            <p>${s.description ?? ""}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}