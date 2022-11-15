import { FC, PropsWithChildren } from 'react'

interface IPLayer extends PropsWithChildren {}

const Layer: FC<IPLayer> = ({ children }) => (
  <div className="container mx-auto">{ children }</div>
)

export { Layer }