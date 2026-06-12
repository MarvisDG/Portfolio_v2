import { ReactNode } from "react";
import LiquidGlass from "./LiquidGlass";

type ButtonProps = {
    text: string;
    children?: ReactNode;
    className?: string;
}
export default function Button({text, children, className = ''} : ButtonProps,) {
    // export default function LiquidGlass({ children, className = '', colorIndex }: LiquidGlassProps) {
    return (
        <>
            <LiquidGlass className="">
                <button
                    className="flex flex-row items-center justify-between text-white font-normal text-uppercase p-3 bg-[#00ff0085x]"
                    style={{ fontSize: '.7rem' }}
                >
                {text}
                    
                    <div className={`relative ${className}`}>
                        <div className="relative">
                        {children}
                        </div>
                    </div>
                    
                </button>
            </LiquidGlass>
        </>
    )
}