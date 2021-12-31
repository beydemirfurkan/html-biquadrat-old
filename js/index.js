function q(par) { return document.querySelector(par) }//queryselector shortland
function qAll(par){ return document.querySelectorAll(par) } //queryselectorAll shortland
function cL(par) { console.log(par) }


q(".contact-button").addEventListener("click", function (e) {
   q(".contact-form").classList.add("active");
});

q(".close-contact").addEventListener("click", function(e) {
  q(".contact-form").classList.remove("active");
})

q(".opened-menu").addEventListener("click", function (e) {
    q(".menu-wrap").classList.add("active");
})

q(".closed-menu").addEventListener("click", function (e) {
    q(".menu-wrap").classList.remove("active");
})



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
            q(".logochange .logoimg").src="img/logowhite.png";
            q(".webnav1").classList.add("text-white");

            

        }else {
            q(".top-nav").classList.remove("bg-dark");
            q(".logochange .logoimg").src="img/logo.png";
            q(".webnav1").classList.remove("text-white");


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
    };

// End Counter




let imgBtnler = document.querySelectorAll(".workus ul li");
let imgAll = document.querySelectorAll(".photoindex .img-1 img");

if (imgBtnler[0].addEventListener("click",function(e) {
  imgAll[0].src ="img/front/web11.png";
  imgAll[1].src ="img/front/web22.png";
  imgAll[2].src ="img/front/web33.png";
  imgAll[3].src ="img/front/web44.png";
  imgAll[4].src ="img/web555.png";
  imgAll[5].src ="img/front/web66.png";
  imgAll[6].src ="img/front/web77.png";
  imgAll[7].src ="img/front/web88.png";
  for(let i = 0; i<imgAll.length; i++) {
    imgAll[i].setAttribute("onclick","document.location = 'sub-wesite.html'");
  }})
);
else if (imgBtnler[1].addEventListener("click",function(e) {
  imgAll[0].src ="img/front/sos1.png";
  imgAll[1].src ="img/front/sos2.png";
  imgAll[2].src ="img/front/sos3.png";
  imgAll[3].src ="img/front/sos4.png";
  imgAll[4].src ="img/front/sos5.png";
  imgAll[5].src ="img/front/sos6.png";
  imgAll[6].src ="img/front/sos7.png";
  imgAll[7].src ="img/front/sos8.png";
  for(let i = 0; i<imgAll.length; i++) {
    imgAll[i].setAttribute("onclick","document.location = 'sub-soc.html'");
  }})
);
 else if(imgBtnler[2].addEventListener("click",function(e) {

    imgAll[0].src ="img/front/log1.png";
    imgAll[1].src ="img/front/log2.png";
    imgAll[2].src ="img/front/log3.png";
    imgAll[3].src ="img/front/log4.png";
    imgAll[4].src ="img/front/log5.png";
    imgAll[5].src ="img/front/log6.png";
    imgAll[6].src ="img/front/log7.png";
    imgAll[7].src ="img/front/log8.png";

    for(let i = 0; i<imgAll.length; i++) {
      imgAll[i].setAttribute("onclick","document.location = 'sub-marka-olustur.html'");
    }})
  );
  
  else if (imgBtnler[3].addEventListener("click",function(e) {
    imgAll[0].src ="img/front/flog1.png";
    imgAll[1].src ="img/front/flog22.png";
    imgAll[2].src ="img/front/flog3.png";
    imgAll[3].src ="img/front/flog4.png";
    imgAll[4].src ="img/front/glog1.png";3
    imgAll[5].src ="img/front/glog2.png";
    imgAll[6].src ="img/front/glog3.png";
    imgAll[7].src ="img/t1.png";
    for(let i = 0; i<imgAll.length; i++) {
      imgAll[i].setAttribute("onclick","document.location = 'sub-digi.html'");
    }})
  );
  else (imgBtnler[4].addEventListener("click",function(e) {
    imgAll[0].src ="img/front/glog1.png";
    imgAll[1].src ="img/front/glog2.png";
    imgAll[2].src ="img/front/glog3.png";
    imgAll[3].src ="img/front/glog4.png";
    imgAll[4].src ="img/front/flog1.png";
    imgAll[5].src ="img/front/flog22.png";
    imgAll[6].src ="img/front/flog3.png";
    imgAll[7].src ="img/t1.png";
    for(let i = 0; i<imgAll.length; i++) {
      imgAll[i].setAttribute("onclick","document.location = 'index.html'");
    }})
  );

  var btnContainer2 = document.getElementById("hw-list");

  var btns2 = btnContainer2.getElementsByClassName("btnfltr2");
  for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function(e){
    e.preventDefault();
    var current2 = document.getElementsByClassName("active");
    current2[0].className = current2[0].className.replace(" active", "");
    this.className += " active";
  });
}


  for (let i = 0; i<imgAll.length; i++) {
    imgBtnler[i].addEventListener("click",function (e) {
      document.querySelector(".photoindex").style.animation = 'filterfade .4s ease-in-out';
      e.preventDefault();
  
      setTimeout( function () {
        document.querySelector(".photoindex").style.animation = 'none';
      },300 );

    })
  }





// Neler Yapt覺k 



// End Neler Yapt覺k


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






