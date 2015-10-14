var imgL, imgR;

var Photo = function(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
}

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
  imgL = tracker.flow_arr[this.randNum()].path;
  imgR = tracker.flow_arr[this.randNum()].path;

  while (imgR === imgL){
  	console.log('dup found');
     imgR = tracker.flow_arr[this.randNum()].path;
  }
	console.log(imgL, imgR);
}

var img1 = document.getElementById('imageL');
var img2 = document.getElementById('imageR');
tracker.twoImages();

img1.src = imgL;
img2.src = imgR;

