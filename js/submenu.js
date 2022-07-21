
$("#menu-closer").hide();

$(".menu > li").click(function() {
    $this = $(this); 
    $this.children("ul").slideDown("fast");
    $("#menu-closer").show();
});

$("#menu-closer").click(function() {
    let coso = $(".menu > li > ul"); 
    coso.slideUp("fast");
    $("#menu-closer").hide();
});

