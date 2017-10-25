$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var vowels = ["a", "e", "i", "o", "u"];
    var yVowel = ("y");
    var sentenceInput = $("input#sentence-input").val().toLowerCase();
    var splitSentence = sentenceInput.split(" ");
    alert(splitSentence);

    splitSentence.forEach(function(word) {
      for (var iVowels = 0; iVowels < vowels.length; iVowels++) {
        if (word === vowels[iVowels]) {
          console.log("yes");
        } else {
          console.log("poop");
        }
      }
    });

    // sentenceInput.forEach(function(word) {
    //     if (word[0] === ) {
    //       alert("yes");
    //     } else {
    //       alert("poop");
    //   }
    // });

  });
});
