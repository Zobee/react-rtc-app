import { useEffect, useState } from "react";

export default function useLocalStorage(key:string, initVal?:any){
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(key)
    if(jsonVal !== null) return JSON.parse(jsonVal)
    if(typeof initVal === 'function') {
      return initVal()
    } else {
      return initVal
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return [value, setValue]
}