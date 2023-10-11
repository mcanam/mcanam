(function () { "use strict";

      let lenis = null;
      let isSkillScrollIntoView = false;

      function initLenis() {
            lenis = new Lenis({
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

      function initSkillBars() {
            const $skillList = document.querySelector('.skill__list');
            const $skills = document.querySelectorAll(".skill__bar");

            lenis.on('scroll', () => {
                  const rect = $skillList.getBoundingClientRect();

                  if ((rect.top > 250 && rect.top < 280) && !isSkillScrollIntoView) {
                        $skills.forEach($skill => {
                              const progress = Number($skill.dataset.progress);
                              const total = progress + 10;

                              let count = 1;

                              const interval = setInterval(() => {
                                    if (count == total) clearInterval(interval);
                                    if (count <= 10) $skill.innerText = `[${'-'.repeat(count)}]`;
                                    if (count > 10)  $skill.innerText = $skill.innerText.replace(/-/, '=');
                                    count += 1;
                              }, 60);
                        });

                        isSkillScrollIntoView = true; 
                  }
            })
      }

      function initSplashScreen() {
            const $splash = document.querySelector(".splash__screen");

            const timeout = setTimeout(() => {
                  $splash.classList.add("hidden");
                  document.body.classList.remove("no__scroll");
                  initLenis();
                  initSkillBars();
                  initMinimap();
                  clearTimeout(timeout);
            }, 4000);
      }

      initSplashScreen();

})();
