// v1.1.0 — Auto-detecta distintos formatos de slider usados en WHL/Nexus

(function () {
  console.log('%c[BANNER LOADER] Script cargado', 'color: #00c3ff; font-weight: bold;');

  document.addEventListener('DOMContentLoaded', function () {
    // Detectar idioma
    var lang = (window.dataLang || document.documentElement.lang || 'es')
      .toLowerCase()
      .substring(0, 2);

    console.log('[BANNER LOADER] Idioma detectado:', lang);

    var bannerConfig = {
      es: {
        desktop: 'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-HOME-ESP.png',
        mobile:  'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-WebMobile-ESP.png'
      },
      en: {
        desktop: 'https://gr-hub-projects.github.io/uploadImages/Travel-Tuesday/traveldays-home-eng.webp',
        mobile:  'https://gr-hub-projects.github.io/uploadImages/Travel-Tuesday/web-mobile-eng.webp'
      },
      fr: {
        desktop: 'https://gr-hub-projects.github.io/uploadImages/Travel-Tuesday/traveldays-home-fra.webp',
        mobile:  'https://gr-hub-projects.github.io/uploadImages/Travel-Tuesday/web-mobile-fra.webp'
      }
    };

    var config = bannerConfig[lang] || bannerConfig.es;

    var sliders = document.querySelectorAll(
      '.slider.sliderESim, .slider, .bannerlogin2'
    );

    console.log('[BANNER LOADER] Sliders encontrados:', sliders.length);

    if (!sliders.length) {
      console.warn('[BANNER LOADER] Ningún banner compatible encontrado en la página.');
      return;
    }

    sliders.forEach(function (slider) {
      var desktopImg = slider.querySelector('.img-banner-login.tag-desk');
      var mobileImg  = slider.querySelector('.img-banner1-login.tag-mob');

      if (desktopImg) {
        desktopImg.src = config.desktop;
        console.log('[BANNER LOADER] Desktop actualizado →', config.desktop);
      }

      if (mobileImg) {
        mobileImg.src = config.mobile;
        console.log('[BANNER LOADER] Mobile actualizado →', config.mobile);
      }
    });
  });
})();
