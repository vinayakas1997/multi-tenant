import {  RefObject } from "react";

export const useDropdownPosition =(
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>

) =>{
    const getDropdownPosition =()=>{
        if (!ref.current) return {top:0, left:0};

        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // Width if dropdown (w-60 = 15rem = 240px)
    
        // Calcultae the initial position 
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        if (left + dropdownWidth > window.innerWidth) {
        //   Allign to right edge of button instead
        left =  rect.right + window.scrollX- dropdownWidth ;
        }

        if (left < 0) {
            left = window.innerWidth - dropdownWidth - 16
        }
        
        //  Ensure dropdown doesnt go off left Edge 
        if (left < 0){
            left = 16;
        }

        return {top, left}

    };
    return {getDropdownPosition}
}