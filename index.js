// add solution here
function theBeatlesPlay(member,instrument) { 
  var sentences = []
  for (let i = 0; i < member.length; i++) {
    sentences[i] = `${member[i]} plays ${instrument[i]}`
  
  }
  return sentences
}



function johnLennonFacts(array) {

  var i = array.length - 1
  var newarray = []
  while (i >= 0) {
    newarray[i] = array[i] + "!!!"
    i--
      }
  
  
}


console.log( (johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])))