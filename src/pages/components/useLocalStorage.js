import {useState} from "react"

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue
  // if there is already a value saved, it will return the saved value, else will return initial value.

  // I dont understand this 
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

export default function useLocalStorage(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [value, setValue]
}

