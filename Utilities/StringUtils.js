String.prototype.log = function() {
  var date = new Date();
  console.log(`(LOG)[${date.toLocaleString("en-US")}] ${this}.`)
}

this.log = function(a) { a.log(); }

this.error = function(a) { 
  var date = new Date();
  console.log(`(ERROR)[${date.toLocaleString("en-US")}] ${this}.`)
}