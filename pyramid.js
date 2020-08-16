var n=9,str='';
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i-1;j++){
//         str=str.concat(' ')
//     }
//     for(let k=0;k<(2*i+1);k++){
//         str=str.concat('*')
//     }
//     str=str.concat('\n')
// }
// console.log(str);

for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        str=str.concat(' ')
    }
    for(let k=0;k<2*(n-i)-1;k++){
        str=str.concat('*')
    }
    str=str.concat('\n')
}
console.log(str);