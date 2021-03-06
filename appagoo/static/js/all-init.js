/*jQuery time*/
$(document).ready(function(){
  // customize all inputs (will search for checkboxes and radio buttons)

  
  $('#categories .btn').click(function() {
    if ($(this).hasClass('unchosen')) {
      $(this).detach().prependTo("#categories-selected-tags").removeClass('unchosen').addClass('chosen');
    } else {
      $(this).detach().prependTo("#categories-unselected-tags").removeClass('chosen').addClass('unchosen');

    }
  });

  $('input').iCheck({checkboxClass: 'icheckbox_flat'});
  $('input.slider').slider({tooltip:'hide'});

  //
  // jQuery SmoothScroll | Version 18-04-2013
  //

  $('.smooth-scroll a[href*=#], a[href*=#].smooth-scroll').click(function() {

     // skip SmoothScroll on links inside accordion titles or scroll boxes also using anchors or if there is a javascript call
     //if($(this).parent().hasClass('accordion-title1')  || $(this).parent().hasClass('accordion-title2') || $(this).attr('href').indexOf('javascript')>-1) return;

      // Make sure to unfold the node if it's collapsed
      // Note that uncollapsing is done the "rude" way by adding the "in" class
      // Using .collapse('show') would trigger the opening animation, preventing the correct
      // page scrolling effect.
     if($(this).parent().parent().hasClass('nav')) { // test the UL
      // Unfold the node
      var unfold = $(this).attr('href'); //id of the "title" node          
      $(unfold).next().addClass('in'); //collapse('show'); //next node is the content to unfold
     }
     // A menu / nav element of level 2 has been clicked, unfold its parent
     if($(this).parent().parent().hasClass('subnav')) { // test the UL
      // Unfold the parent to make sure that we can jump to this section
      var unfold = $(this).parent().parent().prev().attr('href'); //id of the "title" node          
      $(unfold).next().addClass('in');//.collapse('show'); //next node is the content to unfold
     }

     // duration in ms
     //var duration=500;

     // easing values: swing | linear
     var easing='swing';

     // get / set parameters
     var newHash=this.hash;
     var oldLocation=window.location.href.replace(window.location.hash, '');
     var newLocation=this;

     // make sure it's the same location      
     if(oldLocation+newHash==newLocation)
     {
        // get target
        var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;

        // adjust target for anchors near the bottom of the page
        if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();

        // duration (in ms) is distance-dependent., with a max of 1 sec
        var duration = Math.min(.8 * Math.abs(target-$(document).scrollTop()),1000);

        // animate to target and set the hash to the window.location after the animation
        $('html, body').animate({ scrollTop: target }, duration, easing, function() {

           // add new hash to the browser location
           window.location.href=newLocation;
        });

        // cancel default click action
        return false;
     }
  });

  // $(".has-video").fitVids();
  $('.image-popup').magnificPopup({
   type:'image'
  });

});


