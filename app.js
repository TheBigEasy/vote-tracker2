var imgL, imgR;

//tracker object
var tracker = {
  // flow_arr: [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12], 
  flow_arr: []
};

var Photo = function(fileName, path) {
  this.fileName = fileName;
  this.path = path;
  this.votes = 0;
  tracker.flow_arr.push(this);
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



tracker.randNum = function() {
	return Math.floor(Math.random() * tracker.flow_arr.length);
};
// console.log(tracker.randNum());

tracker.twoImages = function() {
  imgL = tracker.flow_arr[this.randNum()];
  imgR = tracker.flow_arr[this.randNum()];
	var img1 = document.getElementById('imageL');
	var img2 = document.getElementById('imageR');


  while (imgR === imgL){
  	// console.log('dup found');
     imgR = tracker.flow_arr[this.randNum()];
  }
    img1.src = imgL.path;
	img2.src = imgR.path;
	// console.log(imgL, imgR);
}


// //local Storage function
// var getScore = function() {
// 	var retScore = localStorage.getItem('tracker');
// 	var parseScore = JSON.parse(retScore);
// 	// console.log(parseScore);
// 	tracker.flow_arr = parseScore;
// 	// console.dir(flow_arr);
//     makeChart();
// };

	// console.log(parseScore);

// console.log('imageL', imgL);


 
var imgLeftButton = document.getElementById('imageL');
imgLeftButton.addEventListener('click', function() {

	imgL.votes +=1;
	//put into local storage
	var stringified_flow_arr = JSON.stringify(tracker.flow_arr);
  localStorage.setItem('target', stringified_flow_arr);
  //retrieve from local storage
	var flow_arr_fromLS = localStorage.getItem('target');
	tracker.flow_arr = JSON.parse(flow_arr_fromLS);

	makeChart();
	tracker.twoImages();
	// console.log(f1.votes);
});

var imgRightButton = document.getElementById('imageR');
imgRightButton.addEventListener('click', function() {
	
	imgR.votes +=1;
	//put into local storage
	var stringified_flow_arr = JSON.stringify(tracker.flow_arr);
  localStorage.setItem('target', stringified_flow_arr);
  //retrieve from local storage
	var flow_arr_fromLS = localStorage.getItem('target');
	tracker.flow_arr = JSON.parse(flow_arr_fromLS);
	
  makeChart();
	tracker.twoImages();
	// console.log('imgR ' + imgR.votes);
});
var onloading = function() {
	if (localStorage.getItem('target') !== null) {
	var flow_arr_fromLS = localStorage.getItem('target');
	tracker.flow_arr = JSON.parse(flow_arr_fromLS);
  makeChart();
	}
	
};

var makeChart = function() {
	var data = [
	    {
	        value: tracker.flow_arr[0].votes,
	        color:"#0000e7",
	        highlight: "#8282ba",
	        label: "Flower1"
	    },
	    {
	        value: tracker.flow_arr[1].votes,
	        color: "#0015e7",
	        highlight: "#8282ba",
	        label: "Flower2"
	    },	
	    {
	        value: tracker.flow_arr[2].votes,
	        color: "#002ae7",
	        highlight: "#8282ba",
	        label: "Flower3"
	    },
	    {
	        value: tracker.flow_arr[3].votes,
	        color: "#003fe7",
	        highlight: "#8282ba",
	        label: "Flower4"
	    },
	    {
	        value: tracker.flow_arr[4].votes,
	        color: "#0055e7",
	        highlight: "#8282ba",
	        label: "Flower5"
	    },
	    {
	        value: tracker.flow_arr[5].votes,
	        color: "#006ae7",
	        highlight: "#8282ba",
	        label: "Flower6"
	    },
	    {
	        value: tracker.flow_arr[6].votes,
	        color: "#007fe7",
	        highlight: "#8282ba",
	        label: "Flower7"
	    },
	    {
	        value: tracker.flow_arr[7].votes,
	        color: "#0094e7",
	        highlight: "#8282ba",
	        label: "Flower8"
	    },
	    {
	        value: tracker.flow_arr[8].votes,
	        color: "#00aae7",
	        highlight: "#8282ba",
	        label: "Flower9"
	    },
	    {
	        value: tracker.flow_arr[9].votes,
	        color: "#00bfe7",
	        highlight: "#8282ba",
	        label: "Flower10"
	    },
	    {
	        value: tracker.flow_arr[10].votes,
	        color: "#00d4e7",
	        highlight: "#8282ba",
	        label: "Flower11"
	    },
	    {
	        value: tracker.flow_arr[11].votes,
	        color: "#00e9e7",
	        highlight: "#8282ba",
	        label: "Flower12"
	    }
	];
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data);
};
tracker.twoImages();
onloading();
// getScore();


