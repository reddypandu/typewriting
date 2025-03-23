	$(".js-height-full").height($(window).height());
	$(".js-height-parent").each(function() {
	    $(this).height($(this).parent().first().height());
	});


	// Fun Facts
	function count($this) {
	    var current = parseInt($this.html(), 10);
	    current = current + 1; /* Where 50 is increment */

	    $this.html(++current);
	    if (current > $this.data('count')) {
	        $this.html($this.data('count'));
	    } else {
	        setTimeout(function() {
	            count($this)
	        }, 50);
	    }
	}

	$(".stat-timer").each(function() {
	    $(this).data('count', parseInt($(this).html(), 10));
	    $(this).html('0');
	    count($(this));
	});



	$('.header').affix({
	    offset: {
	        top: 100,
	        bottom: function() {
	            return (this.bottom = $('.footer').outerHeight(true))
	        }
	    }
	})

	$(window).load(function() {
	    $("#preloader").on(500).fadeOut();
	    $(".preloader").on(600).fadeOut("slow");
	});
	   // Back to top button
	   $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });