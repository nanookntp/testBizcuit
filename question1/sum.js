function sum(a, b) {
    let result;
    if (typeof a == "string" && typeof b == "string") {
      const res = parseInt(a)+parseInt(b);
      return res ? res.toString() : "Error";
    }else {
      result = "Error";
    }
  
    return result;
  }
  console.log(sum("12", "2"), typeof sum("12", "2"));
//   console.log(sum(12, 2), typeof sum("12", "2"));
  
  module.exports = sum;
  