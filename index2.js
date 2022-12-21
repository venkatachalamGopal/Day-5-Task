
//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.
function addnum (a){
    v=5+a;
    return v;
}
m=addnum(5);
console.log(m)
//o/p
//10


//Write a function called “getOpposite”.
//Given a number, return its opposite
function getopp(a){
    if(a>0){
        v=a+(2*-a);
        return v;}
        
    else if(a==0){
    return a;
        }
    else if(a<0){
        v=a-(2*+a);
        return v;
        }
    else if(a=String){
        v=-1;
        return v;
    }   
}
    m=getopp(5);
    console.log(m)
    //o/p
    //-5


//Fill in your code that takes an number minutes and converts it to sec
var min=5;
seconds=(a)=>{
    sec=a*60;
    return sec;
}
ans=seconds(min);
console.log (ans)
//o/p
//300


//Create a function that takes a string and returns it as an integer.
var mystr ="10000";
function toInt(mystr) {
m=Number(mystr);
return m;
}
var myint = toInt(mystr)
console.log(myint)
//o/p
//10000



//number by +1 and returns the result.
var my = -3;
function nextNum(curr) {
nextval=curr+1;
return nextval;
}
ans=nextNum(my)
console.log(ans)
//o/p
//-2


//Create a function that takes an array and returns the first elemen
var upp=[1,2,3]
function array(a)
{
v=a[0];
return v;
}
ans=array(upp);
console.log(ans);
//o/p
//1


//Write a function that converts hours into seconds.

var arr =[1,5,6];
function hourToSeconds(arr) {
for (i of arr)
{
m=i*60*60;
}
return m;
}
var data = hourToSeconds(arr);
console.log(data);
//o/p
//21600



//Find the Perimeter of a Rectangle
function findPerimeter(num1,num2) {
    por=(num1+num2)*2;
    return por;
}
var peri = findPerimeter(20,10)
console.log(peri);
//o/p
//60


//Less Than 100?
value=(a,b)=>{
    ans=a+b;
    if (ans<100){
        ansa="true";
        return ansa;}
        
    else 
        { 
            ansb="false"
    return ansb;
    }
    }
    fin= value(10,10)
    console.log(fin)
    //o/p
    //true
    

   //The first parameter divided by the second parameter will have a remainder, possibly zero

function ter(a,b){
if(a%b!==0){
    return a;
}
else if(a%b==0){
    b=0
    return b;
}
}
ans=ter(5,5)
console.log(ans)

//o/p
//0


//CountAnimals
function CountAnimals(tur,horse,pigs) {
    tot=tur*2+horse*4+pigs*4;
    return tot;
}
var legs = CountAnimals(5,2,8);
console.log(legs);
//o/p
//50



//frames
function frames(num1,num2) {
ans=num1*60*num2;
return ans;
}
var fps = frames(10,25);
console.log(fps);
//o/p
//15000

//Check if an Integer is Divisible By Five

function divisibleByFive(num1) {
if(num1%5==0){
    a="true"
return a
}
else if(num1%5!==0){
    b="false"
return b
}
}
var div = divisibleByFive(6)
console.log(div);
//o/p
//false


//Write a function called “isEven”.
function isEven(num){
    if(num%2==0){
    m="true"
        return m;
    }
    else if(num%2!==0){
        n="false"
            return n;
        }
    else if(num=String)  
    {
        v="false"
        return v;
    }  
}
   var even = isEven(11)
   console.log(even)
   //o/p
   //false


//Write a function called “areBothOdd”.

function areBothOdd(num1, num2){
    
   if(num1%2!==0 && num2%2!==0){
   m="true"
   return m;
   }
   else {
       n="false"
       return n;
   }}
ans=areBothOdd(1,2)
console.log(ans)
//o/p
//false


//Write a function called “getFullName”

function g(f,l){
    m=f+l;
    y=m;
    temp=""
    for(let i=0;i<y.length;i++)
    if(i==y.length-1){
        temp+=y[i]+'"'
    }
    else if(i==0){
        temp+='"'+y[i]
    }
    else{
        temp+=y[i]
    }
    return temp;
   }
s=g("guvi",)
console.log(s);
//o/p
//guviundifined


//Write a function called “getLengthOfWord”.
function getLengthOfWord(word){
    {
    m=word.length;
    return m;}
   }
   ans=getLengthOfWord("guvi")
   console.log(ans);
   //o/p
   //4


//Write a function called “isSameLength”.
function isSameLength(word1, word2){
    if(word1.length==word2.length){
        m="true"
        return m
    }
   }
ans=isSameLength("word1","word2")
console.log(ans)
//o/p
//true


//calculate the distance between two points defined by their x, y

function getDistance(x1, y1, x2, y2)
{
    dis=Math.sqrt((x2-x1)**2+(y2-y1)**2)
    return dis
}
ans=getDistance(100,100,400,300)
console.log(ans)
//o/p
//360.5551275463989

//Write a function called “getNthElement”.
function get(a,n)
{
for(let i=0;i<=n;i++){
v=a[i]
   }
   return v
}
ans=get([1,3,5],1)
console.log(ans)
//o/p
//3

//getLastElement”.
function get(arr){
    if(arr.length>0){
    for(let i=0;i<arr.length;i++){
        v=arr[i]
           }
           return v
        }
        else{
            val=-1
            return val;
        }}
        ans=get([1,2,3]);
        console.log(ans)
    //o/p
    //3    
        

//Write a function called “getProperty”.
var obj={
    my:"value",
    path:"life",
   };

   function get(m,j) { 
    s=m,j;
    return s;
   }
   ans=get(obj,"my");
   console.log(ans);
   //o/p
   //{ my: 'value', path: 'life' }
   


//Write a function called "addProperty"
   var obj = {
    mykey:"value"
   };
   function addProperty(obj, key){
    ans=obj,key;
    return ans;
   }
   ans2=addProperty(obj,"mykey")
   console.log(ans2)
   //o/p
   //{ mykey: 'value' }


//insert object
    const obj={
        name:"venkata",
        lastname:"chalam",
        type:"myname",
        };
        let newobj=Object.assign(obj,{newmember:"govindaraj"});
        console.log(newobj)
        console.log(obj)
    //o/p
    //{name: 'venkata',
  //lastname: 'chalam',
  //type: 'myname',
  //newmember: 'govindaraj'
//}


//delete property
const obj={
    name:"venkata",
    lastname:"chalam",
    obj:"myname",
    };
    function dell(obj,y){
    newobj=delete(obj,y);
    return newobj;
    }
    m=dell(obj.name)
console.log(m)
//output
//


//power of 2
function power(a){
temp=""
for(let i=0;i<=a;i++)
if(i==a)
{temp+=2**(i)}
else{
temp+=2**(i)+","
}
return temp;
}
o=power(3)
console.log(o)
//output:
//1,2,4



//Find the maximum number in an array of numbers
function max(data){
for(let i=0;i<data.length;i++)
for(let j=i+1;j<data.length;j++)
if(data[i]>data[j])
{
temp=data[i]
data[i]=data[j]
data[j]=temp
}
for(let i=0;i<data.length;i++)
{
    value=data[i]
}
  return value;
}
fians=max([-5, 10, -3, 12, -9, 5, 90, 0, 1])
console.log(fians)
//output;
//90


//Print the first 100 prime numbers
a=100;
function prime(a){
temp=""
for(let i=0;i<=a;i++)
if(i/2==1 || i/3==1 || i/5==1)
{
temp+=i+","
}
for(let i=0;i<=a;i++)
if( i/1!==1 && i%2!==0 && i%3!==0 && i%5!==0)
{
temp+=i+",";
}
 return temp
}
m=prime(100)
console.log(m)

//output
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,49,53,59,61,67,71,73,77,79,83,89,91,97




//certain range of prime numbers
function prime(b,a){
temp=""
for(let i=b;i<=a;i++)
if(i/2==1 || i/3==1 || i/5==1)
{
temp+=i+","
}
for(let i=b;i<=a;i++)
if( i/1!==1 && i%2!==0 && i%3!==0 && i%5!==0)
{
temp+=i+",";
}
 return temp
}
m=prime(10,100)
console.log(m)

//output;
//11,13,17,19,23,29,31,37,41,43,47,49,53,59,61,67,71,73,77,79,83,89,91,97



//reverse a string
function reverseString(s){
temp=""
{
 for(let i=s.length-1;i>=0;i--)
 temp+=s[i];
}
return temp
}
var s = reverseString("JavaScript");
console.log(s);

//output:
//tpircSavaJ


//Create a function that will merge two arrays and return the result as a new array
//...operator
var a=[1,2,3]
var b=[4,5,6]

function mergearray(ar1,ar2)
{
 var result = [...ar1,...ar2];
for(let el of ar1)
 {
 result.push(el);
 }
 return result;
}
m=mergearray(a,b)
console.log(m)

//output:
//[1, 2, 3, 4, 5, 6, 1, 2, 3]



//Calculate the sum of numbers received in a comma delimited string

function sum(s)
{
    temp=0;
    for(let i=0;i<s.length;i++){
  temp+=s[i];
    }
    return temp;
}
k=sum([1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9])
console.log(k)

//output;
//57.3


