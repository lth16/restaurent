document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelectorAll(".header");
    var trangthai = "tren";
    var order = document.querySelectorAll(".order-cam-logo div.order1");
    var menu1 = document.querySelectorAll(".header-center a.nav-link");
    window.addEventListener("scroll", function() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 85) {
            if (trangthai == "tren") {
                menu[0].classList.add("menu_xuong");
                trangthai = "duoi";
            }
        } else if (window.pageXOffset < 85) {
            if (trangthai == "duoi") {
                menu[0].classList.remove("menu_xuong");
                trangthai = "tren";
            }
        }
    })
    for (let i = 0; i < menu1.length; i++) {
        menu1[i].onclick = function() {

            for (let k = 0; k < menu1.length; k++) {
                menu1[k].classList.remove("active");
            }
            this.classList.add("active");


        }

    }
    for (let i = 0; i < order.length; i++) {
        order[i].onclick = function() {
            for (let k = 0; k < order.length; k++) {
                order[k].classList.remove("chonthuonghieu");
            }
            this.classList.add("chonthuonghieu");
        }
    }




}, false)