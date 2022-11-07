
const container = document.querySelector(".sidebar-toggle");
const closebutton = document.querySelector(".close-btn");
const leftsidebar = document.querySelector(".leftsidebar");

    container.addEventListener("click", function (){

        leftsidebar.classList.toggle("show-sidebar");
        // alert("yes")
});

    closebutton.addEventListener("click", function(){

        leftsidebar.classList.remove("show-sidebar");
        // alert("cut")
    });