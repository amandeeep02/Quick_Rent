import { Button } from '../ui/button'
// import { useNavigate } from 'react-router-dom'
import { BackgroundBeams } from '../ui/background-beams'

export function Hero() {
  return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 pt-20">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          QuickRent
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Access premium laptops, cameras, and gaming consoles without the
          commitment of buying.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button
            className="relative z-20 w-full md:w-auto group overflow-hidden 
              bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 
              hover:to-blue-700 transition-all duration-300 transform hover:scale-105
              flex items-center gap-2"
            size="lg"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('gadget')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Rentals
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  )
}
