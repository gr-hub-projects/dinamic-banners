// v1.0.0

(function () {
  console.log('Banner ESIM: script cargado');

  document.addEventListener('DOMContentLoaded', function () {
    console.log('Banner ESIM: DOMContentLoaded');

    var lang = (window.dataLang || document.documentElement.lang || 'es')
      .toString()
      .toLowerCase()
      .substring(0, 2);

    console.log('Banner ESIM: idioma detectado =>', lang);

    var bannerConfig = {
      es: {
        desktop: 'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-HOME-ESP-TEST.png',
        mobile:  'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-WebMobile-ESP-TEST.png'
      },
      en: {
        desktop: 'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-HOME-ENG.png',
        mobile:  'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-WebMobile-ENG.png'
      },
      fr: {
        desktop: 'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-HOME-FR.png',
        mobile:  'https://gr-hub-projects.github.io/uploadImages/CyberMonday/CyberMonday-WebMobile-FR.png'
      }
    };

    var config = bannerConfig[lang] || bannerConfig.es;

    if (!config) {
      console.warn('Banner ESIM: no hay config para el idioma', lang);
      return;
    }

    var sliders = document.querySelectorAll('.slider.sliderESim');
    console.log('Banner ESIM: sliders encontrados =>', sliders.length);

    if (!sliders.length) {
      console.warn('Banner ESIM: no se encontró .slider.sliderESim en la página');
      return;
    }

    function actualizarBannerEnSlider(slider) {
      var desktopImg = slider.querySelector('.img-banner-login.tag-desk');
      var mobileImg  = slider.querySelector('.img-banner1-login.tag-mob');

      console.log('Banner ESIM: img desktop =>', !!desktopImg, ' | img mobile =>', !!mobileImg);

      if (desktopImg && config.desktop) {
        desktopImg.setAttribute('src', config.desktop);
        console.log('Banner ESIM: desktop actualizado a', config.desktop);
      }

      if (mobileImg && config.mobile) {
        mobileImg.setAttribute('src', config.mobile);
        console.log('Banner ESIM: mobile actualizado a', config.mobile);
      }
    }

    // forEach compatible
    if (sliders.forEach) {
      sliders.forEach(actualizarBannerEnSlider);
    } else {
      Array.prototype.forEach.call(sliders, actualizarBannerEnSlider);
    }
  });
})();
