import { useEffect } from "react"
import { useRouter } from "next/router"
import { useScrollIntoView } from "@mantine/hooks"

export const useScrollToSection = (hash: string) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 0,
  })
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.includes(hash)) {
      scrollIntoView({})
    }
  }, [asPath, hash, scrollIntoView])

  return { targetRef }
}
