// ==========================================
// =============Callback Basic===============
// ==========================================
// function callBack (){
//     console.log("I am  called back")
// }

// function main (func){
//     console.log("Main function is called")
// func()
// }

// main(callBack)




// const message = function() {  
//     console.log("This message is printed first");
// }



// setTimeout(callBack, 3000);


// ==========================================
// =============Callback medium=============
// ==========================================

// let student = true;
// let pp = 80;
// let getMark = "80%";
// function getExam (callBack){
//    console.log( "Prepared for this exam. To get certificate you must get at list 80% marks") 
//    if (getMark) {
//     console.log(`you deserve certificate because you achived ${getMark} and wait for 3 second`)
//     setTimeout(callBack, 3000)
//    }else {
//     "You deserve no certificaate because you get marks less than 80%"
//    }

// }

// function getCertificate(){
//     console.log('Congratulation!')
// }


// function isStudent(){
//    if(student){
//     if (pp >= 80) {
//         setTimeout(()=>{getExam(getCertificate)}, 3000)
//     } else {
//         console.log("Sorry! you are not eligible for this exam")
//     }
//    } else {
//     console.log("sorry! make a student first")
//    }
// }

// isStudent()


// =====================================================================
let student = true;

let pp = 80;

let marks = 70;

function initialStep(callBack){
   setTimeout(() => {
    if (student) {
        callBack()
    } else {
        console.log("Admit first to be a student")
    }
   }, 1000); 

   
}


function progress (callBack){
    console.log("Attend to the class regularly and Prepar for the exam")
   
    setTimeout(() => {
        if (pp >= 80) {
            callBack()
        } else {
            console.log("Your addendance is too low to addend the exam")
        }
    }, 3000);

}

function exam(callBack){
  console.log("Your exam is knocking at the door. So you shuld study hard")
  setTimeout(() => {

    if (marks >= 80) {
        console.log("waiting for the certificate....")
        callBack()
    } else {
        console.log('you deserve no certificate')
    }
  }, 2000); 
}

function getCertificate (){
    setTimeout(() => {
        console.log("Congrate! you got the certificate")
    }, 3000);
}


initialStep(()=>{
    progress(()=>{
        exam(getCertificate) 
    })
});






// console.log("This message is printed after the first message is executed")


