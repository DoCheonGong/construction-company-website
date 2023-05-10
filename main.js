$(document).ready(function () {
    var isDone = true;
    /* gnb */
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    });

    $("#gnb").on("mouseenter", function() {
        if (isDone) {
            isDone = false;
            $("#gnb > li > ul").stop().slideDown();
            $(".bgGnb").stop().slideDown();
        }
    });
    $("#gnb").on("mouseleave", function() {
        $("#gnb > li > ul").slideUp();
        $(".bgGnb").slideUp(function () {
            isDone = true;
        })
    });
    /*
    $("#gnb > li").hover(function() {
        $(".bgGnb, .sub").stop().slideDown();
    }, function () {
        $(".bgGnb, .sub").slideUp();
    });
    */
    /* popup */
    $(".notice > .content > ul > li").eq(0).on("click", function() {
        $(".popup").show();
        //$(".popup").css("display", "block");
    });
    $("#close").on("click", function() {
        $(".popup").hide();
        //$(".popup").css("display", "none");
    });

    /* slider */
    $("#slide .frame li").eq(0).siblings().hide();
    // eq(0).siblings(): 0 index의 형제요소를 모두 선택 (단, eq(0)는 제외)
    var slideIndex = 0;

    setInterval(function() {
        if (slideIndex < 2) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }

        $("#slide .frame li").eq(slideIndex).siblings().fadeOut(500);
        $("#slide .frame li").eq(slideIndex).fadeIn(500);
        // slideIndex index를 뺀 모든 요소를 fade-out하고
        // slideIndex index를 가진 요소를 fade-in 한다 (모두 0.5초 간격)
    }, 3000);

    /* gallery */
    $(".gallery .content a").on("mouseover", function() {
        $(this).css("opacity", 0.5);
    });
    $(".gallery .content a").on("mouseleave", function() {
        $(this).css("opacity", 1);
    });
})