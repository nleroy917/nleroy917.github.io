/* eslint-disable @typescript-eslint/ban-types */
import { MutableRefObject, useEffect } from 'react'

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  handler: Function,
  ignoreRefs: MutableRefObject<HTMLElement | null>[]
) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (
          ignoreRefs.some((ignoreRef) =>
            ignoreRef.current?.contains(event.target as Node)
          ) ||
          !ref ||
          !ref.current ||
          ref.current.contains(event.target as Node)
        ) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler, ignoreRefs]
  )
}
