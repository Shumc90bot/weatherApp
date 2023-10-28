let myName = prompt ("What is your name?");
let askQu = document.querySelector("#clickButton");
askQu.addEventListener ("click", myClick);
function myClick() {
   alert(`Welcome ${myName}`);
   const favWeather = prompt("What is your favourite weather?");
   let myImage = document.querySelector(".weatherImage");
   if (favWeather.toLowerCase() === "sunny"){
      myImage.src = "/asset/sunny.jpg";
   } else if (favWeather.toLowerCase() === "rainy") {
      myImage.src = "/asset/rainy.jpg";} 
      else if (favWeather.toLowerCase() === "cloudy") {
         myImage.src= "/asset/cloudy.jpg"
      } else {
      alert("We dont have these images.")
   }
}
