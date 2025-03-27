
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".track-passport");
  if (!container) return;

  try {
    const res = await fetch("live-track.json");
    const track = await res.json();

    const tagHTML = track.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");

    container.innerHTML = `
      <div class="passport-box">
        <img class="passport-cover" src="${track.cover}" alt="cover" />
        <div class="passport-info">
          <h2 class="passport-title">${track.title}</h2>
          <h3 class="passport-artist">${track.artist}</h3>
          <p class="passport-meta">${track.album} • ${track.year}</p>
          <div class="passport-tags">${tagHTML}</div>
        </div>
      </div>
    `;
  } catch (err) {
    console.error("Passport Weblet Error:", err);
  }
});
