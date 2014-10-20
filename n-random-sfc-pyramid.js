var Numbercreate = function(n){

var tmp = Math.random()*n;

var result = Math.floor(tmp);
  return result;
};

var randomSFCPyramid = Numbercreate(100);



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

var nRandomSFCPyramid = function(f){

var q = 0;
while(q < f){
 q = q + 1;
 var z = b(randomSFCPyramid);
};
};

nRandomSFCPyramid(5);
