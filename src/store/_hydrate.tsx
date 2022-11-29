import { FC, PropsWithChildren, useState, useEffect } from 'react'
import { useGlobalStore } from './'

interface IPZustandHydrate extends PropsWithChildren { }

const ZustandHydrate: FC<IPZustandHydrate> = ({ children }) => {
	const [ hydrated, setHydrated ] = useState(useGlobalStore.persist.hasHydrated())

  useEffect(() => {
    // if (typeof window !== "undefined") setHydration(true)
		const unsubHydrate = useGlobalStore.persist.onHydrate(() => setHydrated(false))
    const unsubFinishHydration = useGlobalStore.persist.onFinishHydration(() => setHydrated(true))

    setHydrated(useGlobalStore.persist.hasHydrated())
		// console.debug('[hydrate]', useGlobalStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [ ])

	if (!hydrated) return null
	return <>{ children }</>
}

export { ZustandHydrate }
