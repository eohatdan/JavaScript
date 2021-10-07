  function Dict(name) {
    this.name = name;
    this.key = ""; 
    this.value = "";
    this.dictionary = {};
    this.addPair = function(key,value){
      this.dictionary[key]= value;
    }
    this.delPair = function(key){
       delete this.dictionary[key];
    }
document.write('js dictionary reached');
  }
dicta = new Dict("task");
console.log(dicta.name);
dicta.addPair("boy","dog");
/*
console.log(dicta.dictionary["boy"]);
dicta.addPair("learning JS","continue");
console.log(dicta.dictionary["learning JS"]);
console.log(dicta.dictionary["boy"]);
dicta.delPair("boy");
console.log(dicta.dictionary);
dicta.addPair("boy","dog");
console.log(dicta.dictionary);

var dictx = {"boy":"dog","girl":"cat"};
console.log(dictx);
delete dictx["boy"];
console.log(dictx);
*/
document.getElementById("dout").innerHTML=dicta.dictionary["boy"];



