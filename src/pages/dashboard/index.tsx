import { useEffect } from "react"
import { useRouter } from "next/router"
import { paths } from "@/constants/paths"

export default function Dashboard() {
  const { push } = useRouter()

  useEffect(() => {
    void push(paths.MINT)
  }, [push])

  return <></>
}
