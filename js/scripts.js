// // Backend Logic
//
// // placesBeen.addPlace(Portland);
// // placesBeen.addPlace(Ubud);
// // placesBeen.addPlace(Boston);
//
function PlacesBeen() {
  this.place = [];
}
// //
// // place.prototype.addPlace = function(place) {
// //   place.Id = this.assignId();
// //   this.places.push(place)
// // }
// //
// // place.prototype.assignId = function () {
// //   this.currentId += 1;
// //   return this.currentId;
// // }
//
function Place(name, country, timeofyear) {
  this.name = name,
  this.country = country,
  this.timeofyear = timeofyear
}

Place.prototype.fullName = function() {
  return ("I visited " + this.name + " in " + this.country + " during " + this.timeofyear);
}

// var placesBeen = new PlacesBeen();
var Portland = new Place ("Portland", "USA", "Summer");
var Ubud = new Place ("Ubud", "Bali", "Spring");
var Boston= new Place ("Boston", "USA", "Winter");

// User Interface logic
$(document).ready(function(){
  $("#portland").click(function(){
    console.log("reached")
    console.log($("#PortlandInfo").text(Portland.fullName()));
  });
  $("#Boston").click(function(){
    console.log("reached")
    console.log($("#BostonInfo").text(Boston.fullName()));
  });
  $("#Ubud").click(function(){
    console.log("reached")
    console.log($("#UbudInfo").text(Ubud.fullName()));
  });

});
