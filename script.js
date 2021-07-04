window.openinganimation = false;

function openChest()
{
    if(!window.openinganimation)
    {
        window.openinganimation = true;
        $("#torso-movable").removeClass("notanimated");
        $("#torso-movable-w").removeClass("notanimated");
        setTimeout(function() {
            $("#torso-movable").addClass("goleft");
            $("#torso-movable-w").addClass("goright");
        }, 250)

        
        setTimeout(closeChest, 4000)
    }
}

function closeChest()
{
    $("#torso-movable").removeClass("goleft");
    $("#torso-movable-w").removeClass("goright");
    $("#torso-movable").addClass("notanimated");
    $("#torso-movable-w").addClass("notanimated");
    window.openinganimation = false;
}


$("#movables").hover(
    openChest
);

$("span#momo").hover(
    function()
    {
        $("div#momo").toggleClass("hidden");
    }
)

$("span#momo").click(
    function()
    {
        $("div#momo").toggleClass("hidden");
    }
)