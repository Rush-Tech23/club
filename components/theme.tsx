"use client"
import { useTheme } from "@/app/theme-provider"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function Theme() {
    const theme = useTheme()
    const [isRotating, setIsRotating] = useState(false)

    const handleThemeToggle = () => {
        setIsRotating(true)
        theme.setTheme(theme.theme === "dark" ? "light" : "dark")
        
        // Reset rotation after animation
        setTimeout(() => setIsRotating(false), 300)
    }

    return (
        <button 
            onClick={handleThemeToggle} 
            className="p-2 transition-transform duration-300"
        >
            {theme.theme === "dark" ? (
                <Sun 
                    className={`text-yellow-500 w-6 h-6 transition-transform duration-300 ${isRotating ? "rotate-180" : ""}`}
                />
            ) : (
                <Moon 
                    className={`text-black w-6 h-6 transition-transform duration-300 ${isRotating ? "rotate-180" : ""}`}
                />
            )}
        </button>
    )
}
