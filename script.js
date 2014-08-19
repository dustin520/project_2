$(function () {

	$("#oneOne").on('click', function() {
		$('#oneOne').fadeOut(500).fadeIn(500);
	});

	$("#oneTwo").on('mouseover', function() {
		$('#oneTwo').slideUp(400).slideDown(400);
	});

	$("#oneThree").on('click', function() {
		$('#oneThree').fadeOut(400).fadeIn(400);
	});

	$("#twoOne").on('click', function() {
		$('#twoOne').slideUp(500).slideDown(500);
	});

	$("#twoTwo").on('click', function() {
		$('#twoTwo').slideUp(600).slideDown(600);
	});

	$("#twoThree").on('click', function() {
		$('#twoThree').fadeOut(500).fadeIn(500);
	});

	$("#threeOne").on('click', function() {
		$('#threeOne').fadeOut(500).fadeIn(500);
	});

	$("#threeTwo").on('mouseover', function() {
		$('#threeTwo').fadeOut(500).fadeIn(500);
	});

	$("#threeThree").on('click', function() {
		$('#threeThree').slideUp(350).fadeIn(350);
	});

	$("#fourOne").on('click', function() {
		$('#fourOne').slideUp(350).slideDown(500);
	});

	$("#fourTwo").on('click', function() {
		$('#fourTwo').fadeOut(500).fadeIn(500);
	});

	$("#fourThree").on('mouseover', function() {
		$('#fourThree').fadeOut(420).fadeIn(420);
	});

	$("#fiveOne").on('click', function() {
		$('#fiveOne').fadeOut(420).fadeIn(500);
	});

	$("#fiveTwo").on('mouseover', function() {
		$('#fiveTwo').slideUp(500).slideDown(500);
	});

	$("#fiveThree").on('click', function() {
		$('#fiveThree').slideDown(500).slideUp(500);
	});

	$("#sixOne").on('mouseover', function() {
		$('#sixOne').slideUp(500).slideDown(500);
	});

	$("#sixTwo").on('click', function() {
		$('#sixTwo').fadeOut(500).fadeIn(500);
	});

	$("#sixThree").on('click', function() {
		$('#sixThree').slideUp(500).slideDown(500);
	});

	$("#canvas").on('click', function(){
		$('#canvas').fadeOut(3000)
	})


});

function draw() {
	var canvas = document.getElementById("canvas");

	var img = new Image();

	// User Variables - customize these to change the image being scrolled, its
	// direction, and the speed.

	img.src = 'http://media02.hongkiat.com/panoramic_photos/night_panorama_nyc.jpg';
	var CanvasXSize = 1500;
	var CanvasYSize = 200;
	var speed = 30; //lower is faster
	var scale = 1.05;
	var y = -4.5; //vertical offset

	// Main program

	var dx = 0.75;
	var imgW;
	var imgH;
	var x = 0;
	var clearX;
	var clearY;
	var ctx;

	img.onload = function() {
	    imgW = img.width*scale;
	    imgH = img.height*scale;
	    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
	    if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
	    else { clearX = CanvasXSize; }
	    if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
	    else { clearY = CanvasYSize; }
	    //Get Canvas Element
	    ctx = document.getElementById('canvas').getContext('2d');
	    //Set Refresh Rate
	    return setInterval(draw, speed);
	}

	function draw() {
	    //Clear Canvas
	    ctx.clearRect(0,0,clearX,clearY);
	    //If image is <= Canvas Size
	    if (imgW <= CanvasXSize) {
	        //reset, start from beginning
	        if (x > (CanvasXSize)) { x = 0; }
	        //draw aditional image
	        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
	    }
	    //If image is > Canvas Size
	    else {
	        //reset, start from beginning
	        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
	        //draw aditional image
	        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
	    }
	    //draw image
	    ctx.drawImage(img,x,y,imgW,imgH);
	    //amount to move
	    x += dx;
	}

}

