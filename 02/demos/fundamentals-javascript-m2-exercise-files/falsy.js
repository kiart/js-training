const isTruthy = (name,expr) =>{
    console.log(`${name} : ${Boolean(expr)}`);
}

isTruthy("zer0",0);
isTruthy("posi",5);
isTruthy("negative",-1);
isTruthy("NaN",NaN);
isTruthy("nullo",null);
isTruthy("undefined",undefined);
isTruthy("emptyStr","");
isTruthy("empty ");
