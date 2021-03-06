function collapseNavbar() {
    $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
}
$(window).scroll(collapseNavbar), $(document).ready(collapseNavbar), $(function () {
    $("a.page-scroll").bind("click", function (e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top
        }, 1200, "easeInOutExpo"), e.preventDefault()
    })
}), $(".navbar-collapse ul li a").click(function () {
    "dropdown-toggle active" != $(this).attr("class") && "dropdown-toggle" != $(this).attr("class") && $(".navbar-toggle:visible").click()
});
$(".navbar-toggle").click(function () {
    $('.navbar-custom').toggleClass("navbar-color");
});