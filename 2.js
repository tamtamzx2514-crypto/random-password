    /* กล่องคำสั่งเรียกจาก Html */

const password = document.querySelector('.password-text')
const copy = document.querySelector('.copy-btn')
const generate = document.querySelector('.generate-btn')
const line = document.querySelector('.line')
const lengthvalue = document.querySelector('.length-value')

const uppercase = document.querySelector('#uppercase')
const lowercase = document.querySelector('#lowercase')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numberCharacters = "0123456789"
const symbolCharacters = "!@#$%^&*()_+-=[]{}"



function generatePassword() {
    
    /* เมื่อติก */

    let characters = ""

    if(uppercase.checked) {
        characters += uppercaseLetters
    }
    
    if(lowercase.checked) {
        characters += lowercaseLetters
    }
    
    if(numbers.checked) {
        characters += numberCharacters
    }
    
    if(symbols.checked) {
        characters += symbolCharacters
    }

    if(characters === ""){
        password.textContent = "เลือกมา 1 อันก่อน"
        result
    }


    /* สุ่มคำสั่งตาม line ตอนเลือก */

    let result = ""
    
    for(let i = 0; i < line.value; i++) {
        let random = Math.floor(Math.random () * characters.length)
        result += characters[random]
    }

    password.textContent = result
}

    /* เรียงตามเลข */

line.addEventListener("input",function(){
    lengthvalue.textContent = line.value
})

    /* แสดงผล */

generate.addEventListener("click", function(){
    generatePassword()
})




copy.addEventListener("click", function(){
    navigator.clipboard.writeText(password.textContent)

    alert("คัดลอกแล้วครับ")
})