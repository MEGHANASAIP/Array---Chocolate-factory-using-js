let n=parseInt(prompt());
let arr=[]
let ans=[]
let k=0;
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(prompt("enter the element"));
    if(arr[i]!=0)
    {
        ans[k]=arr[i];
        k=k+1;
    }
}
while(k!=n)
{
    ans[k]=0;
    k=k+1;
}
console.log(ans);

