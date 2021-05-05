// add solution here
function theBeatlesPlay(member,instrument) { 
  var sentences = []
  for (let i = 0; i < member,length; i++) {
    sentences[i] = `${member[i]} plays ${instrument[i]}`
  
  }
  return sentences
}


 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

console.log(theBeatlesPlay(musicians,instruments))