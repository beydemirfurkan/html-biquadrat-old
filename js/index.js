function q(par) { return document.querySelector(par) }//queryselector shortland
function qAll(par){ return document.querySelectorAll(par) } //queryselectorAll shortland
function cL(par) { console.log(par) }





$(function() {
    var owl = $('.sutunlar'),
        owlOptions = {
            loop: true,
            margin: 20,
            nav:true,
            responsive: {
                0: {
                    items: 2
                }
            }
        };

    if ( $(window).width() < 854 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 854 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});



window.addEventListener("scroll", function () {

    if(q(".top-nav")){
        if (window.scrollY > 150) {
            q(".top-nav").classList.add("bg-dark")
            q(".top-nav .opened").classList.add("text-white")
            q(".top-nav .logoimg").src="img/logowhite.png";
            q(".webnav").classList.add("text-white")
            qAll(".dropdown li")[0].classList.add("mt-3","text-blue");
            qAll(".dropdown li")[1].classList.add("text-blue");
            qAll(".dropdown li")[2].classList.add("text-blue");
            qAll(".dropdown li")[3].classList.add("text-blue");
            


        }else {
            q(".top-nav").classList.remove("bg-dark")
            q(".top-nav .opened").classList.remove("text-white")
            q(".top-nav .logoimg").src="img/logo.png";
            q(".webnav").classList.remove("text-white")
            qAll(".dropdown li")[0].classList.remove("mt-3","text-blue");
            qAll(".dropdown li")[1].classList.remove("text-blue");
            qAll(".dropdown li")[2].classList.remove("text-blue");
            qAll(".dropdown li")[3].classList.remove("text-blue");

            

        }
        
    }
})


// Counter
    const counters = document.querySelectorAll('.counter');
    for(let n of counters) {
      const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 2000; 
        const inc = target / speed; 
        if(count < target) {
          n.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          n.innerText = target;
        }
      }
      updateCount();
    }

// End Counter




q(".contact-button").addEventListener("click", function (e) {
    q(".contact-form").classList.add("active");
})

q(".contact-form").addEventListener("click", function (e) {
    q(".contact-form").classList.remove("active");
})

q(".opened-menu").addEventListener("click", function (e) {
    q(".menu-wrap").classList.add("active");
})

q(".closed-menu").addEventListener("click", function (e) {
    q(".menu-wrap").classList.remove("active");
})

// Neler Yaptık 



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filtrebtn");

var btns = btnContainer.getElementsByClassName("btnfltr");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e){
      e.preventDefault();
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





  if(document.querySelector(".filtrebtn .btnfltr")) {
   let btnLer =  document.querySelectorAll(".filtrebtn .btnfltr");

    for (let i = 0; i<btnLer.length; i++) {
      btnLer[i].addEventListener("click",function () {
        document.querySelector(".ref-box").style.animation = 'filterfade .2s ease-in';

        setTimeout( function () {
          document.querySelector(".ref-box").style.animation = 'none';
        },300 );
      })
    }
  }




// End Neler Yaptık


// Earth

function earthRotate(){
    const earth = document.getElementById('earth');
  
    const mc = new Hammer(earth); 
  
    mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
    mc.add( new Hammer.Press({ time: 0 }) );
  
    mc.on("pan", handleDrag);
    mc.on("press", handlePress);
    mc.on("pressup", handlePressUp);
    let lastPosX = 0;
    let isDragging = false;
    let posX = -325; 
  
    function handleDrag(ev) {
      
      const elem = earth;
      
      if ( ! isDragging ) {
        startDrag(elem);
      }
      

     
      posX = ev.deltaX + lastPosX;
      elem.style.backgroundPosition = -(posX / 5) + "%"; 
      if (ev.isFinal) {
        endDrag();
      }
    }
  
    function handlePress(ev) {
      endDrag();
    }
    function handlePressUp(ev) {
      endDrag();
    }
    function startDrag(elem) {
        isDragging = true;
        lastPosX = posX; 
    }
    function endDrag() {
        isDragging = false;
    }
  }
  earthRotate();
// End Earth







      





      
    

