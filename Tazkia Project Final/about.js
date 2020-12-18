var breakFastLinks = ["b-avocadotoast.html", "b-frenchtoast.html","b-omelet.html", "b-pancakes.html", "b-quesadilla.html"];
var lunchLinks = ["l-grilledcheese.html","l-quesadilla.html", "l-salad.html","l-sandwich.html","l-soup.html"];
var dinnerLinks = ["d-alfredo.html","d-beeftacos.html", "d-lemonchicken.html", "d-pasta.html","d-steak.html"];
var desertLinks = ["des-brownies.html", "des-cookies.html", "des-crepes.html"];


//created a class called flinks
let flinks = document.querySelectorAll('.flink');
for (var i = 0; i < flinks.length; i++) {
    flinks[i].addEventListener('click', function(event) {
         event.preventDefault();
          var linktext = event.target.textContent; //turning the button into text
          var randomNavigationLink  ="";
          //matching user input to key words to produce desired output
         if(linktext == "Breakfast"){ 
            randomNavigationLink = breakFastLinks[Math.floor(Math.random()*breakFastLinks.length)];
         }
         if(linktext == "Lunch"){
            randomNavigationLink = lunchLinks[Math.floor(Math.random()*lunchLinks.length)];
         }
         if(linktext == "Dinner"){
            randomNavigationLink = dinnerLinks[Math.floor(Math.random()*dinnerLinks.length)];
         }
         if(linktext == "Dessert"){
            randomNavigationLink = desertLinks[Math.floor(Math.random()*desertLinks.length)];
         }
         console.log(randomNavigationLink);
         window.location.href = randomNavigationLink;
    });
}
