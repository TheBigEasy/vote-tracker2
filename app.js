var flow_arr = [];
//
var Flower = function(name, path) {
	this.name = name;
	this.path = path;
	this.votes = 0;
}

//generates random number of array index 
var getRandomPhoto = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//pushes new flower objects to flow_arr
function newFlower(name, path) {
	var x = new Flower(name, path);
	flow_arr.push(x);
}

var loadPics = function() {
  var imgL = document.getElementById('imageL');
  var imgR = document.getElementById('imageR');
  
}

//creates instances of newFlower object
newFlower('flower1', 'img/flower1.jpg');
newFlower('flower2', 'img/flower2.jpg');
newFlower('flower3', 'img/flower3.jpg');
newFlower('flower4', 'img/flower4.jpg');
newFlower('flower5', 'img/flower5.jpg');
newFlower('flower6', 'img/flower6.jpg');
newFlower('flower7', 'img/flower7.jpg');
newFlower('flower8', 'img/flower8.jpg');
newFlower('flower9', 'img/flower9.jpg');
newFlower('flower10', 'img/flower10.jpg');
newFlower('flower11', 'img/flower11.jpg');
newFlower('flower12', 'img/flower12.jpg');




