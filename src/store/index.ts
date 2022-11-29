import create from 'zustand'
import { devtools, persist, DevtoolsOptions, PersistOptions } from 'zustand/middleware'
import { TMiddleware, createCartStore, TCartStore } from './global'
import { ZustandHydrate } from './_hydrate'
import { storage } from './_storage'

type TGlobalStore = TCartStore

const KEY_STORE = 'GLOBAL_STORE'
const devtoolsOptions: DevtoolsOptions = {
	name: KEY_STORE,
}
const persistOptions: PersistOptions<TGlobalStore> = {
  name: KEY_STORE,
	getStorage: () => storage,
}

const useGlobalStore = create<TGlobalStore, TMiddleware<TGlobalStore>>(
  devtools(persist((set, get, api) => ({
    ...createCartStore(set, get, api as never),
	}), persistOptions), devtoolsOptions)
)

export {
	ZustandHydrate,
	useGlobalStore,
}
