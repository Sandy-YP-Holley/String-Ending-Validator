function confirmEnding(bgnstring, endstring){
  if(bgnstring.slice(-endstring.length) == endstring){
    return true;
  } else {
    return false;
  }
}

const bgnstring = "sandy";
const endstring = "y";
console.log(confirmEnding(bgnstring,endstring));
