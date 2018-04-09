var add = function(a, b){
 if(b){
 	return a + b;
 }else{
 	return function(b) { 
  	return a + b;
  };
 }
};

console.log(add(2)(3));
console.log(add(2,3));
