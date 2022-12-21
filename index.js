//odd number
function oddnumber(...a){
    let x=""
        for(let i of a)
      if(i==a.length-1) {
x+=i
        }
       else {
            if(i%2!==0)
    x+=i+" "
        }
    return (x)
    }
   let output=oddnumber(1,2,3,4,5,6,7,8,9,10)

    console.log(output)
    //o/p
    //1 3 5 7 9



    //to upper case

  function changechar(a){
        temp=""
        for(let i of a){
        temp+=i.toUpperCase()
    }
        return temp
    }
    x=changechar("venkatachalam")
    console.log(x)

     //o/p
     // VENKATACHALAM


//using arrow function to add number

let addarray=(data)=>{
temp=0
for(let i=0;i<data.length;i++)
{
temp+=(data[i])
}
return temp
}
c=addarray([10,20,30,40,50])
console.log(c)

 // output : 150
 



//find prime number
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
    //o/p
    //2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,49,53,59,61,67,71,73,77,79,83,89,91,97


//palindrome
palindrome=(a)=>{
    temp=""
for(let i=a.length-1;i>=0;i--)
{
    temp+=a[i]
}
if(temp===a)
{
return a
}
}
a="madam"
data=a;
v=palindrome(a)
console.log(v, "a palindrome")
//o/p
//madam a palindrome

//Return median of two sorted arrays of the same size
function sortedarray(...a){
for(let i=0;i<a.length;i++)
for(let j=1+i;j<a.length;j++)
if(a[i]>a[j])
{
temp=a[i]
a[i]=a[j]
a[j]=temp
}
return a
}
m=sortedarray(100,80,30,50,21,18,23,27,25,23)
console.log(m);

//o/p
//[
 //   18, 21, 23, 23,  25,
 //   27, 30, 50, 80, 100
 // ]


//Remove duplicates and ascending order from an array
 removedup=(...a)=>{
a=[1,2,3,4,5,6,5,5,8,7]
for(let i=0;i<a.length;i++)
for(let j=0;j<a.length;j++)
if(a[i]<a[j])
{
temp=a[i]
a[i]=a[j]
a[j]=temp
}
v=new Set(a)
return v
 }
 ans=removedup(4,3,1,2,2,9,9,7,6,6,5,7,8,9)
console.log(ans)
//o/p
//{ 1, 2, 3, 4, 5, 6, 7, 8 }


//rotate array k times
function arrayrotate(a,k){
   for (let i=0;i<k;i++)
{
temp=a[0]
for (let i=0;i<a.length-1;i++)
{
a[i]=a[i+1]
}
a[a.length-1]=temp
console.log(a);
}
}
ans=arrayrotate([1,2,3,4,5,6,7,8,9],9)

//o/p
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

