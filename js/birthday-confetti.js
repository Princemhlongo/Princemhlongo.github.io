// Birthday confetti — fires only on 11 January (launch anniversary)
(function () {
  var today = new Date();
  var isBirthday = today.getMonth() === 0 && today.getDate() === 11;
  if (!isBirthday) return;

  window.addEventListener("load", function () {
    setTimeout(launch, 900);
  });

  function launch() {
    var duration = 4000;
    var end = Date.now() + duration;
    var colors = ["#0EA5E9", "#38BDF8", "#F59E0B", "#FBBF24", "#ffffff"];

    (function frame() {
      confetti({ particleCount: 3, angle: 60,  spread: 58, origin: { x: 0 }, colors: colors });
      confetti({ particleCount: 3, angle: 120, spread: 58, origin: { x: 1 }, colors: colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }
})();
