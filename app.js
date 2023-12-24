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

function initialStep(callBack) {
  setTimeout(() => {
    if (student) {
      callBack();
    } else {
      console.log('Admit first to be a student');
    }
  }, 1000);
}

function progress(callBack) {
  console.log('Attend to the class regularly and Prepar for the exam');

  setTimeout(() => {
    if (pp >= 80) {
      callBack();
    } else {
      console.log('Your addendance is too low to addend the exam');
    }
  }, 3000);
}

function exam(callBack) {
  console.log('Your exam is knocking at the door. So you shuld study hard');
  setTimeout(() => {
    if (marks >= 80) {
      console.log('waiting for the certificate....');
      callBack();
    } else {
      console.log('you deserve no certificate');
    }
  }, 2000);
}

function getCertificate() {
  setTimeout(() => {
    console.log('Congrate! you got the certificate');
  }, 3000);
}

initialStep(() => {
  progress(() => {
    exam(getCertificate);
  });
});
// ======================================

function handleSubmit() {
  let input = document.getElementById('demo').value;

  let index = [];
  for (let i = 0; i < input; i++) {
    index.push(i + 1);
  }

  let total = 0;
  index.forEach(i => (total += i));
  alert(total);

  let prime = [];
  prime.push(1);

  startAgain: for (let outer = 2; outer <= input; outer++) {
    //7
    for (let inner = 2; inner < outer; inner++) {
      if (outer % inner == 0) {
        continue startAgain;
      }
    }
    prime.push(outer);
  }

  //   const total = index => {
  //     let num = 0;
  //       for (const singleNum of index) {

  //     }
  //   };

  console.log(prime);

  console.log(prime.length);
}

// console.log("This message is printed after the first message is executed")









// =============================================================
// =============================================================
// =============================================================
// =============================JS OOP==========================
// =============================================================
// =============================================================

let obj = {
  mane : "Rahim",
  email:"rohim@gmail.com",
  age:17,
  weight: "50 Kg",
  main:this
}


console.log(obj.email)

// console.log(new obj)

const StudentFrame = function(name){
 this.name = name;
}

const karim =  new StudentFrame('karim')
const rahim =  new StudentFrame('rahim')
const sofiq =  new StudentFrame('sofiq')
console.log(karim,rahim,sofiq)
StudentFrame.prototype.aboutI = function (){
  console.log(`My name is ${this.name}`)
 }

 console.log(StudentFrame.prototype.__proto__)
 console.log(karim.__proto__.__proto__.__proto__)

// console.log(sofiq.aboutI())

// const arr = [1,2,3,4,5]
// Array.prototype.filter = function(){
//   let arr = [];
//   // for (let i = 0; i < this.length; i++) {
//   //  console.log(this[i])
    
//   // }
// }

// console.log(arr.filter(ele=> ele))



