var n=7,str=''
for(let i=0;i<=n;i++){
    for(let j=0;j<=n-i;j++){
        str=str.concat('*')
    }
    str=str.concat('\n')
}
console.log(str);

