(function () { "use strict";

      function initLenis() {
            const lenis = new Lenis({
                  duration: 2,
                  smooth: true,
                  mouseMultiplier: 1,
                  smoothTouch: true,
                  touchMultiplier: 4,
            });

            function raf(time) {
                  lenis.raf(time)
                  requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
      }

      function initMinimap() {
            const $wrapper = document.querySelector(".wrapper");
            const $content = document.querySelector(".minimap__content");
            const $outline = document.querySelector(".minimap__outline");

            const cloned = $wrapper.cloneNode(true);

            const resize = () => {
                  $content.style.width  = $wrapper.offsetWidth  + "px";
                  $content.style.height = $wrapper.offsetHeight + "px";
            }
            
            document.body.onscroll = () => {
                  const top = document.documentElement.scrollTop;
                  $outline.style.transform = `translateY(${top + "px"})`;
            };

            window.onresize = resize; resize();
            $content.appendChild(cloned);
      }

      initLenis();
      initMinimap();

})();
