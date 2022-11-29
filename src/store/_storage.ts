import type { StateStorage } from 'zustand/middleware'
import * as local from 'idb-keyval'

export const storage: StateStorage = {
  getItem: async (name: string) => {
    // console.debug('[get local]', name)
    return (await local.get(name)) || null
  },
  setItem: async (name: string, value: any) => {
    // console.debug('[set local]', name)
		// console.table(JSON.parse(value).state)
    await local.set(name, value)
  },
  removeItem: async (name: string) => {
    // console.debug('[delete local]', name)
    await local.del(name)
  },
}


// export const storage: StateStorage = {
//   getItem: async (name: string): Promise<any | null> => {
//     // console.debug('[get local]', name)
//     return (await local.get(name)) || null
//   },
//   setItem: async (name: string, value: any): Promise<void> => {
//     // console.debug('[set local]', name)
// 		// console.table(JSON.parse(value).state)
//     await local.set(name, value)
//   },
//   removeItem: async (name: string): Promise<void> => {
//     // console.debug('[delete local]', name)
//     await local.del(name)
//   },
// }
