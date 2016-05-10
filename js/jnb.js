    

    $(document).ready(function(){
    	var flag = true;


    	$(".down-arrow").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:($(".icon-wrapper").offset().top)}, 500,'easeInOutCirc');
    });

		
		$(".flex-item").click(function(event){  
			console.log($(this).attr('id') )
			if (flag) {
				var icon = $(this).find(".container");
				var goTo = "http://www.dresdner-nachtwanderung.de";
				icon.animate({height: (icon.height()*1.5),width: (icon.width()*1.5)},800, "easeOutElastic");

				setTimeout(function(){	
					flag = true;
					icon.animate({height: (icon.height()/1.5),width: (icon.width()/1.5)},800, "easeOutElastic");
					if(icon.attr('id') == "0") goTo = "http://www.dresdner-studententage.de/2016/veranstaltungen"
					if(icon.attr('id') == "1") goTo = "http://www.vdsc.de"
         			window.location = goTo;
    			},1200);       
			}
				flag = false;


		});

    });