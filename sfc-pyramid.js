var nSFC = function(n){

var a = "";
var counter = 0;

while (counter < n) {
  a = a + "SFC ";
  counter = counter + 1;
}
return a;

};



var b = function(m){
  var c = 0;

  while(c < m){
    c = c + 1;
    var x = nSFC(c);
    console.log(x);
};
};

var z = b(5);
