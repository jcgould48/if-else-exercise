function isItLong(sizeOfStr) {
  if (sizeOfStr.length > 20){
 return "That's a long string!";
  } 
}

function isItMedium(sizeOfStr1) {
  if ((sizeOfStr1.length >= 10) && (sizeOfStr1.length <= 20)){
    return "That's a regular sized string!";
     } 
}

function isItShort(sizeOfStr3) {
if (sizeOfStr3.length < 10){
  return 'That\'s a small string!';
}
}

function howLongIsMyString(sizeOfStr4) {
const stringLength = sizeOfStr4.length;
if (stringLength > 20){
  return "That's a long string!";
   } 
else if ((stringLength >= 10) && (stringLength <= 20)){
    return "That's a regular sized string!";
     } 
else if(stringLength < 10){
  return 'That\'s a small string!';
}
}

function instructorHeight(nme) {
  if (nme==='Colin'){
    return 62;
  }
  else if (nme === 'Mesuara'){
    return 67;
  }
  {
  return 'I don\'t know that instructor!';}
  }

  {{   }}





module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}