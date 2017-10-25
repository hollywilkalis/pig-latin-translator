function translator(phrase) {
  var phraseArray = phrase.toLowerCase().split(" "); //splitting the phrase into words and converts to lower case
  var newArray = phraseArray.map(translate); //running the translate function (below)
  phrase = newArray.join(" "); //taking the result of the translate function and joining the individual words into a phrase
  return phrase.replace(/[^a-zA-Z ]/g, ""); //returning the phrase and removing any non-alpha chracters 
}

function translate(word) { //word by word
  for(var i = 0; i<word.length; i++) { //toggle for selecting the letter of the word
    if (!"aeiou".includes(word[0])) { //evaluating whether the letter at this position contains one of these letters (vowels) if it does, drop to line 17. otherwise continue to 11
      if (((word.substr(0,1) === "q")) && ((word.substr(1,1) === "u"))) {
          word = word.substr(2) + word.substr(0,2); //checks to see if letters q and u are found together - if they are, moving from beginning of the word to the end
      } else { //if it does not find "qu", moving the first letter to the end of the word
        word = word.substr(1) + word.substr(0,1);
      }
    } else { //receives from 10
      word += "ay"; //appends "ay" to the end
      return word; //returns this one word
    }
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").text(translator($("#phrase").val())+ ".");

  });
});
