const showPasswordContainer=document.getElementById("showPasswordContainer")

const generateBtn=document.getElementById("generateBtn")
const copyBtn=document.getElementById("copyBtn")
const lengthSlider=document.getElementById("lengthSlider")
const showLength=document.getElementById("showLength")
const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector("#lowercase")

showLength.textContent=lengthSlider.value;
//adding eventLisner to input slider
lengthSlider.addEventListener("input",()=>{
    showLength.textContent=lengthSlider.value;
})

//adding eventlisner to generate button
generateBtn.addEventListener("click",()=>{
    showPasswordContainer.value=generatePassword().join(""); 
})


//creating global variable
let lowerChars="avcdefghijklmnopqrstuvwxyz"
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers="0123456789"
let allSymbols="~!@#$%^&*"


//creating generate password function
function generatePassword(){
    let genPassword = [];
    let allChars = "";
    let selectedChars = [];
    if (lowercase.checked) {
        allChars += lowerChars;
        selectedChars.push(getRandomChar(lowerChars));
    }
    if (uppercase.checked) {
        allChars += upperChars;
        selectedChars.push(getRandomChar(upperChars));
    }
    if (numbers.checked) {
        allChars += allNumbers;
        selectedChars.push(getRandomChar(allNumbers));
    }
    if (symbols.checked) {
        allChars += allSymbols;
        selectedChars.push(getRandomChar(allSymbols));
    }
   

    if (allChars == "" || allChars.length == 0) {
        alert("null password")
        return genPassword;
    }
    for (let i = 1; i <= lengthSlider.value; i++) {
        genPassword[i-1]= allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    if (lengthSlider.value >= selectedChars.length) {
        for (let i = 0; i < selectedChars.length; i++) {
            genPassword[i] = selectedChars[i];
            console.log("recquired charaters",genPassword[i]);
        }
        
    }
    return genPassword;
}

// Helper function to get a random character from a string
function getRandomChar(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}
//adding lisner to copy button
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(showPasswordContainer.value);
    copyBtn.title="password copied"
    setTimeout(()=>{
        copyBtn.title='click to copy';
    },3000)
})