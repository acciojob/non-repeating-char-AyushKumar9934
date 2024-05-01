function firstNonRepeatedChar(str) {
 // Write your code here
 let map=new Map();
 for(let i of str){
     if(map.has(i)){
         map.set(i,map.get(i)+1)
     }
     else map.set(i,1);
 }
 for(let i of str){
     if(map.get(i)==1)return i;
 }
 return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
