// Jitter animation — toggle classes on the inlined SVG groups
$(document).ready(function () {
    var $plane = $('g[inkscape\\:label="plane_g"]').first();
    var $clouds = $('g[inkscape\\:label="clouds"]').first();
    
    $plane.addClass('moved-up');
    $clouds.addClass('moved-down');

    setInterval(function () {
        if ($plane.hasClass('moved-up')) {
            $plane.removeClass('moved-up').addClass('moved-down');
            $clouds.removeClass('moved-down').addClass('moved-up');
        } else {
            $plane.removeClass('moved-down').addClass('moved-up');
            $clouds.removeClass('moved-up').addClass('moved-down');
        }
    }, 2000);
});

    