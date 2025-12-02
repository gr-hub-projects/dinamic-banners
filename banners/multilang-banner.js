// Versión 1.0.0

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Detectar idioma
    var lang = (window.dataLang || document.documentElement.lang || 'es')
      .toString()
      .toLowerCase()
      .substring(0, 2);

    // 2. Config de banners por idioma
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

    // Si no hay idioma configurado, caemos a español
    var config = bannerConfig[lang] || bannerConfig.es;

    if (!config) {
      console.warn('Banner ESIM: no hay configuración para el idioma', lang);
      return;
    }

    // 3. Seleccionar los banners dentro del slider
    var sliders = document.querySelectorAll('.slider.sliderESim');

    if (!sliders.length) {
      console.warn('Banner ESIM: no se encontró .slider.sliderESim en la página');
      return;
    }

    sliders.forEach
      ? sliders.forEach(actualizarBannerEnSlider)
      : Array.prototype.forEach.call(sliders, actualizarBannerEnSlider);

    function actualizarBannerEnSlider(slider) {
      var desktopImg = slider.querySelector('.img-banner-login.tag-desk');
      var mobileImg  = slider.querySelector('.img-banner1-login.tag-mob');

      if (desktopImg && config.desktop) {
        desktopImg.setAttribute('src', config.desktop);
      }

      if (mobileImg && config.mobile) {
        mobileImg.setAttribute('src', config.mobile);
      }
    }
  });
})();
