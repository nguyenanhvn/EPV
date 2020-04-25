jQuery(document).ready(function() {
	var width_device = jQuery(window).width();
	jQuery('.dotdotdot').dotdotdot();
	setTimeout(function(){
		jQuery('.dotdotdot').dotdotdot();
	}, 100);

	var wow = new WOW(
	  	{
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true,       // act on asynchronously loaded content (default is true)
		    callback:     function(box) {
		      // the callback is fired every time an animation is started
		      // the argument that is passed in is the DOM node being animated
		    },
		    scrollContainer: null // optional scroll container selector, otherwise use window
	  	}
	);
	wow.init();

	if(jQuery('.content-tabs_box').length > 0){
		jQuery('.content-tabs_box').mCustomScrollbar({
			axis: "x",
			horizontalScroll: true,
			advanced:{
				autoExpandHorizontalScroll:true
			}
		});		
	}

	jQuery('.content-profile .items .item .item__box').height('auto');
	jQuery('.content-profile .items .item .item__box .item__name').height('auto');

	if(jQuery(window).width() > 992){
		var height_items = 0;
		var height_heading = 0;	

		setTimeout(function(){
			for (var i = 0; i < jQuery('.content-profile .items .item').length; i++) {
				if (jQuery('.content-profile .items .item:eq('+ i +') .item__box').height() > height_items) {
					height_items = jQuery('.content-profile .items .item:eq('+ i +') .item__box').height();
				}
				if (jQuery('.content-profile .items .item:eq('+ i +') .item__box .item__name').height() > height_heading) {
					height_heading = jQuery('.content-profile .items .item:eq('+ i +') .item__box .item__name').height();
				}
			}
			jQuery('.content-profile .items .item .item__box').height(height_items);
			jQuery('.content-profile .items .item .item__box .item__name').height(height_heading);		
		}, 100);
	}

    jQuery(window).resize(function(event) {
		jQuery('.content-profile .items .item .item__box').height('auto');
		jQuery('.content-profile .items .item .item__box .item__name').height('auto');

		if(jQuery(window).width() > 992){
			var height_items = 0;
			var height_heading = 0;	

			for (var i = 0; i < jQuery('.content-profile .items .item').length; i++) {
				if (jQuery('.content-profile .items .item:eq('+ i +') .item__box').height() > height_items) {
					height_items = jQuery('.content-profile .items .item:eq('+ i +') .item__box').height();
				}
				if (jQuery('.content-profile .items .item:eq('+ i +') .item__box .item__name').height() > height_heading) {
					height_heading = jQuery('.content-profile .items .item:eq('+ i +') .item__box .item__name').height();
				}
			}
			jQuery('.content-profile .items .item .item__box').height(height_items);
			jQuery('.content-profile .items .item .item__box .item__name').height(height_heading);		
		} else {
			jQuery('.content-profile .items .item .item__box').height('auto');
			jQuery('.content-profile .items .item .item__box .item__name').height('auto');
		}
	});

	jQuery("#header").sticky({ 
		topSpacing: 0,
		bottomSpacing: jQuery('#footer').height() + 60,
		getWidthFrom: '50'
	});

	jQuery(window).resize(function(event) {
		jQuery("#header").sticky('update');

		if(jQuery(window).width() > 992){	
			jQuery("#header").sticky({ 
				topSpacing: 0,
				bottomSpacing: jQuery('#footer').height() + 60,
				getWidthFrom: '50'
			});
		} else {
	    	jQuery("#header").unstick();
		}
	});	

	// Number animation
    if(jQuery('.box__circle__number__animation').length > 0){
	  	var a = 0;
	  	var oTop = jQuery('.box__circle__number__animation').offset().top - window.innerHeight;

	  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  
		  	jQuery({ countNum: jQuery('.box__circle__number__animation .items > li:eq(0) .number span').text()}).animate({
		    	countNum: jQuery('.box__circle__number__animation .items > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(0) .number span').text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(0) .number span').text(this.countNum);
			    }
		  	});		 
		  	jQuery({ countNum1: jQuery('.box__circle__number__animation .items > li:eq(1) .number span').text()}).animate({
		    	countNum1: jQuery('.box__circle__number__animation .items > li:eq(1)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(1) .number span').text(Math.floor(this.countNum1));
			    },
			    complete: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(1) .number span').text(this.countNum1);
			    }
		  	});		 
		  	jQuery({ countNum2: jQuery('.box__circle__number__animation .items > li:eq(2) .number span').text()}).animate({
		    	countNum2: jQuery('.box__circle__number__animation .items > li:eq(2)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(2) .number span').text(Math.floor(this.countNum2));
			    },
			    complete: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(2) .number span').text(this.countNum2);
			    }
		  	});		 
		  	jQuery({ countNum3: jQuery('.box__circle__number__animation .items > li:eq(3) .number span').text()}).animate({
		    	countNum3: jQuery('.box__circle__number__animation .items > li:eq(3)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(3) .number span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(3) .number span').text(this.countNum3);
			    }
		  	});		 
		  	jQuery({ countNum4: jQuery('.box__circle__number__animation .items > li:eq(4) .number span').text()}).animate({
		    	countNum4: jQuery('.box__circle__number__animation .items > li:eq(4)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(4) .number span').text(Math.floor(this.countNum4));
			    },
			    complete: function() {
			      	jQuery('.box__circle__number__animation .items > li:eq(4) .number span').text(this.countNum4);
			    }
		  	});			  
	    	a = 1;
	  	}
		jQuery(window).scroll(function() {
		  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  		
		  
		  	jQuery({ countNum: jQuery('.countnumber > li:eq(0) .circle span').text()}).animate({
		    	countNum: jQuery('.countnumber > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(this.countNum);
			    }
		  	});
			  
		  	jQuery({ countNum1: jQuery('.countnumber > li:eq(1) .circle span').text()}).animate({
		    	countNum1: jQuery('.countnumber > li:eq(1)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(Math.floor(this.countNum1));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(this.countNum1);
			    }
		  	});
			  
		  	jQuery({ countNum2: jQuery('.countnumber > li:eq(2) .circle span').text()}).animate({
		    	countNum2: jQuery('.countnumber > li:eq(2)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(Math.floor(this.countNum2));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(this.countNum2);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(3) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(3)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(this.countNum3);
			    }
		  	});
		    	a = 1;
		  	}
		});
	}

	jQuery(document).on('click', '.small-breadcrumbs .current-page', function(event) {
		event.preventDefault();
		jQuery(this).closest('.box').toggleClass('open');
	});

	jQuery('.btn-informa span').click(function(){
        jQuery(this).toggleClass('active');
        jQuery('.sticky .show-sticky').slideToggle('slow');
    });


	if(jQuery('section.small-breadcrumbs').length > 0){
		var wi = jQuery('section.small-breadcrumbs .box .parent').width() + 1;
		var wy = wi + 15;
		jQuery('section.small-breadcrumbs .box .parent').css("width", wi + "px");
		jQuery('section.small-breadcrumbs .box .box-scroll-horizontal').css("width", "calc(100% - " + wi +"px)");
		jQuery('section.small-breadcrumbs .box .show-mobile.current-page').parent().css("width", "calc(100% - " + wi +"px)");
		jQuery('section.small-breadcrumbs .box .menu-breadcrumbs li').css("padding-left", wy +"px");
	}
	if(width_device < 768){
		if(jQuery('section.small-breadcrumbs').length > 0){
			var wi = jQuery('section.small-breadcrumbs .box .parent').width() + 1;
			var wy = wi + 15;
			jQuery('section.small-breadcrumbs .box .parent').css("width", wi + "px");
			jQuery('section.small-breadcrumbs .box .box-scroll-horizontal').css("width", "calc(100% - " + wi +"px)");
			jQuery('section.small-breadcrumbs .box .show-mobile.current-page').parent().css("width", "calc(100% - " + wi +"px)");
			jQuery('section.small-breadcrumbs .box .menu-breadcrumbs li').css("padding-left", wy +"px");
		}
	}

    /*=================================================
        					Custom
	=====================================================*/
    jQuery(window).load(function() {   
        jQuery(".fr-loading").delay(1000).fadeOut("slow");
    });

	// Menu
	jQuery('#dark-shadow, #menu-mobile .toggle-action').click(function(event) {
		jQuery('#header-responsive .bottoms .menu').removeClass('active');
		jQuery('#menu-mobile').removeClass('active');
		jQuery('#dark-shadow').removeClass('active');
		jQuery('body').removeClass('none-scroll');
	});

    jQuery(document).on('click', '#header-responsive .bottoms .menu', function(event) {
    	event.preventDefault();
		jQuery(this).addClass('active');
		jQuery(this).parent().find('.box-menu').addClass('active');
		jQuery('#menu-mobile').addClass('active');
		jQuery('#header-responsive .bottoms .book, #header-responsive .bottoms .box-book').removeClass('active');
		jQuery('#dark-shadow').addClass('active');
		jQuery('body').addClass('none-scroll');
    });

	jQuery(document).on('click', '#menu-mobile .fr-menu > .menu-item-has-children', function(event) {
		if(jQuery(this).hasClass('open')){
			jQuery(this).removeClass('open');
			jQuery(this).find('> ul').slideUp(300);
		}else{			
			jQuery(this).addClass('open');
			jQuery(this).find('> ul').slideDown(300);
		}
	});

    jQuery(document).on('click', '.box-menu .list-menu > .menu-item-has-children ul', function(event) {
    	event.stopPropagation();
    });

    if(jQuery('.box__items__slider').length > 0){
		jQuery('.box__items__slider').owlCarousel({
		    loop:true,
		    margin: 10,
		    autoplayTimeout:5000,
		    nav: false,
		    autoplay: false,
		    rewind: true,
		    dots: false,
	        lazyLoad:true,
			autoplayHoverPause:true,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dragEndSpeed: 700, 
			responsive:{
				0:{
				    items: 3,
				},
		        450:{
		        	items: 4,
		        },
		        992:{
				    items: 6,
		        },
		        1200:{
				    items: 7,
		        }
		    },
		});
	}

    if(jQuery('.news__slider').length > 0){
		jQuery('.news__slider').owlCarousel({
		    loop:true,
		    margin: 10,
		    autoplayTimeout:5000,
		    nav: true,
		    autoplay: false,
		    rewind: true,
		    dots: true,
	        lazyLoad:true,
			autoplayHoverPause:true,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dragEndSpeed: 700, 
		  	navText: ['<div class="slider__prev"></div>','<div class="slider__next"></div>'],   
			responsive:{
				0:{
				    items: 1,
				},
		        992:{
		        	items: 2,
		        },
		        1200:{
				    items: 3,
		        },
		    },
		});
	}

    if(jQuery('.media__slider').length > 0){
		jQuery('.media__slider').owlCarousel({
		    loop:true,
		    margin: 10,
		    autoplayTimeout:5000,
		    nav: true,
		    autoplay: false,
		    rewind: true,
		    dots: true,
	        lazyLoad:true,
			autoplayHoverPause:true,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dragEndSpeed: 700, 
		  	navText: ['<div class="slider__prev"></div>','<div class="slider__next"></div>'],   
			responsive:{
				0:{
				    items: 1,
				},
				450:{
				    items: 3,
				},
				767:{
				    items: 4,
				},
		        992:{
		        	items: 5,
		        },
		        1200:{
				    items: 6,
		        },
		    },
		});
	}

    if(jQuery('.box__circle__ipad .items').length > 0){
		jQuery('.box__circle__ipad .items').owlCarousel({
		    loop:false,
		    margin: 0,
		    autoplayTimeout:5000,
		    nav: true,
		    autoplay: false,
		    rewind: true,
		    dots: true,
	        lazyLoad:true,
			autoplayHoverPause:true,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dragEndSpeed: 700, 
		  	navText: ['<div class="slider__prev"></div>','<div class="slider__next"></div>'],   
		    // autoWidth:true,
		    center:true,
			responsive:{
				0:{
				    items: 2,
				},
		        500:{
		        	items: 3,
		        }
		    },
		});
	}

	// News & Media
	jQuery('.content-news-style2 .item__left').slick({
	  	arrows: false,
	  	asNavFor: '.content-news-style2 .item__right, .content-news-style2 .item__bottom',
	    fade: true,
		cssEase: 'linear',
		swipe: false,
		speed: 1000,
	});
	jQuery('.content-news-style2 .item__right').slick({
	  	asNavFor: '.content-news-style2 .item__left, .content-news-style2 .item__bottom',
	  	slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="tw__prev"><span></span></div>',
	    nextArrow: '<div class="tw__next"><span></span></div>',
	    fade: true,
		cssEase: 'linear',
		customPaging: function(slider, i) { 
	        return '<div class="tw__number">0</div><div class="tw__dot">0' + (i + 1) + '</div>';
	    },
	    swipe: false,
	    autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		responsive: [
		    {
		      breakpoint: 1920,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
			  	arrows: true,
		        dots: true,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
			  	arrows: false,
		        dots: false,
			    swipe: true,
		      }
		    }
		]
	});
	jQuery('.content-news-style2 .item__bottom').slick({
	 	arrows: false,
	  	asNavFor: '.content-news-style2 .item__left, .content-news-style2 .item__right',
	  	focusOnSelect: false,
	  	slidesToShow: 1,
	  	touchMove: false,
	    fade: true,
		cssEase: 'linear',
		swipe: false,
		speed: 1000,
	});

	// Exhibiting
	jQuery('.content-testimonials .item__avatar__main').slick({
	  	arrows: false,
	  	asNavFor: '.content-testimonials .item__reviews, .content-testimonials .item__avatar__child',
	    fade: true,
		cssEase: 'linear',
		swipe: false,
		speed: 1000,
		responsive: [
		    {
		      breakpoint: 1920,
		      settings: {
			  	dots: false,
				swipe: false,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
			  	dots: true,
				swipe: true,
		      }
		    }
		]
	});
	jQuery('.content-testimonials .item__avatar__child').slick({
	 	arrows: true,
	  	asNavFor: '.content-testimonials .item__avatar__main, .content-testimonials .item__reviews',
		prevArrow: '<div class="tw__prev"><span></span></div>',
	    nextArrow: '<div class="tw__next"><span></span></div>',
		cssEase: 'linear',
	    swipe: false,
		speed: 1000,
        dots: false,
		responsive: [
		    {
		      breakpoint: 1920,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
			  	arrows: true,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
			    swipe: true,
		      }
		    }
		]
	});
	jQuery('.content-testimonials .item__reviews').slick({
	  	asNavFor: '.content-testimonials .item__avatar__main, .content-testimonials .item__avatar__child',
	  	dots: false,
	  	focusOnSelect: false,
	  	slidesToShow: 1,
	  	touchMove: false,
	    fade: true,
	    arrows: false,
		cssEase: 'linear',
		swipe: false,
		speed: 1000,
	});
});

function header(){
	var x = 0;
	if(jQuery(this).scrollTop() > 100)
    {  	
	    jQuery('#header').addClass('active');
	    x = jQuery(window).height() - 61;
    }
    else
    {
      	jQuery('#header').removeClass('active');
	    x = jQuery(window).height() - 91;
    }      
	jQuery('#header .box-menu .menu-top').height(x - 360);
}