/* eslint-disable react/prop-types */
import arrow from "../assets/icon-arrow.svg";
import { useRef, useState } from "react";
import {isIPv4} from 'is-ip';
import isValidDomain from "is-valid-domain";

const Input = ({setParameter,setIsIp,isValid,setIsValid}) => {

    const [input,setInput] = useState("");

    const inputRef = useRef();

    function handleInput(e){
        setInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        if(isIPv4(input) || isValidDomain(input)){
            setParameter(input);
            setIsValid(true);

            if(isIPv4(input)){
                setIsIp(true);
            }
            else{
                setIsIp(false)
            }

            setInput("");
        }
        else{
            setIsValid(false);
        }
        
    }

    if(!isValid){
        inputRef.current.focus();
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <input ref={inputRef} onChange={handleInput} className={`w-full max-w-[555px] px-6 py-[17px] sm:py-[15px] rounded-l-2xl sm:text-lg cursor-pointer hover:text-darkGray ${isValid ? "outline-none" : "outline-red-400"}`} placeholder="Search for any IP address or domain" type="text" />
            <button className={` ${isValid ? "bg-black" : "bg-slate-600"} flex-shrink-0 hover:bg-veryDarkGray transition-colors duration-300 px-6 py-[22px] rounded-r-2xl disabled:bg-gray-600`} type="submit">
                <img src={arrow} alt="arrow" />
            </button>
        </form>
        <p className={`${isValid ? "invisible" : "visible"} text-red-400 mt-2`}>Please Enter a Valid IP address or domain</p>
    </>
  )
}

export default Input