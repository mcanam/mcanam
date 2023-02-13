(function() { "use strict";
    
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
    
    initLenis();
    
})();