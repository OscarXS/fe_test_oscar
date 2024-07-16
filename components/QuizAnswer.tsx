"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import Cookies from "js-cookie";

let number1 = Math.floor(Math.random() * 100)
let number2 = Math.floor(Math.random() * 100)

export function QuizAnswer() {
    const [value, setValue] = useState<any>("")
    const [success, setSuccess] = useState<boolean>(true)
    const [counter, setCounter] = useState(0)
    const [isCookieSet, setCookie] = useState(Cookies.get("cookieConsent"));
    console.log(counter)

    const getSuccessKey = () => {
      if (typeof window !== 'undefined') {
        const successKey = localStorage.getItem("success") ? JSON.parse(localStorage.getItem("success")!) : null;
        console.log(successKey)
        return successKey
      } 
    }
    console.log("key is: ", getSuccessKey())

    let successCount = 0;
    let wrongCount = 0; 

    const handleAnswer1 = () => {
      if(number1 + number2 == value) {
        console.log(`Correct: `, (number1 + number2), value)
        setCounter(999)
        Cookies.set("cookieConsent", true);
        setCookie(true);
        return ( localStorage.setItem('success', 'true') )
      } 
      if(number1 + number2 !== value && wrongCount < 2) {
        console.log(`Incorrect: `, (number1 + number2), value) 
        setCounter(counter + 1); 
        return ( localStorage.setItem('success', 'false') )
      }
    }

    const handleShow = () => {
      Cookies.set("cookieConsent", true);
        setCookie(true);
    }

  return (
    <>
        { 
          counter == 0 && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Answer to reveal full details</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-large leading-none">{`${number1} + ${number2}`}</h4>
                    <p className="text-sm text-muted-foreground">
                      Answer 1st question
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Input
                        className="col-span-2 h-8"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <Button onClick={handleAnswer1}>Answer</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover> 
          )
        }
        {
          counter == 1 && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Answer to reveal full details</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-large leading-none">{`${number1} + ${number2}`}</h4>
                    <p className="text-sm text-muted-foreground">
                      Answer 2nd question
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Input
                        className="col-span-2 h-8"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <Button onClick={handleAnswer1}>Answer</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover> 
          )
        } 
        {
          counter == 2 && (
            <Button variant="secondary">Unable to view details</Button>
          )
        } 
        {
          counter == 999 && (
            <Button variant="secondary" className="bg-green-500" onClick={handleShow}>Show Details</Button>
          )
        } 
    </>
  )
}
