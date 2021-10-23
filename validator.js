function validator(num1,num2){
    return new Promise((resolve,reject)=>{
        if(isNaN(num1)||isNaN(num2)){
            reject("Invalid Data types");
            return;
        }
        if(num1<-10000000||num2<-10000000){
            reject("Underflow");
            return;
        }
        if(num1>10000000||num2>1000000){
           reject("Overflow");
           return;
        }
        console.log("valid number")
        resolve();
    })
}
module.exports=validator;