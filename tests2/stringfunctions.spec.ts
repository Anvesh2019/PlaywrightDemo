import {test,expect} from '@playwright/test'
test('Index OF',async()=>{

let city:string="Hyderabad";
console.log(city.indexOf('y'));  //y position
console.log(city.charAt(4)); //5th char
console.log(city.substring(1,5)); //2-6 chars  yder
console.log(city.replace('y','a')); //Replace y with a

let str1="I love hyderabad";
let arrWords:string[]=str1.split(' ');
console.log("Length is:" + arrWords.length);
console.log(str1.toLocaleLowerCase());
});