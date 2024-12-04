import { RefObject, useEffect, useRef } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) => {

  const handlerClick = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handlerClick)
    return () => {
      document.removeEventListener("mousedown", handlerClick)
    }
  })
};