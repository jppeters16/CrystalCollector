$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var numberToGuess = Math.round((Math.random() * 50) + 75);
    var ruby = Math.round((Math.random() * 10) + 2);
    var diamond = Math.round((Math.random() * 20) + 5);
    var amethyst = Math.round((Math.random() * 15) + 3);
    var emerald = Math.round((Math.random() * 5) + 1);
    $(".restartBtn").hide();

    $("#target").text("Target Number: " + numberToGuess);

    var counter = 0;

    //onclick function for first gem
    $(".gem1").on("click", function () {
        //shows number value of gem in console.log in case user forgets the value
        console.log(ruby);
        //user's number increases by first gem's value
        counter = counter + ruby;
        //rewrites total of numbers guessed so far
        $("#jewelTotal").text("You're Total So Far: " + counter);
        // if numbers picked equal the target number then wins are increased by one and an alert is given to the user congratulating them.
        if (counter === numberToGuess) {
            wins++;
            $("#win").text("Wins: " + wins);
            alert("Winner, Winner, Chicken Dinner!");
            //restart button is shown so that user can play again
            $(".restartBtn").html("Play Again?");
            $(".restartBtn").show();
        }
        //if numbers picked do not equal the target number then losses are increased by one and an alert is given to the user.
        else if (counter > numberToGuess) {
            losses++;
            $("#lose").text("Losses: " + losses);
            alert("You wen't over the number. Try again?");
            $(".restartBtn").show();
        }
    });
    //second gem function
    $(".gem2").on("click", function () {
        console.log(diamond);
        counter = counter + diamond;
        $("#jewelTotal").text("You're Total So Far: " + counter);
        if (counter === numberToGuess) {
            wins++;
            $("#win").text("Wins: " + wins);
            alert("Winner, Winner, Chicken Dinner!");
            $(".restartBtn").html("Play Again?");
            $(".restartBtn").show();
        }
        else if (counter > numberToGuess) {
            losses++;
            $("#lose").text("Losses: " + losses);
            alert("You wen't over the number. Try again?");
            $(".restartBtn").show();
        }
    });
    //third gem function
    $(".gem3").on("click", function () {
        console.log(amethyst);
        counter = counter + amethyst;
        $("#jewelTotal").text("You're Total So Far: " + counter);
        if (counter === numberToGuess) {
            wins++;
            $("#win").text("Wins: " + wins);
            alert("Winner, Winner, Chicken Dinner!");
            $(".restartBtn").html("Play Again?");
            $(".restartBtn").show();
        }
        else if (counter > numberToGuess) {
            losses++;
            $("#lose").text("Losses: " + losses);
            alert("You wen't over the number. Try again?");
            $(".restartBtn").show();
        }
    });
    //forth gem function
    $(".gem4").on("click", function () {
        console.log(emerald);
        counter = counter + emerald;
        $("#jewelTotal").text("You're Total So Far: " + counter);
        if (counter === numberToGuess) {
            wins++;
            $("#win").text("Wins: " + wins);
            alert("Winner, Winner, Chicken Dinner!");
            $(".restartBtn").html("Play Again?");
            $(".restartBtn").show();
        }
        else if (counter > numberToGuess) {
            losses++;
            $("#lose").text("Losses: " + losses);
            alert("You wen't over the number. Try again?");
            $(".restartBtn").show();
        }
    });
    //restart button that resets the user's count to zero and randomly generates new number values for the gems and target number.
    //I added this so that if the user made a mistake they could restart without refreshing the page and losing all their progress. 
    //However, this button could be abused because it doesn't update the losses value.
    $(".restartBtn").on("click", function () {
        counter = 0;
        ruby = Math.round((Math.random() * 10) + 2);
        diamond = Math.round((Math.random() * 20) + 5);
        amethyst = Math.round((Math.random() * 15) + 3);
        emerald = Math.round((Math.random() * 5) + 1);
        $("#jewelTotal").text("You're Total So Far: ");
        numberToGuess = Math.round((Math.random() * 75) + 50);
        $("#target").text("Target Number: " + numberToGuess);
    })

});
