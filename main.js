const DOB = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const opMessage = document.querySelector("#output");
checkButton.addEventListener("click", checkIfBirthdateIsLucky)


function checkIfBirthdateIsLucky(){
    const bdate = DOB.value;
    const ln =Number(luckyNumber.value);
    const sum= checkSum(bdate);
    
    if(sum&&ln){
    
        
         if (sum%ln===0){
                 opMessage.innerText="Your birthday is lucky 🎉";
                }
            else{
                opMessage.innerText="The app is saying your birthday in not lucky there must be a calculation mistake.";
                }
            }
            
    else{
        opMessage.innerText= "Please fill both of the fields or maybe you entered lucky number as less than 1."
        }
    }



function checkSum(bdate){
bdate =bdate.replaceAll("-", "");
let sum= 0;

for(let i=0; i<bdate.length; i++){
    sum=sum+Number(bdate.charAt(i));
    }  
    
return sum;

}