import { IProduct } from '@/pages/blog'

export type Data = {
  [key: string]: string
}
export const datas: Omit<IProduct, 'imageUrls'>[] = [
  {
    label: 'Daniella Chavez',
    imageUrl: '/10.JPG',
    description: 'who is the best model you think?',
    category: 1,
  },
  {
    label: '___jummm___',
    imageUrl: '/2.JPG',
    description: 'who is the best model you think?',
    category: 2,
  },
  {
    label: '정주미',
    imageUrl: '/1.jpg',
    description: 'who is the best model you think?',
    category: 2,
  },
  {
    label: '스텔라',
    imageUrl: '/3.WEBP',
    description: 'who is the best model you think?',
    category: 3,
  },
  {
    label: 'Stella',
    imageUrl: '/4.JPG',
    description: 'who is the best model you think?',
    category: 3,
  },
  {
    label: '수연',
    imageUrl: '/5.jpg',
    description: 'who is the best model you think?',
    category: 4,
  },
  {
    label: 'candy_seul',
    imageUrl: '/6.JPG',
    description: 'who is the best model you think?',
    category: 5,
  },
  {
    label: '최소미',
    imageUrl: '/9.JPG',
    description: 'who is the best model you think?',
    category: 6,
  },
  {
    label: '다니엘라 차베즈',
    imageUrl: '/7.JPG',
    description: 'who is the best model you think?',
    category: 7,
  },
  {
    label: 'daniella',
    imageUrl: '/8.WEBP',
    description: 'who is the best model you think?',
    category: 7,
  },
].map((el, index) => ({ ...el, _id: (index + 1).toString(), productId: 1001 + index }))
