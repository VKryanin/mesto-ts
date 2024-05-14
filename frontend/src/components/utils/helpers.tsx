import React, { useEffect, RefObject } from "react";

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {

    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => handleClick(e);
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref.current])
}