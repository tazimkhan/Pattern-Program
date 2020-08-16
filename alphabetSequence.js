str='';
n=6
var count=65
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        str=str.concat(String.fromCharCode(count))
        count++
    }
    str=str.concat('\n')
}
console.log(str)
