import React, { Dispatch, createContext, useState, ReactNode } from "react"

interface IRTLContext {
  RTL: boolean
  setRTL: React.Dispatch<React.SetStateAction<boolean>>
}

export const RTLContext = createContext<IRTLContext>({
  RTL: false,
  setRTL: () => null,
})

export const RTLContextProvider = ({ children }: { children: ReactNode }) => {
  const [RTL, setRTL] = useState(false)
  return (
    <RTLContext.Provider value={{ RTL: RTL, setRTL: setRTL }}>
      {children}
    </RTLContext.Provider>
  )
}
