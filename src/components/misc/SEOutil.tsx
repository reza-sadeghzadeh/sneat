import { useEffect } from "react"

const SEOutil = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = "sneat | " + title
  }, [])

  return <></>
}

export default SEOutil
