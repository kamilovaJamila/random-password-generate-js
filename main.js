let btn = document.querySelector('#generate');
let passwordBox = document.querySelector('#password');
const lenght = 15;

let upperCase = 'QWETYUIOPASDFGHJKLZXCVBNM'
let lowerCase = 'qwertyuiopasdfghjklzxcvbnm'
let sybmol = '!@#$%^&*()_+<>?{}'
let number = '0123456789'
 let img = document.querySelector('#copyImg')
let all = upperCase + lowerCase + sybmol + number

btn.addEventListener('click', function(){
  let password = ""
  password+= upperCase[Math.floor(Math.random()* upperCase.length )]
  password+= lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password+= sybmol[Math.floor(Math.random() * sybmol.length )]
  password+= number[Math.floor(Math.random()* number.length )]
 

  while(lenght > password.length){

    password+= all[Math.floor(Math.random() * all.length)]
  }
  
  passwordBox.value = password
   
 
})


img.addEventListener('copy', function(){
    passwordBox.select()
    document.execCommand('copy')
})