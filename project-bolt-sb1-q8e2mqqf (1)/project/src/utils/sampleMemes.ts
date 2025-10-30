import { Meme } from '../types/meme';

export const sampleMemes: Meme[] = [
  {
    id: 'meme-1',
    imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'When you finally understand blockchain but still can\'t explain it to your mom 😅',
    author: '7xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
    timestamp: Date.now() - 3600000, // 1 hour ago
    likes: 42,
    likedBy: ['5xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c'],
    comments: [
      {
        id: 'comment-1',
        text: 'This is literally me every time someone asks about crypto 😂',
        author: '5xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 1800000
      }
    ]
  },
  {
    id: 'meme-2',
    imageUrl: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'POV: You\'re checking your portfolio at 3 AM 📉💀',
    author: '8xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
    timestamp: Date.now() - 7200000, // 2 hours ago
    likes: 128,
    likedBy: [
      '5xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
      '9xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c'
    ],
    comments: [
      {
        id: 'comment-2',
        text: 'Why did you have to call me out like this? 😭',
        author: '9xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 3600000
      },
      {
        id: 'comment-3',
        text: 'Diamond hands baby! 💎🙌',
        author: '6xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 1800000
      }
    ]
  },
  {
    id: 'meme-3',
    imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Me explaining to my friends why I spent my rent money on a JPEG 🖼️✨',
    author: '9xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
    timestamp: Date.now() - 10800000, // 3 hours ago
    likes: 89,
    likedBy: ['7xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c'],
    comments: [
      {
        id: 'comment-4',
        text: 'NFTs are the future bro, trust me 🚀',
        author: '7xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 7200000
      }
    ]
  },
  {
    id: 'meme-4',
    imageUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'When someone says "blockchain is just a fad" but you\'re already living in 2030 🤖⚡',
    author: '6xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
    timestamp: Date.now() - 14400000, // 4 hours ago
    likes: 156,
    likedBy: [
      '5xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
      '8xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
      '9xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c'
    ],
    comments: []
  },
  {
    id: 'meme-5',
    imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'That feeling when gas fees cost more than your actual transaction 💸😤',
    author: '5xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
    timestamp: Date.now() - 18000000, // 5 hours ago
    likes: 203,
    likedBy: [
      '6xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
      '7xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
      '8xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c'
    ],
    comments: [
      {
        id: 'comment-5',
        text: 'This is why we need Solana! ⚡',
        author: '8xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 14400000
      },
      {
        id: 'comment-6',
        text: 'Ethereum maxis crying rn 😭',
        author: '6xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 10800000
      }
    ]
  },
  {
    id: 'meme-6',
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Web3 developers be like: "It\'s not a bug, it\'s a feature of decentralization" 🐛🌐',
    author: '4xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
    timestamp: Date.now() - 21600000, // 6 hours ago
    likes: 74,
    likedBy: ['9xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c'],
    comments: [
      {
        id: 'comment-7',
        text: 'As a dev, I feel personally attacked 😂',
        author: '9xKj9mP2qR8sT3vW4nX5yZ6aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wX2yZ3aB4c',
        timestamp: Date.now() - 18000000
      }
    ]
  }
];

export const initializeSampleMemes = () => {
  const existingMemes = localStorage.getItem('memes');
  if (!existingMemes || JSON.parse(existingMemes).length === 0) {
    localStorage.setItem('memes', JSON.stringify(sampleMemes));
  }
};