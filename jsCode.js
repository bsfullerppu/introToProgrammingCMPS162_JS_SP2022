function alertItalia() {
  alert("Hey. You. Yeah, you! We're going to Italy.");
}
alertItalia();
function countdown() {
  alertCount = 3;
  do {
    alert(alertCount);
    alertCount--;
  } while (alertCount > 0);
  if (alertCount === 0) {
    alert("Andiamo in Italia!");
  }
}
countdown();
