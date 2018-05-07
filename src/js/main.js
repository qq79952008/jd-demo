$(function(){
    $(".navl").bind("mouseover",function(){
        $(".navl-dropdown").css("display","block");
    })
    $(".navl").bind("mouseout",function(){
        $(".navl-dropdown").css("display","none");
    })
})
