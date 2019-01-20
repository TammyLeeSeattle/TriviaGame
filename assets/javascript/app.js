// OBJECTS
// ----------------------------------------------------------------------------

    // The list of questions, answer options and the correct answer from among the answer options
    var triviaQuestions = [{
        question: "Do you have a favorite kind of dog?",
        answers: ["A soft one", "A small one", "A big one", "All dogs are my favorite"],
        correctAnswer: "All dogs are my favorite",
    }, {
        question: "What is the best part of a dog?",
        answers: ["The tummy", "The ears", "The eyes", "The feet that smell like Fritos"],
        correctAnswer: "The feet that smell like Fritos",
    }, {
        question: "When should you feed a dog?",
        answers: ["Once in the morning", "Once in the evening", "When they are hungry", "Why aren't you feeding dog all the time?"],
        correctAnswer: "Why aren't you feeding dog all the time?",
    }, {
        question: "What is a dog's favorite thing to do?",
        answers: ["Eat", "Fetch", "Snuggle", "Eat all day except when fetching and snuggling"],
        correctAnswer: "Eat all day except when fetching and snuggling",
    }, {
        question: "How many times a day can a dog wag his or her tail?",
        answers: ["10 times", "100 times", "1000 times", "Are we counting those wags when they are dreaming?"],
        correctAnswer: "Are we counting those wags when they are dreaming?",
    }, {
        question: "What color are Dalmatian puppies when they are born?",
        answers: ["Spotted", "Gray", "White", "Rainbow"],
        correctAnswer: "White",
    }, {
        question: "How many teeth does an adult dog have?",
        answers: ["As many as is needed to eat all the things", "28", "32", "42"],
        correctAnswer: "42",
    }, {
        question: "What is a dog's favorite thing to eat?",
        answers: ["Cats", "Pizza", "Bacon", "Again, why have you stopped feeding dog?"],
        correctAnswer: "Again, why have you stopped feeding dog?",
    }, {
        question: "What is the scientific name for when a dog runs around wildly, zipping back and forth, for several minutes as though they have completely lost their minds?",
        answers: ["Zoomies", "Acute Canine Epilepsy", "Frenetic Random Activity Periods (FRAPS)", "The cutest damn thing you've ever seen"],
        correctAnswer: "The cutest damn thing you've ever seen",
    }, {
        question: "What is the range for a dog's normal, healthy body temperature?",
        answers: ["98.1 to 99.6°F","99.7 to 100.9°F","101 to 102.5°F", "The temperature of the sun because they used you as a pillow for the night"],
        correctAnswer: "The temperature of the sun because they used you as a pillow for the night",
    }, {
        question: "What is the right amount of love... to love a dog?",
        answers: ["As much as a cat", "As much as a child", "As much as you can", "More than everything else in the history of existence"],
        correctAnswer: "More than everything else in the history of existence",
    }]


    // object to count correct and incorrect guesses, as well as to set and show the timer
    var gameRules = {

        // running sum of correct choices made by player
        correct: 0,

        // running sum of incorrect choices made by player
        incorrect: 0,

        // establish timer
        counter: 1000,

        // create a function to have something be able to visually represent the timer countdown somewhere on the page
        countdown: function () {
            gameRules.counter--;
            $('#counter').html(gameRules.counter);

                // end game if time runs out (aka. if counter reaches 0)
                if (gameRules.counter <= 0) {
                    console.log("Time is up!");

                    // run method that gives player of the "game Over" experience
                    gameRules.done();
                }
        },

        // start the game experience + the timer
        start: function () {

            // set a timer
            timer = setInterval(gameRules.countdown,1000);

            // update HTML to have subwrapper include the counter/timer from "countdown" method above
            $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');

            // remove "Start" button once clicked
            $('#start').remove();

            // when "Start" event happens, loop through triviaQuestions object and keep showing questions until you run out
            for (var i=0; i < triviaQuestions.length; i++) {
                $('#subwrapper').append('<h4>' + triviaQuestions[i].question + '<h4>');

                // append each question a radio type and a value that's equal to the answer
                for (var j=0; j < triviaQuestions[i].answers.length; j++) {
                    $('#subwrapper').append("<input type='radio' name='question-" + i + "' value= '" + triviaQuestions[i].answers[j] + "'>" + " " + triviaQuestions[i].answers[j] + '<br>');
                }
            }

            $('#subwrapper').append('<br> <button id="end">DONE</button>');
        },

        // must evaluate whether answer chosen is incorrect or correct
        done: function () {

            // for each question, look for any input type that has the name of question-i and is currently checked
            $.each($("input[name='question-0']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[0].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-1']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[1].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-2']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[2].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-3']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[3].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-4']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[4].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-5']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[5].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-6']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[6].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-7']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[7].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-8']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[8].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-9']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[9].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });
            $.each($("input[name='question-10']:checked"),function () {

                // if answer choice player selects matches "correctAnswer", then assign +1 to "correct" counter
                if ($(this).val()==triviaQuestions[10].correctAnswer) {
                    gameRules.correct++;
                
                // if answer choice player selects does not match "correctAnswer", then assign +1 to "incorrect" counter
                } else {
                    gameRules.incorrect++;
                }
            });

        // call the "result" function from below to show the end of the game results
        this.result();   
        },

        // define rules and behaviors around what happens at end of game
        result: function () {

            // clear/end the timer
            clearInterval(timer)

            // remove the timer
            $('#subwrapper h2').remove();

            // show results of the game
            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Number of Correct Answers: " + this.correct+ "</h3>"); // correct answers provided
            $('#subwrapper').append("<h3>Number of Incorrect Answers: " + this.incorrect+ "</h3>"); // incorrect answers provided

            // number of answers left unanswered = total number of questions minus sum of Correct + Incorrect answers
            $('#subwrapper').append("<h3>Number of unanswered Questions: " + (triviaQuestions.length - (this.incorrect + this.correct)) + "</h3>");
        }
    }



// FUNCTIONS
// ----------------------------------------------------------------------------

    // A function to show questions and answers after default landing presentation when user clicks "Start" button
    $('#start').on('click',function() {

        // start game (a method defined in the gameRules object)
        gameRules.start()

    })

    // account for the dynamic generation of this button since "end" doesn't exist
    $(document).on('click', '#end', function () {
        gameRules.done();
    })

