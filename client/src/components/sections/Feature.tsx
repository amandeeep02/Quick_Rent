import { Laptop, Camera, Gamepad, Truck, Shield, Clock } from 'lucide-react'

export function Feature() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Why Choose QuickRent?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Laptop className="h-8 w-8" />,
              title: 'Wide Variety',
              description: 'From MacBooks to Gaming Rigs',
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: 'Quick Delivery',
              description: 'Same day delivery in select areas',
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: 'Secure Rentals',
              description: 'All gadgets are insured and verified',
            },
            {
              icon: <Camera className="h-8 w-8" />,
              title: 'Quality Products',
              description: 'All gadgets are verified and tested',
            },
            {
              icon: <Gamepad className="h-8 w-8" />,
              title: 'Easy Returns',
              description: 'Return your gadget within 7 days',
            },
            {
              icon: <Truck className="h-8 w-8" />,
              title: 'Free Shipping',
              description: 'Free shipping on all orders',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card text-center border shadow-sm"
            >
              <div className="mx-auto w-fit mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
