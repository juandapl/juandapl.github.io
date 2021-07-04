window.openinganimation = false;

function openChest()
{
    if(!window.openinganimation)
    {
        window.openinganimation = true;
        $("#torso-movable").addClass("goleft");
        $("#torso-movable-w").addClass("goright");
        setTimeout(closeChest, 4000)
    }
}

function closeChest()
{
    $("#torso-movable").removeClass("goleft");
    $("#torso-movable-w").removeClass("goright");
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