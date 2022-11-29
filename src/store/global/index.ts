import type { StateCreator } from 'zustand'

export type TMiddleware<P> = [ ['zustand/devtools', never], ["zustand/persist", P] ]
export type TStore<A = {}> = StateCreator<A , TMiddleware<A>, []>

export * from './_cart.store'
