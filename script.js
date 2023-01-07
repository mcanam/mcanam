(function() { 'use strict';

      function featherIcons() {
            const url = 'https://cdn.jsdelivr.net/npm/feather-icons@4.29.0/dist/icons/';
            const $elems = document.querySelectorAll('i[data-feather]');

            $elems.forEach($elem => {
                  const name = $elem.dataset.feather;
                  const icon = fetch(url + name + '.svg').then(res => res.text());
                  
                  icon.then(svg => {
                        $elem.insertAdjacentHTML('beforebegin', svg);
                        $elem.remove();
                  });

                  icon.catch(err => {
                        console.warn(err.message);
                  });
            });
      }

      featherIcons();

})();
