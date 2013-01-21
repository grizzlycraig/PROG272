/**
 * @author Craig Mills, from a template by Charlie Calvert
 */

var MyPage = (function() {
    'use strict';
	var images = ["BunnyBoing.gif", "bunny_leap.jpg", "bunny_in_cup.jpg", "HoverCat.jpg"];
	var imgAlts = ["Bunny Yikes!", "Bunny Up, up and away!", "Bunny in a Cup", "Cat Hovering"];
	var imgWidths = [ 144, 594, 612, 450];
	var imgHeights = [ 192, 542, 816, 350];
	var imgs = [];
	
    function MyPage() { 
    	// Initializes images        
        for (var i = 0; i < images.length; i++) {
        	imgs[i] = new Image();
        	imgs[i].src = images[i];   
        };
        // Call private methods without using this.
//        run();                	     	
    };

	// Private method for loading images
	var setImage = function (imageIndex) {				
	   	$("#myImage").attr({
	   		src: imgs[imageIndex].src        	
	    }); 
	   	$("#myImage").attr({
	   		alt: imgAlts[imageIndex]        	
	    }); 
	   	$("#myImage").attr({
	   		width: imgWidths[imageIndex]        	
	    }); 
	   	$("#myImage").attr({
	   		height: imgHeights[imageIndex]        	
	    }); 
		$("#myImage").attr({
	   		display: "inline"
	    }); 
	}; 

	// Private method to initialize application
    MyPage.prototype.run = function() {
//	var run = function () {
		setImage(0);
    };      

	// For EACH button, we will do something a bit different 
	MyPage.prototype.runButton1 = function () {
       	$("#changeMe").html("or... Clicky, Clicky!");
       	$(".rainbow").css( { "backgroundColor": "lightblue", color: "blue" } );
       	$("body").css( { "backgroundColor": "#FF99FF" } );
		//		alert("Hoooo yah!");    
		loadList(1);
		setImage(1);       	    	
		};      
	MyPage.prototype.runButton2 = function () {
    //	$("#myHeading").html("This is my heading");
		$("#changeMe").html("Two for the money...")
       	$(".rainbow").css( { "backgroundColor": "red", color: "lime" } );
		$("#caption").css
       	$("body").css( { "backgroundColor": "grey" } );
		loadList(2);
		setImage(2);       	    	
    };      
	MyPage.prototype.runButton3 = function () {
    //	$("#myHeading").html("This is my heading");
	   	$("#changeMe").html("and three to let GOOoooo...")
       	$(".rainbow").css( { "backgroundColor": "orange", color: "black" } );
       	$("body").css( { "backgroundColor": "teal" } );
       	loadList(3);
		setImage(3);       	    	
    };      
	
	var loadList = function( howMany ) {
	   	$("#myList").empty();
       	for (var i = 1; i <= howMany; i++) {
       		$("#myList").append("<li>List Item " + i.toString() + "</li>");
		}
    }
	
	

    return MyPage;
})();

// This will be called when page is ready
$(document).ready(function() {	
	var myPage = new MyPage();
	myPage.run();
	$("#myButton1").click(myPage.runButton1);
	$("#myButton2").click(myPage.runButton2);
	$("#myButton3").click(myPage.runButton3);
	
});
