import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AddGadget } from '../AddGadget'
import { useGadgets } from '@/context/GadgetContext'

export function Gadgets() {
  const { gadgets } = useGadgets()

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const stagger = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.section
      id="gadget"
      className="py-20"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className="container">
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">Available Gadgets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of premium gadgets available for rent. All
            devices come fully insured and maintained.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger}>
          {gadgets.map((gadget) => (
            <motion.div
              key={gadget.id}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{gadget.name}</CardTitle>
                  <CardDescription>{gadget.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <motion.div
                    className="space-y-4"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-center">
                      <motion.img
                        src={gadget.image}
                        alt={gadget.name}
                        className="w-56 h-56 object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">
                          ₹{gadget.pricing.daily}
                        </p>
                        <p className="text-sm text-muted-foreground">per day</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          ₹{gadget.pricing.weekly}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          per week
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          ₹{gadget.pricing.monthly}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          per month
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {gadget.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-2 text-primary"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <Button className="w-full mt-4">Rent Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={fadeInUp}>
          <h3 className="text-2xl font-bold mb-4">Have a Gadget to Rent?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            List your gadget on our platform and earn passive income. We handle
            the insurance and maintenance.
          </p>
          <AddGadget />
        </motion.div>
      </div>
    </motion.section>
  )
}
