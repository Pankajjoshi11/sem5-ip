const promise=()=>{
    return new Promise((resolve,reject)=>{
        const number=10;
        if(number < 11){
            resolve(number);
        }
        else{
            reject('failed to resolve');
        }
    },100)
}

const doublenum=(num)=>{
    double=num*2
    return double;
}

const main = async()=>{
    const number = await promise();
    console.log(number);

    const doubleNum = doublenum(number)
    console.log(doubleNum)
}
main();