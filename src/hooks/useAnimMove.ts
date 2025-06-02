import { useEffect, useRef } from "react"
import gsap from "gsap"

interface IAnimMove {
  variant: "from" | "to"
  target: string
  markers?: boolean
  start?: string
  end?: string
  vars: gsap.TweenVars
}

export const useAnimMove = ({
  variant,
  target,
  markers = false,
  start = "top bottom",
  end = "top top",
  vars = {},
}: IAnimMove) => {
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const move = gsap[variant](target, {
      ...vars,
      scrollTrigger: {
        trigger: triggerRef.current,
        start,
        end,
        toggleActions: "play none reverse reset",
        scrub: true,
        markers,
      },
    })

    return () => {
      move.revert()
    }
  }, [end, markers, start, target, variant, vars])

  return { triggerRef }
}
