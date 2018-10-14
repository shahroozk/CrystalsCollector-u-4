

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function (){

 $(".crystals").empty();   

 var images = [
              'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
              'http://mbch.guide/wp-content/uploads/crystal_premium.png',
              'https://mbch.guide/wp-content/uploads/crystal_cosmic.png',
              'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/10/Arena_Crystal.png/revision/latest?cb=20150825214845'
               ];
 
 random_result = Math.floor(Math.random() * 120 + 19);
 
 console.log(random_result);
  
 $("#result").html('Random Result: '+ random_result);

    for (var i = 0; i<4; i++){
    
    var random = Math.floor(Math.random() * 12 + 1);
    // console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
             "background-size":"cover"   
        });

   
     $(".crystals").append(crystal);

     }
     $("#previous").html("Score:" + previous);

}
resetAndStart();

// Event Delegation

$(document).on("click", ".crystal",function(){

    var num =parseInt($(this).attr("data-random"));
    
    previous += num;

    console.log(previous);

    $("#previous").html("Score:" +previous);

    if(previous > random_result){
        
        lost++;
        console.log("you lost!!")
        $("#lost").html("lost: "+  lost);
        
        previous = 0;

        alert("You Lost!");


        resetAndStart();
    }

    else if(previous === random_result){
        
        win++;
        console.log("you win!!!!")

        $("#win").html("win:" + win);

        previous = 0;

        alert("Nice Job, You Win!");


        resetAndStart();
    }
    

});