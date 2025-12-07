import { useEffect, useState } from "react";

export default function SubtleToggle(){
    const[dark, setDark] = useState(false);
    const [popping, setPopping] = useState(false);

    //load saved theme
    useEffect(()=>{
        const saved = localStorage.getItem("theme");
        if(saved === "dark"){
            setDark(true);
            document.documentElement.classList.add("dark")
        }
    }, []);

    const toggleTheme = () =>{
        // trigger pop animation
        setPopping(true);
        setTimeout(()=>setPopping(false), 100);

        const newMode = !dark;
        setDark(newMode);

        if(newMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "dark");
        } else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    };

    return(
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`relative w-7 h-7 rounded-full border border-black dark:border-white overflow-hidden flex-items-center
                justify-center transition-transform duration-75 ease-out${popping ? "animate-subtlePop":""}`}
        >
            <div className={`absolute w-full h-full rounded-full transition-transform duration-260 ease-subtleEase
                ${dark ? "-translate-x-1/2 bg-white":"translate-x-1/2 bg-black"}`}
                style={{
                    clipPath: "inset(0 50% 0 0)",
                }}
            
            >
            </div>
        </button>
    );
}

