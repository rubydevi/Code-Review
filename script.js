const palindrome = (str)=>{
  str = str.replace(/[\W_]/g, "").toLowerCase();

  const reversedStr = str.split("").reverse().join("");

  if (str !== reversedStr) {
    return false;
  } else {
    return true;
  }
}