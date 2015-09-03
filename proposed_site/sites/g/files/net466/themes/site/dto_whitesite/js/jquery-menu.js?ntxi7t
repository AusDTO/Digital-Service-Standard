//highcharts
jQuery(function () {
    jQuery('#container').highcharts({
	    colors: ['#015a96', '#333333'],
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Dissatisfaction having to interact digitally with the Federal government by age'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Percentage'
            }
        },
        xAxis: {
            allowDecimals: false,
            title: {
                text: 'Age'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + '% ' + this.point.name.toLowerCase();
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        credits: {
            enabled: false
        }
    });
});


jQuery(document).ready(function() {
   
    jQuery('.mobile-nav').click(function() {
        jQuery('body').toggleClass('show');
    });
	jQuery('.menu-open').click(function() {
        jQuery('body').removeClass('show');
   	});	
   	
   		
   	jQuery('.sb-icon-search').click(function() {
        jQuery('body').toggleClass('search-open');
        jQuery('.sb-icon-search').toggleClass('close');
        
        if (jQuery('.sb-icon-search').hasClass('close')){
	        jQuery( "#edit-keys-1" ).focus();
           
        } else {
	        jQuery( ".sb-icon-search" ).focus();
	        jQuery( ".sb-icon-search" ).focus();
          }
    });
	
});

//recruitment menu sticky
jQuery(function(){
	
    var stickyHeaderTop = jQuery('.region-recruitment').offset().top;

    jQuery(window).scroll(function(){
            if( jQuery(window).scrollTop() > stickyHeaderTop ) {
                jQuery('body').addClass('recruit-sticky');
            } else {
                jQuery('body').removeClass('recruit-sticky');
            }
    });
});


jQuery(document).ready(function($) {
 
	$(".anchor-scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});
});


/*
twttr.events.bind('rendered',function(){
  [].slice.call(document.querySelectorAll('iframe.twitter-timeline')).forEach(function(e,i,a){
    var fE = e.contentDocument.getElementsByClassName('timeline');
    if(fE.length){
      fE[0].style.maxWidth='720px';
    }
  });
});
*/


jQuery(document).ready(function() {
		jQuery('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		closeBtnInside: true,
		closeOnBgClick: false,
		fixedContentPos: false,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
						'<div class="video-header"><a href="/transcript-recruitment-video">Read transcript</a></div>'+
            			'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'</div>'
				
		}
	});
	jQuery('.popup-youtube').click(function() {
        jQuery('html, body').animate({ scrollTop: 0 }, 0);
        jQuery("body").css("overflow", "hidden");
        
	    jQuery('button').click(function() {
	        jQuery("body").css("overflow", "auto");
	    });
    });
    
});


