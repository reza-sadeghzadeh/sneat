import { useContext } from "react"
import { RTLContext } from "../contexts"

const useRTL = () => useContext(RTLContext)

export default useRTL
