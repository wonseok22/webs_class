        //highlight
        const highlight = function () {
            hljs.highlightAll();
        }
        //modal
        const modal = function(){
            document.querySelector(".source-btn").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("show");
                document.querySelector("#modal").classList.remove("hide");
            });
            document.querySelector(".modal-close").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("hide");
            })
        }
        //tabmenu
        const tabMenu = function(){
            const tabBtn = document.querySelectorAll(".view-title > ul > li");
            const tabCont = document.querySelectorAll(".view-cont > div");
            tabBtn.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    tabBtn.forEach(el => {
                        el.classList.remove("active");
                    });
                    btn.classList.add("active");
                    tabCont.forEach(el => {
                        el.style.display = "none";
                    });
                    tabCont[index].style.display = "block";
                })
            })
        }