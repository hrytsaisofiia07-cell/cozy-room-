
document.addEventListener("DOMContentLoaded", () => {

  const windowEl = document.getElementById("window");
  const doorEl = document.getElementById("door");
const hint = document.getElementById("hint");
const windowEl = document.getElementById("window");

/* показать подсказку после загрузки */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    hint.classList.remove("hidden");
  }, 1000);
});

/* при клике на окно — скрыть подсказку */
windowEl.addEventListener("click", () => {
  hint.style.display = "none";
});
  /* ---------------------------
     WINDOW CLICK → DOOR APPEARS
  ---------------------------- */
  windowEl.addEventListener("click", () => {
    windowEl.style.display = "none";
    doorEl.classList.remove("hidden");
  });

  /* ---------------------------
     DOOR CLICK → ACTION
  ---------------------------- */
  doorEl.addEventListener("click", () => {
    alert("You entered a new room 🚪✨");

    // Example future upgrade:
    // window.location.href = "room2.html";
  });

});
</script>
    // future:
   <script>
