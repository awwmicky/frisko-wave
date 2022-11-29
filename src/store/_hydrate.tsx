import { FC, PropsWithChildren, useState, useEffect } from 'react'

interface IPZustandHydrate extends PropsWithChildren { }

const ZustandHydrate: FC<IPZustandHydrate> = ({ children }) => {
	const [ hydration, setHydration ] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") setHydration(true)
  }, [ ])

	if (!hydration) return null
	return <>{ children }</>
}

export { ZustandHydrate }
