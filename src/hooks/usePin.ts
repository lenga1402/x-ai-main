import { useEffect, useRef } from "react"
import gsap from "gsap"

interface IPin {
  target: string
  start?: string
  end?: string
}

export const usePin = ({ target, end, start }: IPin) => {
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const to = gsap.to(target, {
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 0.2,
        // markers: true,
        end,
        start,
      },
    })

    return () => {
      to.revert()
    }
  }, [end, start, target])

  return {
    triggerRef,
  }
}
