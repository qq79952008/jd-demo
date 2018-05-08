$(function(){
    $(".navl").bind("mouseover",function(){
        $(".navl-dropdown").css("display","block");
    });
    $(".navl").bind("mouseout",function(){
        $(".navl-dropdown").css("display","none");
    });
    $(".item").bind("click", function (e) {
        $(".item").removeClass("item-active");
        $(".add-name").html($(this).text());
        $(this).addClass("item-active");
        $(".navl-dropdown").css("display","none");

    });
    $(".buycar").bind("mouseover", function (e) {
        $(".buycar-dropdown,.buycar-empty").css("display","block");  
    });
    $(".buycar").bind("mouseout", function (e) {
        $(".buycar-dropdown,.buycar-empty").css("display","none");          
    });
})
