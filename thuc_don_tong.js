document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelectorAll(".header");
    var trangthai = "tren";
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

    var menu_btn = document.querySelectorAll(".menu-btn");
    var tong1 = document.querySelectorAll("div.tong1");
    for (let i = 0; i < menu_btn.length; i++) {
        menu_btn[i].onclick = function() {
            for (let k = 0; k < menu_btn.length; k++) {
                menu_btn[k].classList.remove("active");

            }

            this.classList.add("active");
            for (let k = 0; k < tong1.length; k++) {
                tong1[k].classList.remove("hien_thi");
            }

            tong1[i].classList.add("hien_thi");

        }
    }






}, false)