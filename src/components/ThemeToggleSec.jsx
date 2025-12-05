import { motion,AnimatePresence } from "framer-motion";
import { button } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function ThemeToggleMain(){
    const [dark, setDark] = useState(false)

    //load saved theme
    useEffect(()=>{
        const stored = localStorage.getItem('theme');

        if(
            stored = "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)){
                setDark(true)
                document.documentElement.classList.add("dark");
            }
    }, [])

    const toggleTheme = ()=>{
        const newTheme = !dark;
        setDark(newTheme);

        if(newTheme){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    };
    return(
        <button></button>
    )


}


