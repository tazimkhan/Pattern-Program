n=8;
str=''
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        str=str.concat(String.fromCharCode(65+i))
    }
    str=str.concat('\n')
}
console.log(str)