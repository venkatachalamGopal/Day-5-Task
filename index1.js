//using arrow function and iife


//get odd num in arrays
man=(...a)=>{
    temp=""
for(let i=0;i<a.length;i++)
if(a[i]%2!==0)
if(a[i]==a.length-1)
{
   temp+=a[i]; 
}
else
{
    temp+=a[i]+",";
}
return temp;
}
ans=man(1,2,3,4,5,6)
console.log(ans)
//o/p
//1,3,5

//using iife get odd

(function man(...a){
    temp=""
for(let i=0;i<a.length;i++)
if(a[i]%2!==0)
if(a[i]==a.length-1)
{
   temp+=a[i]; 
}
else
{
    temp+=a[i]+",";
}
console.log(temp);
})(1,2,3,4)

//o/p
//1,3




// 2)conver a string into uppercase

friend=(...a)=>{
value=""
for(let i=0;i<a.length;i++)
{
    value+=a[i].toUpperCase()+" "
}
return value;
}
ans=friend("venkatachalam","arun")
console.log(ans)

//o/p
// VENKATACHALAM ARUN 


//using iife
(function family(...a){
    value=""
for(let i=0;i<a.length;i++)
{
    value+=a[i].toUpperCase()+" "
}
console.log(value);
})("venkatachalam","arun")


// 3)sum of all numbers in array

sum=(...a)=>{
    value=0;
    for(let i=0;i<a.length;i++)
    {
        value+=a[i]
    }
return value;
}
ans=sum(1,2,3,4,5,6)
console.log(ans)

//iife sum of element
((...a)=>{
    value=0;
    for(let i=0;i<a.length;i++)
    {
        value+=a[i];
    }
console.log(value);
})(6,5,3,6)
o/p
20



//4)return all the prime number in an array
array=(a)=>{
    temp="";
    for(let i=0;i<a;i++) 
if(i/2==1 || i/3==1 || i/5==1)
{
temp+=i+",";
}
for(let i=0;i<a;i++) 
if(i/1!==1 && i%2!==0 && i%3!==0 && i%5!==0){
temp+=i+",";
}
return temp;
}
ans=array(100)
console.log(ans)
//o/p
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,49,53,59,61,67,71,73,77,79,83,89,91,97


//using iife
((a)=>{
 temp="";
for(let i=0;i<a;i++) 
if(i/2==1 || i/3==1 || i/5==1)
{
temp+=i+",";
}
for(let i=0;i<a;i++) 
if(i/1!==1 && i%2!==0 && i%3!==0 && i%5!==0)
{
temp+=i+",";
}
console.log(temp);
})(100);

//o/p
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,49,53,59,61,67,71,73,77,79,83,89,91,97


// e)palindrome
palindrome=(a)=>{
    temp=""
for(let i=a.length-1;i>=0;i--)
{
    temp+=a[i]
}
if(temp==a)
{
return temp
}
else
{
    m="no"
    return m
}
}
v=palindrome("madam")
console.log(v, "a palindrome")
//o/p;
//madam a palindrome

//using iife palindrome

(function(a){
    temp=""
for(let i=a.length-1;i>=0;i--)
{
    temp+=a[i]
}
if(temp==a)
{
console.log(` ${temp} value is palindrome`);
}
else
{
    m="not"
console.log(`${m} value is palindrome`);
}
})("madam");

//o/p:
//madam value is palindriome