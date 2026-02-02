window.torsoanimation = false;
window.headanimation = false;
window.phoneanimation = false;
window.titleNumber = 0;

function openChest()
{
    if(!window.torsoanimation)
    {
        window.torsoanimation = true;
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
    window.torsoanimation = false;
}

function openHead()
{
    if(!window.headanimation)
    {
        window.headanimation = true;
        $("#facemovable").removeClass("notanimated");
        $("#facemovable2").removeClass("notanimated");
        setTimeout(function() {
            $("#facemovable").addClass("goleft2");
            $("#facemovable2").addClass("goright2");
        }, 250)

        
        setTimeout(closeHead, 4000)
    }
}

function closeHead()
{
    $("#facemovable").removeClass("goleft2");
    $("#facemovable2").removeClass("goright2");
    $("#facemovable").addClass("notanimated");
    $("#facemovable2").addClass("notanimated");
    window.headanimation = false;
}

function openPhone()
{
    if(!window.phoneanimation)
    {
        window.phoneanimation = true;
        $("#movablephone").removeClass("notanimated");
        setTimeout(function() {
            $("#movablephone").addClass("godown");
        }, 250)

        
        setTimeout(closePhone, 4000)
    }
}

function closePhone()
{
    $("#movablephone").removeClass("godown");
    $("#movablephone").addClass("notanimated");
    window.phoneanimation = false;
}


$("#movables").hover(
    openChest
);

$("#face").hover(
    openHead
);

$("#phone").hover(
    openPhone
);

$("#movables").click(
    openChest
);

$("#face").click(
    openHead
);

$("#phone").click(
    openPhone
);

$("#about").click(
    function(){$("div#about").removeClass("hidden");}
);
$("#aboutclose").click(
    function(){$("div#about").addClass("hidden");}
);

$("#portfolio").click(
    function(){$("div#portfolio").removeClass("hidden");}
);
$("#portfolioclose").click(
    function(){$("div#portfolio").addClass("hidden");}
);

$("#contact").click(
    function(){$("div#contact").removeClass("hidden");}
);
$("#contactclose").click(
    function(){$("div#contact").addClass("hidden");}
);


$("span#momo").hover(
    function()
    {
        $("div#momo").toggleClass("hidden");
    }
);

$("span#momo").click(
    function()
    {
        $("div#momo").toggleClass("hidden");
    }
);

$("u").hover(
    function()
    {
        $(this).find(".over").toggleClass("hidden");
    }
);

$("#2021").click(
    function()
    {
        $("#2021").toggleClass("deactivated");
        $(".y2021").toggleClass("hidden");
        $(".y2021").toggleClass("project");
    }
);

$("#2020").click(
    function()
    {
        $("#2020").toggleClass("deactivated");
        $(".y2020").toggleClass("hidden");
        $(".y2020").toggleClass("project");
    }
);

let titles = ["juan piñeros liberato","traveller?","programmer?","iron cook?","too old for pro tennis?","math nerd?"];

function changeTitle()
{
    titleNumber = (titleNumber + 1) % 6;
    document.title = titles[titleNumber];
}

var interval = window.setInterval(changeTitle, 1000);

$(".moreinfo").click(
    function()
    {
        $(this).parent().parent().parent().find(".above").toggleClass("hidden");
    }
);

$(".lessinfo").click(
    function()
    {
        $(this).parent().parent().parent().find(".above").toggleClass("hidden");
    }
);