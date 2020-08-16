// Outer pyramid
n=7;
str=''
for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        str=str.concat('*')
    }
    for(let k=0;k<(2*i-1);k++){
        str=str.concat(' ') 
    }
    if(i===0){
        for(let h=0;h<n-1;h++){
            str=str.concat('*')    
        }
    }else{
            for(let m=0;m<n-i;m++){
                str=str.concat('*')
        }
    }
    str=str.concat('\n')
}
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        str=str.concat('*')
    }
    for(let k=0;k<2*(n-i)-3;k++){
        str=str.concat(' ')
    }
    if(i===(n-1)){
        for(let h=0;h<n-1;h++){
            str=str.concat('*')
        }
    }else{
        for(let m=0;m<=i;m++){
            str=str.concat('*')
        }
    }
    str=str.concat('\n')
}
console.log(str)