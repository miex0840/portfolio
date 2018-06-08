$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".box1").on("mouseover", overlayVises);
}

function overlayVises() {
    console.log("overlayVises");
    $(".overlay").addClass("visible");
    $(".content").removeClass("visible");
    $(".box1").on("mouseout", overlaySkjules);
}

function overlaySkjules() {
    console.log("overlaySkjules");
    $(".overlay").removeClass("visible");
    $(".content").addClass("visible");

}
