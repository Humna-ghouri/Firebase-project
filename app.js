// importing
import { getAuth,createUserWithEmailAndPassword } from "./firebase.js"


const auth = getAuth();



let siginUpBtn = document.getElementById("signupBtn")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")





const themes = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F"
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36"
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430"
    }
];
siginUpBtn.addEventListener("click",()=>{
    if(signupEmail.value.trim() && signupPassword.value.trim()){
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch (errorMessage){
           case "Firebase: Error (auth/email-already-in-use).":
            console.log("use other email");
            break;
            
          }
          
        });

    }
    else{
        console.log("insert your data");
        
    }

    location.href = "signin.html"
    
})

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

displayThemeButtons();

