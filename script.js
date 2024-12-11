// navbar scroll


let navbar = document.querySelector(".navbar");
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>100){
        navbar.classList.add("navbar-scrolled")
    }else{
        navbar.classList.remove("navbar-scrolled")
    }
})




// swiperjs



let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3500,
    }
  });

// !counter kısmı



document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obje = document.getElementById(id);
        let current = start;
        let range = start-end;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration/range))
        let timer = setInterval(() => {
            current += increment;
            obje.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step)
    }
    counter("count1",0,100,2000)
    counter("count2",0,200,2000)
    counter("count3",0,300,2000)
    counter("count4",0,400,2000)
})

// !counter2

let hasCounted = false;

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

window.addEventListener(
    "scroll",
    debounce(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 2000 && !hasCounted) {
            hasCounted = true; // Sayaçların bir kez çalışmasını sağla
            startCounters();
        }
    }, 100)
);

function startCounters() {
    function counter(id, start, end, duration) {
        let obje = document.getElementById(id);
        if (!obje) return; // Eğer eleman yoksa devam etme

        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            obje.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 200, 3000);
    counter("count2", 0, 200, 3000);
    counter("count3", 0, 300, 3000);
    counter("count4", 0, 400, 3000);
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop < 2000) {
        hasCounted = false; // Üst kısma dönüldüğünde tekrar tetiklenebilir
    }
});




