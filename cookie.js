document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("cookiesChoice")) return;

  const banner = document.createElement("div");

  banner.style.cssText = `
    position:fixed;
    bottom:20px;
    left:50%;
    transform:translateX(-50%);
    width:90%;
    max-width:420px;
    background:rgba(255,255,255,0.18);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
    border-radius:16px;
    padding:18px;
    box-shadow:0 10px 30px rgba(0,0,0,0.35);
    border:1px solid rgba(255,255,255,0.35);
    z-index:999999;
    font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
    color:#fff;
    text-align:center;
  `;

  banner.innerHTML = `
    <p style="
      font-size:0.9rem;
      line-height:1.5;
      margin-bottom:14px;
    ">
      We use Google Analytics to measure traffic.
      Cookies are only activated with your consent.
    </p>

    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">

      <button id="acceptCookies" style="
        padding:7px 14px;
        border:none;
        border-radius:6px;
        background:rgba(0,0,0,0.7);
        color:#fff;
        cursor:pointer;
      ">Accept</button>

      <button id="refuseCookies" style="
        padding:7px 14px;
        border:none;
        border-radius:6px;
        background:rgba(255,255,255,0.3);
        color:#fff;
        cursor:pointer;
      ">Refuse</button>

      <button id="moreCookies" style="
        padding:7px 10px;
        border:none;
        border-radius:6px;
        background:transparent;
        color:#fff;
        text-decoration:underline;
        cursor:pointer;
      ">Details</button>

    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById("acceptCookies").onclick = function () {
    localStorage.setItem("cookiesChoice", "accepted");
    banner.remove();
    loadAnalytics();
  };

  document.getElementById("refuseCookies").onclick = function () {
    localStorage.setItem("cookiesChoice", "refused");
    banner.remove();
  };

  document.getElementById("moreCookies").onclick = function () {
    showDetailsPopup();
  };

  if (localStorage.getItem("cookiesChoice") === "accepted") {
    loadAnalytics();
  }

  function loadAnalytics() {

    if (window.gtagLoaded) return;
    window.gtagLoaded = true;

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-Y46Z31JMRG";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-Y46Z31JMRG');
  }

  function showDetailsPopup() {

    const overlay = document.createElement("div");

    overlay.style.cssText = `
      position:fixed;
      top:0;
      left:0;
      width:100vw;
      height:100vh;
      background:rgba(0,0,0,0.5);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999999;
    `;

    const box = document.createElement("div");

    box.style.cssText = `
      background:rgba(255,255,255,0.15);
      backdrop-filter:blur(12px);
      -webkit-backdrop-filter:blur(12px);
      padding:22px;
      border-radius:16px;
      width:90%;
      max-width:340px;
      color:#fff;
      text-align:center;
      box-shadow:0 10px 30px rgba(0,0,0,0.4);
      border:1px solid rgba(255,255,255,0.3);
      font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
    `;

    box.innerHTML = `
      <h3 style="margin-bottom:10px;">
        Cookie Details
      </h3>

      <p style="font-size:0.9rem; line-height:1.5;">
        This site uses Google Analytics for anonymous traffic measurement only.
        No personal data is sold or shared.
      </p>

      <button id="closeDetails" style="
        margin-top:14px;
        padding:8px 14px;
        border:none;
        border-radius:6px;
        background:rgba(0,0,0,0.6);
        color:#fff;
        cursor:pointer;
      ">Close</button>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    document.getElementById("closeDetails").onclick = function () {
      overlay.remove();
    };
  }

});
