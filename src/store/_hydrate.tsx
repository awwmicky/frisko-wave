import { FC, PropsWithChildren, useState, useEffect } from 'react'
import { useGlobalStore } from './'

interface IPZustandHydrate extends PropsWithChildren { }

const ZustandHydrate: FC<IPZustandHydrate> = ({ children }) => {
	const [ hydrated, setHydrated ] = useState(false)

  useEffect(() => {
		if (hydrated) return

		const unsubHydrate = useGlobalStore.persist.onHydrate(() => setHydrated(false))
    const unsubFinishHydration = useGlobalStore.persist.onFinishHydration(() => setHydrated(true))
    setHydrated(useGlobalStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
	}, [ hydrated ])

	if (!hydrated) return null
	return <>{ children }</>
}

export { ZustandHydrate }
