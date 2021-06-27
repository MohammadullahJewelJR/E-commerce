$(document).ready(function(){
    $('.main-slider').owlCarousel({
        items : 1,
        autoPlay:true,
        loop:true,
        dots:true,
        responsive: true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false, 
        navigation : true,
        navigationText : [" <i class='fas fa-less-than'></i> "," <i class='fas fa-greater-than'></i>"],
        rewindNav : true,
        scrollPerPage : true,

    });
    $('.product-carousel').owlCarousel({
           // Most important owl features
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false, 

         //Transitions
        transitionStyle : true,
    });
    $('#product-slider').owlCarousel({
           // Most important owl features
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false, 


        //Transitions
        transitionStyle : false,
        
        // Other
        addClassActive : false,

        //Callbacks
        beforeInit: false, 
        afterInit: false, 
        beforeMove: false, 
        afterMove: false,
        afterAction: false,
        startDragging : false

    });
    $('.brand-carousel').owlCarousel({
        // Most important owl features
        items : 6,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,4],
        itemsTabletSmall: false,
        itemsMobile : [479,3],
        singleItem : false,
        loop: true,

        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
    
        //Autoplay
        autoPlay: true,
        stopOnHover : false,
    });
});
// JQuery Accordion


(function () {
    "use strict";
    var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
      return function (arg) {
        if (this.length > 1) {
          this.each(function () {
            var $this = $(this);
  
            if (!$this.data(ident)) {
              $this.data(ident, func($this, arg));
            }
          });
  
          return this;
        } else if (this.length === 1) {
          if (!this.data(ident)) {
            this.data(ident, func(this, arg));
          }
  
          return this.data(ident);
        }
      };
    });
  })();
  
  (function () {
    "use strict";
    function Accordion($roots) {
      var element = $roots;
      var accordion = $roots.first("[data-accordion]");
      var accordion_target = $roots.find("[data-accordion-item]");
      var accordion_content = $roots.find("[data-accordion-content]");
      $(accordion_target).click(function () {
        $(this).toggleClass("opened");
        $(this).find(accordion_content).slideToggle("slow");
        $(this).siblings().find(accordion_content).slideUp("slow");
        $(this).siblings().removeClass("opened");
      });
    }
    $.fn.Accordion = jQueryPlugin("Accordion", Accordion);
    $("[data-accordion]").Accordion();
  
    function Ripple_Button($root) {
      var elements = $root;
      var ripple_btn = $root.first("[data-ripple]");
      $(ripple_btn).on("click", function (event) {
        event.preventDefault();
        var $div = $("<div/>"),
          btnOffset = ripple_btn.offset(),
          xPos = event.pageX - btnOffset.left,
          yPos = event.pageY - btnOffset.top;
        $div.addClass("ripple-effect");
        $div.css({
          height: ripple_btn.height(),
          width: ripple_btn.height(),
          top: yPos - $div.height() / 2,
          left: xPos - $div.width() / 2,
          background: ripple_btn.data("ripple") || "#ffffff26"
        });
        ripple_btn.append($div);
  
        window.setTimeout(function () {
          $div.remove();
        }, 2000);
      });
    }
    $.fn.Ripple_Button = jQueryPlugin("Ripple_Button", Ripple_Button);
    $("[data-ripple]").Ripple_Button();
  })();
  // ******************** STORE PAGE SLIDE ************************
$(document).ready(function(){
  $('#store-drop').click(function() {
    $('#store-slide').slideToggle();
  });
  $('#store-drop-2').click(function() {
    $('#store-slide-2').slideToggle();
  });
});
// **************** Material Scroll To TOp **************
$(document).ready(function(){
	$('body').materialScrollTop();
});