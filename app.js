var imgL, imgR;

var Photo = function(fileName, path) {
  this.fileName = fileName;
  this.path = path;
  this.votes = 0;
}
//object instances that go into array
var f1 = new Photo('flower1', 'img/flower1.jpg');
var f2 = new Photo('flower2', 'img/flower2.jpg');
var f3 = new Photo('flower3', 'img/flower3.jpg');
var f4 = new Photo('flower4', 'img/flower4.jpg');
var f5 = new Photo('flower5', 'img/flower5.jpg');
var f6 = new Photo('flower6', 'img/flower6.jpg');
var f7 = new Photo('flower7', 'img/flower7.jpg');
var f8 = new Photo('flower8', 'img/flower8.jpg');
var f9 = new Photo('flower9', 'img/flower9.jpg');
var f10 = new Photo('flower10', 'img/flower10.jpg');
var f11 = new Photo('flower11', 'img/flower11.jpg');
var f12 = new Photo('flower12', 'img/flower12.jpg');

var tracker = {
  flow_arr: [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12], 
};

tracker.randNum = function() {
// function randNum() {
	return Math.floor(Math.random() * tracker.flow_arr.length);
}

tracker.twoImages = function() {
  imgL = tracker.flow_arr[this.randNum()];
  imgR = tracker.flow_arr[this.randNum()];
	var img1 = document.getElementById('imageL');
	var img2 = document.getElementById('imageR');

	img1.src = imgL.path;
	img2.src = imgR.path;

  while (imgR === imgL){
  	console.log('dup found');
     imgR = tracker.flow_arr[this.randNum()];
  }
	console.log(imgL, imgR);
}
// console.log("imageL", imgL);
	tracker.twoImages();
 
var imgLeftButton = document.getElementById('imageL');
imgLeftButton.addEventListener('click', function() {
	console.log('imgL ' + imgL.votes);
	imgL.votes +=1;
	tracker.twoImages();
	makeChart();
	console.log(f1.votes);
});

var imgRightButton = document.getElementById('imageR');
imgRightButton.addEventListener('click', function() {
	console.log(imgR.votes);
	imgR.votes +=1;
	tracker.twoImages();
	makeChart();
	console.log('imgR ' + imgR.votes);
});
	   
var makeChart = function() {
	var data = [
	    {
	        value: f1.votes,
	        color:"#0000e7",
	        highlight: "#8282ba",
	        label: "Flower1"
	    },
	    {
	        value: f2.votes,
	        color: "#0015e7",
	        highlight: "#8282ba",
	        label: "Flower2"
	    },	
	    {
	        value: f3.votes,
	        color: "#002ae7",
	        highlight: "#8282ba",
	        label: "Flower3"
	    },
	    {
	        value: f4.votes,
	        color: "#003fe7",
	        highlight: "#8282ba",
	        label: "Flower4"
	    },
	    {
	        value: f5.votes,
	        color: "#0055e7",
	        highlight: "#8282ba",
	        label: "Flower5"
	    },
	    {
	        value: f6.votes,
	        color: "#006ae7",
	        highlight: "#8282ba",
	        label: "Flower6"
	    },
	    {
	        value: f7.votes,
	        color: "#007fe7",
	        highlight: "#8282ba",
	        label: "Flower7"
	    },
	    {
	        value: f8.votes,
	        color: "#0094e7",
	        highlight: "#8282ba",
	        label: "Flower8"
	    },
	    {
	        value: f9.votes,
	        color: "#00aae7",
	        highlight: "#8282ba",
	        label: "Flower9"
	    },
	    {
	        value: f10.votes,
	        color: "#00bfe7",
	        highlight: "#8282ba",
	        label: "Flower10"
	    },
	    {
	        value: f11.votes,
	        color: "#00d4e7",
	        highlight: "#8282ba",
	        label: "Flower11"
	    },
	    {
	        value: f12.votes,
	        color: "#00e9e7",
	        highlight: "#8282ba",
	        label: "Flower12"
	    }
	];
	var ctx = document.getElementById("myChart").getContext("2d");
	var myPolarAreaChart = new Chart(ctx).PolarArea(data);
}
makeChart();

// console.log('imageL', imgL);


