// import { interpolate } from "flubber"



(function(){
    VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 75,
        speed: 300,
        scale: 1.15,
        axis: "y",
        reset: true,
    });

    let newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    console.log(newURL)
    let pathArr = window.location.pathname.split('/');
    pathArr.forEach(function(entry) {
        console.log(entry);
    });
})();