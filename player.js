
document.addEventListener("DOMContentLoaded", () => {
  const track = {
    title: "Human Fly",
    artist: "The Cramps",
    album: "Songs the Lord Taught Us",
    year: "1980",
    tags: ["psychobilly", "garage", "rockabilly"],
    cover: "https://lastfm.freetls.fastly.net/i/u/300x300/35b8c8c127be4d9b9c3df0141a18e3e7.jpg"
  };

  document.getElementById("track-title").innerText = track.title;
  document.getElementById("track-artist").innerText = track.artist;

  const infoBtn = document.getElementById("info-btn");
  const modal = document.getElementById("passport");

  infoBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    document.getElementById("cover").src = track.cover;
    document.getElementById("title").innerText = track.title;
    document.getElementById("artist").innerText = track.artist;
    document.getElementById("album-meta").innerText = `${track.album} • ${track.year}`;
    document.getElementById("tags").innerHTML = track.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");
  });
});
