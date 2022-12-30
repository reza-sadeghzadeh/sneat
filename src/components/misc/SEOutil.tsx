import { useEffect } from "react"

const SEOutil = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = "SNEAT - " + title
  }, [])

  return <></>
}

export default SEOutil
