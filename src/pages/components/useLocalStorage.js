import {useState} from "react"

function getSavedValue(key, initialValue) {
  JSON.parse(localStorage.getItem(key))
}

export default function useLocalStorage(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [value, setValue]
}

