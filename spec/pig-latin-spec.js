var translator = require('./../js/scripts.js').translatorModule;

describe('Pig Latin', function() {
  it('should disregard non-alpha', function() {
    expect(translator("21")).toEqual("21");
  });

  it('should I to iway', function() {
    expect(translator("I")).toEqual("iway");
  });

  it('should translate by as byay', function() {
    expect(translator("by")).toEqual("byay");
  });

  it('should translate words of more than one letter that start with a vowel', function() {
    expect(translator("area")).toEqual("areaway");
  });

  it('should translate words that start with a consonant by moving all consecutive vowels to end and adding ay', function() {
    expect(translator("three")).toEqual("eethray");
  });

  it('should translate words beginning with qu by moving qu to the end and adding ay', function() {
    expect(translator("queen")).toEqual("eenquay");
  });

  it('should translate words containing qu by moving qu and all preceding consonants to the end and adding ay', function() {
    expect(translator("squeal")).toEqual("ealsquay");
  });

  it('translate words beginning with y by moving y to the end and adding ay', function() {
    expect(translator("Yvonne")).toEqual("yvonneway");
  });
});
