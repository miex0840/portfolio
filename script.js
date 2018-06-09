$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", åbenMenu);
}

function åbenMenu() {
    console.log("åbenMenu");
    $("nav").toggleClass("hidden");
    $(".menubutton").toggleClass("kryds");
    $("nav a").on("click", lukMenu)
}

function lukMenu() {
    console.log("lukMenu");
    $("nav").toggleClass("hidden");
    $(".menubutton").toggleClass("kryds");
    $("nav a").on("click", åbenMenu);
}
