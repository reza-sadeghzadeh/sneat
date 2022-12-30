import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"
import { Lngs } from "../utils/language"

interface Ii18nContext {
  lng: Lngs
  setLng: Dispatch<SetStateAction<Lngs>>
}

export const I18nContext = createContext<Partial<Ii18nContext>>({})
