function togglePassport() {
  const passport = document.getElementById("track-passport");
  passport.classList.toggle("hidden");
  passport.innerHTML = '<div class="passport">🎵 Track Info<br/>Artist: ...<br/>Album: ...<br/>Genre: ...</div>';
}
