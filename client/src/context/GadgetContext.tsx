import { createContext, useContext, useState } from 'react'
import { gadgets as initialGadgets } from '@/data/gadgets'

type Gadget = {
  id: string
  name: string
  category: 'laptop' | 'camera' | 'console'
  image: string
  description: string
  pricing: {
    daily: number
    weekly: number
    monthly: number
  }
  features: string[]
}

type GadgetsContextType = {
  gadgets: Gadget[]
  addGadget: (gadget: Gadget) => void
}

const GadgetsContext = createContext<GadgetsContextType | null>(null)

export function GadgetsProvider({ children }: { children: React.ReactNode }) {
  const [gadgets, setGadgets] = useState(initialGadgets)

  const addGadget = (gadget: Gadget) => {
    setGadgets([...gadgets, gadget])
  }

  return (
    <GadgetsContext.Provider value={{ gadgets, addGadget }}>
      {children}
    </GadgetsContext.Provider>
  )
}

export const useGadgets = () => {
  const context = useContext(GadgetsContext)
  if (!context)
    throw new Error('useGadgets must be used within GadgetsProvider')
  return context
}
