import React, { useEffect, useState } from "react"

export const RenderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true)
  }, [])

  if (!rendered) return <></>

  return <>{children}</>
}
