var n=8;
var str=''
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        var a=1+i;
        str=str.concat(a)
    }
    str=str.concat('\n')
}
console.log(str)