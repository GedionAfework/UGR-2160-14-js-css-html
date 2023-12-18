let scrollContainer = document.querySelector(".education-pictures");
      let back_button = document.getElementById("back_button");
      let next_button = document.getElementById("next_button");

      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehaviour = "auto";
      });

      next_button.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehaviour = "smooth";
        scrollContainer.scrollLeft += 900;
      });

      back_button.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehaviour = "smooth";
        scrollContainer.scrollLeft -= 900;
      });

let scroll = document.querySelector(".stem-pictures");
      let back = document.getElementById("back");
      let next = document.getElementById("next");

      scroll.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scroll.scrollLeft += evt.deltaY;
        scroll.style.scrollBehaviour = "auto";
      });

      next.addEventListener("click", ()=> {
        scroll.style.scrollBehaviour = "smooth";
        scroll.scrollLeft += 1200;
      });

      back.addEventListener("click", ()=>{
        scroll.style.scrollBehaviour = "smooth";
        scroll.scrollLeft -= 1200;
      });

            