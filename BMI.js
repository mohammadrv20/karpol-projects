const weight = 67.5
const height = 1.62
const BMI = (weight / height**2)

console.log("BMI:",BMI)

if(BMI<18){
    console.log("you are under weight");


} else if (BMI>=18 && BMI<25){
    console.log("you are feet bro");


} else if (BMI>=25){
    console.log("you are over weight دختووو");


}

console.log(typeof NaN); 