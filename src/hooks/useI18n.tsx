import { useContext } from "react"
import { I18nContext } from "../contexts"

const useI18n = () => {
  const { lng, setLng } = useContext(I18nContext)
  return { lng: lng!, setLng: setLng! }
}

export default useI18n
