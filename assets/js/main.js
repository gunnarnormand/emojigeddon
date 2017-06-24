const LoaderModule = (function() {

  const $loader = document.querySelector('#loader');
  const $banner = document.querySelector('.big-stories');

  const init = function() {

    function loaderDisplayNone() {
      TweenMax.set([$loader], {display:"none"});
    }
    
    const loaderTl = new TimelineMax({
      //onStart: ,
      onComplete: loaderDisplayNone,
      delay: 0,
      smoothChildTiming: true
    }).set([$banner], {display:"block"})
      .from($banner, 1, {xPercent: -100, force3D:true, ease: Power4.easeOut})
      .to($loader, .15, {backgroundColor: '#fff9da', ease:Sine.easeOut})
      .to($loader, 1, {alpha: 0, ease:Sine.easeOut});
  }

  return {
    init: init
  }
})();

const NavModule = (function() {

  const $navbar = document.querySelector('nav');
  const $commentBtn = document.querySelector('.comment-btn');
  const $aside = document.querySelector('aside');
  const $exitAside = document.querySelector('.exit');
  const $main = document.querySelector('#main');
  const topOfMain = $main.offsetTop;

  const $lightbox = document.querySelector('#lightbox');
  const $lightboxImg = document.querySelector('#lightbox-img');

  const $blink = document.querySelector('#blink');


  const init = function() {

    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= topOfMain) {
        $navbar.classList.add('sticky-nav');
        $main.style.paddingTop = $navbar.offsetHeight + 'px';
      } else {
        $navbar.classList.remove('sticky-nav');
        $main.style.paddingTop = 0;
      }
    });   

    let lastScrollTop = 0;
    window.addEventListener('scroll', (e) => {
      let st = window.pageYOffset || window.scrollTop;
      if (window.scrollY >= topOfMain && st < lastScrollTop) {
        document.body.classList.add('sticky');
      } else {
        document.body.classList.remove('sticky');
      }
      lastScrollTop = st;
    });

    $commentBtn.addEventListener('click', (e) => {
      TweenLite.set($aside, {display: 'flex'});
      TweenLite.fromTo($aside, .5, {xPercent:-100,force3D:true},{zIndex: 1, xPercent:0, force3D:true, ease:Sine.easeOut});
    });

    $exitAside.addEventListener('click', (e) => {
      TweenLite.to($aside, .5, {xPercent:-100, force3D:true, display: 'none', ease:Sine.easeOut});
    });

    $exitAside.addEventListener('mouseenter', (e) => {
      TweenLite.to($exitAside, .25, {rotation: 90, ease:Sine.easeOut});
    });

    $exitAside.addEventListener('mouseleave', (e) => {   
      TweenLite.to($exitAside, .25, {rotation: -90, ease:Sine.easeOut});
    });




    const blinkTl = new TimelineMax({
      repeatDelay: 1,
      smoothChildTiming: true,
      repeat: -1
    }).to($blink, .5, {alpha: 0, ease:Sine.easeOut})
      .to($blink, .5, {alpha: 1, ease:Sine.easeOut});


    $lightboxImg.addEventListener('click', (e) => {
      console.log('img clicked!!');
      $lightbox.classList.add('lightbox-active');
    }); 
    $lightbox.addEventListener('click', (e) => {
      console.log('img  2 clicked!!');
      $lightbox.classList.remove('lightbox-active');
    }); 



  }

  return {
    init: init
  }
})();

const SplitTextModule = (function() {

  const $laugh = document.querySelector('#laugh');
  const $poo = document.querySelector('#poo');
  const $discussion = document.querySelector('#discussion');
  const $diversity = document.querySelector('#diversity');
  const $condoms = document.querySelector('#condoms');
  const $eggplant = document.querySelector('#eggplant');
  const $aside = document.querySelector('aside');

  const $emojigeddonText = document.querySelector('#emojigeddonText');


  const init = function() {
    CustomWiggle.create('wiggley', {wiggles: 5, type:'random'});
    mySplitText = new SplitText($emojigeddonText, {type:"words"}),
    splitTextTimeline = new TimelineMax({repeat: -1, yoyo:true});
    TweenLite.set($emojigeddonText, {perspective:400});
    mySplitText.split({type:"chars, words"}) 
    TweenMax.staggerTo(mySplitText.chars, 1, {y: 5, rotation:5, ease: 'wiggley', repeat: -1});

    $laugh.addEventListener('mouseover', (e) => {       
      TweenLite.fromTo($laugh, 0.5, {
        alpha: 0
      },{
        alpha: 1,
        scrambleText:{text:'😂😂😂😂', chars:'upperCase', speed:2, revealDelay:0},
        delay: 0
      });
    });

    $poo.addEventListener('mouseover', (e) => {       
      TweenLite.fromTo($poo, 0.5, {
        alpha: 0
      },{
        alpha: 1,
        scrambleText:{text:'💩💩💩💩', chars:'upperCase', speed:2, revealDelay:0},
        delay: 0
      });
    });

    $discussion.addEventListener('mouseover', (e) => {       
      TweenLite.set($aside, {display: 'flex'});
      TweenLite.fromTo($aside, .5, {xPercent:-100,force3D:true},{zIndex: 1, xPercent:0, force3D:true, ease:Sine.easeOut});
    });

    $diversity.addEventListener('mouseover', (e) => {       
      TweenLite.fromTo($diversity, 0.5, { 
        alpha: 0
      },{
        alpha: 1,
        scrambleText:{text:'👬👭👬', chars:'upperCase', speed:2, revealDelay:0},
        delay: 0
      });
    });

    $condoms.addEventListener('mouseover', (e) => {       
      TweenLite.fromTo($condoms, 0.5, { 
        alpha: 0
      },{
        alpha: 1,
        scrambleText:{text:'🍼🍼🍼🍼', chars:'upperCase', speed:2, revealDelay:0},
        delay: 0
      });
    });

    $eggplant.addEventListener('mouseover', (e) => {       
      TweenLite.fromTo($eggplant, 0.5, { 
        alpha: 0
      },{
        alpha: 1,
        scrambleText:{text:'🍆🍆🍆🍆', chars:'upperCase', speed:2, revealDelay:0},
        delay: 0
      });
    });

  }

  return {
    init: init
  }
})();

const MainAnimationModule = (function() {

  const $p = document.querySelectorAll(".alegreya");
  const $pb = document.querySelectorAll(".alegreya-bold");

  const $smileys = document.querySelectorAll(".elders img");

  const $flame1 = document.querySelector('.flame img:nth-of-type(1)');
  const $flame2 = document.querySelector('.flame img:nth-of-type(2)');

  const $messageBoxes = document.querySelectorAll('.message-boxes img');



  const init = function() {

    // for (var i = 0; i < $p.length; i++) {

    //   new Waypoint({
    //     element: $p[i],
    //     handler: function(direction) {
    //       if (direction == "down") {
    //         TweenMax.from(this.element, 1, {opacity:0,yPercent: 50, force3D:true, ease: Back.easeOut.config(1.7)})
    //       } else if (direction == "up") {
    //         TweenMax.to(this.element, 0.5, {opacity:1, ease: Circ.easeInOut})
    //       }
    //     },
    //     offset: "80%"
    //   })
    // }

    // for (var i = 0; i < $pb.length; i++) {

    //   new Waypoint({
    //     element: $pb[i],
    //     handler: function(direction) {
    //       if (direction == "down") {
    //         TweenMax.from(this.element, 1, {opacity:0,yPercent: 50, force3D:true, ease: Back.easeOut.config(1.7)})
    //       } else if (direction == "up") {
    //         TweenMax.to(this.element, 0.5, {opacity:1, ease: Circ.easeInOut})
    //       }
    //     },
    //     offset: "80%"
    //   })
    // }

    // for (var i = 0; i < $smileys.length; i++) {

    //   new Waypoint({
    //     element: $smileys[i],
    //     handler: function(direction) {
    //       if (direction == "down") {
    //         TweenMax.set(this.element, {perspective:400});
    //         TweenMax.from(this.element, 1, {opacity:0, yPercent:100, rotationX:-360, rotationZ:30, rotationY:-180,  scale: 0, force3D:true, ease: Back.easeOut.config(1.7)})
    //       } else if (direction == "up") {
    //         TweenMax.to(this.element, 0.5, {opacity:1, ease: Circ.easeInOut})
    //       }
    //     },
    //     offset: "80%"
    //   })
    // }

    // new Waypoint({
    //   element: $flame1,
    //   handler: function(direction) {
    //     if (direction == "down") {
    //       TweenMax.from(this.element, 1, {opacity:1,yPercent: 15, x:-400, rotation:-360, rotationZ:30, rotationY:-180,  scale: 0, force3D:true, ease: Back.easeOut.config(1.7)})
    //     } else if (direction == "up") {
    //       TweenMax.to(this.element, 0.5, {opacity:1, ease: Circ.easeInOut})
    //     }
    //   },
    //   offset: "80%"
    // });
    // new Waypoint({
    //   element: $flame2,
    //   handler: function(direction) {
    //     if (direction == "down") {
    //       TweenMax.from(this.element, 1, {opacity:1,yPercent: 15, x:400, rotation:-360, rotationZ:30, rotationY:-180,  scale: 0, force3D:true, ease: Back.easeOut.config(1.7)})
    //     } else if (direction == "up") {
    //       TweenMax.to(this.element, 0.5, {opacity:1, ease: Circ.easeInOut})
    //     }
    //   },
    //   offset: "80%"
    // });


    // for (var i = 0; i < $messageBoxes.length; i++) {

    //   new Waypoint({
    //     element: $messageBoxes[i],
    //     handler: function(direction) {
    //       if (direction == "down") {
    //         TweenMax.from(this.element, 1, {opacity:0,yPercent: 100, force3D:true, ease: Back.easeOut.config(1.7)}, .01)
    //       } else if (direction == "up") {
    //         TweenMax.to(this.element, 0.5, {opacity:1, ease: Circ.easeInOut})
    //       }
    //     },
    //     offset: "80%"
    //   })
    // }


  }

  return {
    init: init
  }
})();





window.onload = function() {

  LoaderModule.init();
  console.log('loader.init()');	

  NavModule.init();
  console.log('nav.init()');

  SplitTextModule.init();
  console.log('text.init()');

  MainAnimationModule.init();
  console.log('animations.init()');

  


};