(function () {
  var app = app || {};

  var spBreak = 767.98;

  app.init = function () {
    gsap.registerPlugin(ScrollTrigger);
    app.animateFeature();
    app.fadeLight();
    app.fadeAbout();
  };

  app.isMobile = function () {
    return window.matchMedia('(max-width: ' + spBreak + 'px)').matches;
  };

  app.fadeAbout = function () {
    particlesJS('particles-js2', {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#FFFFFF'
        },
        shape: {
          type: 'image',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/top/about_starlight.png',
            width: 414,
            height: 414
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 0.1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 50,
          random: true,
          anim: {
            enable: true,
            speed: 0.2,
            size_min: 0.2,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'bubble'
          },
          onclick: {
            enable: false,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      }
    });
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 40,
          density: {
            enable: false
          }
        },
        color: {
          value: '#4cf7f7'
        },
        opacity: {
          value: 1,
          anim: {
            enable: false
          }
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 4,
            color: '#fff'
          },
          polygon: {
            nb_sides: 6
          }
        },
        size: {
          value: 6,
          anim: {
            enable: false,
            speed: 30,
            size_min: 10,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: '#fff',
          opacity: 1,
          width: 3
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          straight: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          }
        }
      },
      retina_detect: true
    });
  };

  app.fadeLight = function () {
    var tlKeyVisual = new TimelineMax({
      delay: 1.5
    });
    tlKeyVisual.from(
      '.keyvisual-title',
      1.5,
      {
        opacity: 0
      },
      0
    );
    tlKeyVisual.from(
      '.keyvisual-text',
      1.5,
      {
        opacity: 0
      },
      0
    );
    tlKeyVisual.from(
      '.keyvisual-button',
      1.5,
      {
        opacity: 0
      },
      0
    );

    var tlMission = new TimelineMax({ paused: true });
    var itemMission = $('.image-light');
    tlMission.fromTo(
      '.section-top-mission .sec-title',
      1,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      },
      0
    );
    tlMission.fromTo(
      '.section-top-mission .sec-text',
      1,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      },
      0.5
    );
    tlMission.fromTo(
      '.section-top-mission .col-button',
      1,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      },
      1
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-top-mission',
        start: 'top 65%',
        onEnter: function () {
          tlMission.play();
        }
      }
    });

    var tlAbout = new TimelineMax({ paused: true });
    tlAbout.fromTo(
      '.section-top-about .sec-title',
      1,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      },
      0
    );
    tlAbout.fromTo(
      '.section-top-about .sec-text',
      1,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      },
      0.5
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-top-about',
        start: 'top 65%',
        onEnter: function () {
          tlAbout.play();
        }
      }
    });

    var tlValue = new TimelineMax({ paused: true });
    tlValue.fromTo(
      '.section-top-value .sec-title',
      1,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: Power1.easeOut
      },
      0
    );

    gsap.utils
      .toArray('.section-top-value .list-value .value-item')
      .forEach(function (valueItem, index) {
        tlValue.fromTo(
          valueItem,
          1,
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            ease: Power1.easeOut
          },
          0.5 + index * 0.25
        );
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-top-value',
        start: 'top 65%',
        onEnter: function () {
          tlValue.play();
        }
      }
    });

    var tlFooter = new TimelineMax({ paused: true });

    gsap.utils
      .toArray('footer .item-footer')
      .forEach(function (footerItem, index) {
        tlValue.fromTo(
          footerItem,
          1,
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            ease: Power1.easeOut
          },
          0.5 + index * 0.25
        );
      });

    gsap.utils
      .toArray('footer .item-social')
      .forEach(function (socialItem, index) {
        tlValue.fromTo(
          socialItem,
          1,
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            ease: Power1.easeOut
          },
          0.5 + index * 0.25
        );
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 65%',
        onEnter: function () {
          tlFooter.play();
        }
      }
    });
  };

  app.animateFeature = function () {
    if (app.isMobile()) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: '.feature-heading',
        start: 'top 200px',
        endTrigger: '.section-top-feature',
        end: 'bottom bottom',
        pin: true
      }
    });
    +gsap.set('.panel-number .number', {
      y: 200,
      opacity: 0
    });
    gsap.set('.panel-title', {
      x: -200,
      y: 200,
      opacity: 0
    });
    gsap.set('.panel-description', {
      x: -200,
      y: 200,
      opacity: 0
    });

    gsap.utils.toArray('.panel').forEach(function (panel) {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'center 20%',
        onUpdate: function () {
          if (window.isPanelOpen) {
            gsap.to(window, {
              scrollTo: { y: $(panel).offset().top, autoKill: false },
              duration: 0,
              onComplete: function () {
                window.isPanelOpen = true;
              }
            });
          }
        },
        onToggle: function (self) {
          if (self.isActive) {
            gsap.to(self.trigger.querySelector('.panel-button'), {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 1
            });
            gsap.to(self.trigger.querySelector('.card'), {
              rotateX: 55,
              duration: 1
            });
            gsap.to(self.trigger.querySelector('.card img'), {
              rotateY: -30,
              duration: 1
            });
            gsap.to(self.trigger.querySelector('.number'), {
              y: 0,
              duration: 1,
              opacity: 1
            });
            gsap.to(self.trigger.querySelector('.panel-title'), {
              x: 0,
              y: 0,
              duration: 1,
              opacity: 1
            });
            gsap.to(self.trigger.querySelector('.panel-description'), {
              x: 0,
              y: 0,
              duration: 1,
              opacity: 1
            });
          } else {
            gsap.to(self.trigger.querySelector('.card'), {
              rotateX: 0,
              duration: 1
            });
            gsap.to(self.trigger.querySelector('.card img'), {
              rotateY: 0,
              duration: 1
            });
            gsap.to(self.trigger.querySelector('.number'), {
              y: 200,
              duration: 1,
              opacity: 0
            });
            gsap.to(self.trigger.querySelector('.panel-title'), {
              x: -200,
              y: 200,
              duration: 1,
              opacity: 0
            });
            gsap.to(self.trigger.querySelector('.panel-description'), {
              x: -200,
              y: 200,
              duration: 1,
              opacity: 0
            });
          }
        }
      });
      var tlPanelOpen = new TimelineMax({ paused: true });
      tlPanelOpen.to(
        panel.querySelector('.card'),
        1,
        {
          rotateX: 0
        },
        0
      );
    });
  };

  $(function () {
    app.init();
  });
})();
1;
