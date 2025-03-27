
document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("track-title");
  const artistEl = document.getElementById("track-artist");
  const modal = document.getElementById("passport");

  fetch("https://public.radio.co/stations/s213997/status")
    .then(res => res.json())
    .then(data => {
      const track = data.current_track;
      if (!track) return;

      titleEl.innerText = track.title || "Unknown Title";
      artistEl.innerText = track.artist || "Unknown Artist";

      document.getElementById("cover").src = track.artwork_url_large || "";
      document.getElementById("title").innerText = track.title;
      document.getElementById("artist").innerText = track.artist;
      document.getElementById("album-meta").innerText = "";
      document.getElementById("tags").innerHTML = "";
    })
    .catch(err => {
      console.error("Failed to load track info:", err);
    });

  document.getElementById("info-btn").addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
});
