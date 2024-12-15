export interface Gadget {
  id: string
  name: string
  category: string
  image: string
  description: string
  pricing: {
    daily: number
    weekly: number
    monthly: number
  }
  features: string[]
}

export const gadgets: Gadget[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'laptop',
    image:
      'https://istore.ke/wp-content/uploads/2023/09/macbook_pro_14-in_m2_chip_space_gray_pure_front_screen__usen_1_1.webp',
    description: 'Latest MacBook Pro with M2 chip',
    pricing: {
      daily: 500,
      weekly: 3000,
      monthly: 10000,
    },
    features: ['M2 Pro/Max Chip', '32GB RAM', '1TB SSD', 'Pro Display XDR'],
  },
  {
    id: '2',
    name: 'Sony A7III',
    category: 'camera',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqu8oK5RJj2IzDOzV0TZXJh5VHyMRCQVYNqmqJEkndhIjSZ1U4LFecP27ea4h1LdKzaSWudMSIdf-i2hUgMMjF-s_KKchC',
    description: 'Professional mirrorless camera',
    pricing: {
      daily: 400,
      weekly: 2500,
      monthly: 8000,
    },
    features: [
      '24.2MP Full-Frame Sensor',
      '4K Video',
      'In-Body Stabilization',
      'Dual SD Slots',
    ],
  },
  {
    id: '3',
    name: 'PS5 Console',
    category: 'console',
    image:
      'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712137916/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305987_tlfvzh.png',
    description: 'Next-gen gaming console',
    pricing: {
      daily: 300,
      weekly: 1800,
      monthly: 6000,
    },
    features: ['4K Gaming', 'Ray Tracing', 'DualSense Controller', '825GB SSD'],
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    category: 'laptop',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8WUsYPhlM1Dg8l9fAEwYbV9oJtXHGWAhyA&s',
    description: 'Thin and light laptop',
    pricing: {
      daily: 400,
      weekly: 2500,
      monthly: 8000,
    },
    features: ['11th Gen Intel', '16GB RAM', '512GB SSD', '4K Touch Display'],
  },
  {
    id: '5',
    name: 'Canon EOS R5',
    category: 'camera',
    image:
      'data:image/jpeg;base64,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',
    description: '8K mirrorless camera',
    pricing: {
      daily: 500,
      weekly: 3000,
      monthly: 10000,
    },
    features: [
      '45MP Full-Frame Sensor',
      '8K RAW Video',
      'In-Body Stabilization',
      'Dual Pixel AF',
    ],
  },
  {
    id: '6',
    name: 'Xbox Series X',
    category: 'console',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFRrbQ9WDJ6hiIreMaoOfVVLfR6gzKlr5bw&s',
    description: 'Next-gen gaming console',
    pricing: {
      daily: 300,
      weekly: 1800,
      monthly: 6000,
    },
    features: ['4K Gaming', 'Ray Tracing', 'Xbox Game Pass', '1TB SSD'],
  },
]
