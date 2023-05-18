const palindrome = (str)=>{
  let newStr = str.replace(/[\W_]/g, "").toLowerCase();

  const reversedStr = newStr.split("").reverse().join("");

  if (newStr !== reversedStr) {
    return false;
  } else {
    return true;
  }
}