const changeWords = (str) => {
  let change_1 = "";
  let change_2 = str.split(" ");
  
  for (let i = 0; i < change_2.length; i++) {
    if (change_1) change_1 += ' ';
    if (change_2[i].length >= 5) {
      change_1 += change_2[i].split("").reverse().join("");
    } else {
      change_1 += change_2[i];
    }
  }
  return change_1;
};

alert(changeWords( "Hey fellow interns" )); //=> returns Hey wollef snretni
alert(changeWords( "This is a test")); //This is a test
alert(changeWords( "This is another test" )); //This is rehtona test
