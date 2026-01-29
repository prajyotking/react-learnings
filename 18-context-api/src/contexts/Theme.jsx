import { useState } from 'react'
import { createContext } from 'react'


export const ThemeDataContext = createContext()

const Theme = (props) => {
    const [theme, setTheme] = useState("Light")
  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
           {props.children}  
      </ThemeDataContext.Provider>
    </div>
  )
}

export default Theme
