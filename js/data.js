
$(document).ready(function(){

	var appendSeats = '<button class="seatSelection">Select Seats</button></td>';
	var duration = '<img src="../images/arrow.png">';
	var seatsTxt = '<span>SEATS</span>';
	var leftTxt = '<span>LEFT</span>';
	
	$("button#Search").on('click',function(){  
		var fromText =  $("#fromLabel").val();
		var toText   =  $("#toLabel").val();
		var fromDate =  $("#fromDate").val();
		var toDate   =  $("#toDate").val();
		$(".headerBar ul li:nth-child(1) label:eq(0)").html(fromText);
		$(".headerBar ul li:nth-child(1) label:eq(2)").html(toText);
		$(".headerBar ul li:nth-child(1) label:eq(4)").html(fromDate);
		$(".headerBar ul li:nth-child(1) label:eq(5)").html(toDate);
	});
	
	
	$.each(datalistOptions,function(i,v){
		$("#fromNames,#toNames").append('<option value=\''+datalistOptions[i].City+'\'>');
		
	});
	$.each(busDetails,function(k,j){
			
			if(busDetails[k].Type=='AC')
			{
				$(".travelDetails").append("<tr><td>"+busDetails[k].busName+"</td><td>"+busDetails[k].FromTime+"</td><td>"+duration+"</td><td>"+busDetails[k].toTime+"</td><td>"+busDetails[k].Price+"</td><td>"+seatsTxt+"<span>" +busDetails[k].Seats+"</span><span>"+leftTxt+"</span></td><td>"+busDetails[k].Type+"</td><td>"+appendSeats+"</td></tr>");
				
			}
	});
	
	var acbool = $('#acBus').prop('checked'); 
	var nonacbool = $('#nonacBus').prop('checked'); 
	var sleeperbool = $('#sleeperBus').prop('checked'); 
	
	
	$("#acBus").change(function() {
        if($(this).is(":checked")) {
        	
        	$.each(busDetails,function(k,j){
        		
    			if(busDetails[k].Type=='AC')
    				{
    				
    				$(".travelDetails").append("<tr><td>"+busDetails[k].busName+"</td><td>"+busDetails[k].FromTime+"</td><td>"+duration+"</td><td>"+busDetails[k].toTime+"</td><td>"+busDetails[k].Price+"</td><td>"+seatsTxt+"<span>" +busDetails[k].Seats+"</span><span>"+leftTxt+"</span></td><td>"+busDetails[k].Type+"</td><td>"+appendSeats+"</td></tr>");
				
    				}
        	});
        }
        else
        	{
        		$(".travelDetails tr").each(function(i,e){
        			if($(this).find('td:eq(6)').text()=='AC')
        				{
        				 $(this).remove();
        				}
						
						
        		});
        	}
	});

	$("#nonacBus").change(function() {
        if($(this).is(":checked")) {
        	
        	$.each(busDetails,function(k,j){
        		
    			if(busDetails[k].Type=='NON-AC')
    				{
    					$(".travelDetails").append("<tr><td>"+busDetails[k].busName+"</td><td>"+busDetails[k].FromTime+"</td><td>"+duration+"</td><td>"+busDetails[k].toTime+"</td><td>"+busDetails[k].Price+"</td><td>"+seatsTxt+"<span>" +busDetails[k].Seats+"</span><span>"+leftTxt+"</span></td><td>"+busDetails[k].Type+"</td><td>"+appendSeats+"</td></tr>");
					}
        	});
        }
        else
        	{
        		$(".travelDetails tr").each(function(i,e){
        			if($(this).find('td:eq(6)').text()=='NON-AC')
        				{
        				 $(this).remove();
        				}
						
        		});
        	}
	});
	
	$("#sleeperBus").change(function() {
        if($(this).is(":checked")) {
        	
        	$.each(busDetails,function(k,j){
        		
    			if(busDetails[k].Type=='SLEEPER')
    				{
    					$(".travelDetails").append("<tr><td>"+busDetails[k].busName+"</td><td>"+busDetails[k].FromTime+"</td><td>"+duration+"</td><td>"+busDetails[k].toTime+"</td><td>"+busDetails[k].Price+"</td><td>"+seatsTxt+"<span>" +busDetails[k].Seats+"</span><span>"+leftTxt+"</span></td><td>"+busDetails[k].Type+"</td><td>"+appendSeats+"</td></tr>");
					}
        	});
        }
        else
        	{
        		$(".travelDetails tr").each(function(i,e){
        			if($(this).find('td:eq(6)').text()=='SLEEPER')
        				{
        				 $(this).remove();
        				}
						
        		});
        	}
	});
	
	$('ul.stars span img').hover(function(event){
		 originalImg = $("img").attr('src', '../images/whiteStar.png');
		 newImg = $(this).attr('src', '../images/full_Star.png');
			
		 if (originalImg) 
		{
			$(this).prevAll().append(newImg);
						    
		}                                                                                                                         
	});
	
	
	$("header ul li:nth-child(1) img").hover(function()
	{
		$(this).attr('src','../images/flight-Actve.png');
	},function(){
		$(this).attr('src','../images/flight.png');
	});

	$("header ul li:nth-child(2) img").hover(function()
	{
		$(this).attr('src','../images/hotelActve.png');

	},function(){
		$(this).attr('src','../images/hotel.png');
	});
	
	$("header ul li:nth-child(3) img").hover(function()
	{
		$(this).attr('src','../images/holidayActve.png');

	},function(){
		$(this).attr('src','../images/holidays.png');
	});
	
	$("header ul li:nth-child(4) img").hover(function()
	{
		$(this).attr('src','../images/busActive.png');

	},function(){
		$(this).attr('src','../images/bus.png');
	});
	
	$("header ul li:nth-child(5) img").hover(function()
	{
		$(this).attr('src','../images/flight+hotelActve.png');

	},function(){
		$(this).attr('src','../images/flight+hotel.png');
	});
	
	$("header ul li:nth-child(6) img").hover(function()
	{
		$(this).attr('src','../images/moreActve.png');

	},function(){
		$(this).attr('src','../images/more.png');
	});
	
	
	$('.busSortDetails li:nth-child(6)').hover(function(){
		$('#busType').each(function(){
		$('.busSortDetails li:nth-child(6)').append($('#busType'));
		$('#busType').css('display','block');
	});
	});

/*	$(function() {
    $("img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "over.gif";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("over.gif", ".gif");
            $(this).attr("src", src);
        });
});*/








});