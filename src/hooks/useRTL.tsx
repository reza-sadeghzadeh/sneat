import React, { useContext } from "react"
import { RTLContext } from "../contexts/RTLContext"

const useRTL = () => useContext(RTLContext)

export default useRTL
