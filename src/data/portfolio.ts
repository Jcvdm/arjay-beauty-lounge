export type PortfolioItem = {
  full: string; // URL to full-size image in public/
  width: number;
  height: number;
  thumb: string; // URL to thumbnail (can be same as full for now)
  alt: string;
  tag?: 'nails' | 'facials' | 'brows' | 'lips' | 'skin' | 'other';
};

// Initial demo items using existing public images.
// Replace or extend with your actual portfolio photos under public/portfolio/{full,thumbs}/
export const portfolio: PortfolioItem[] = [
  {
    full: '/1.jpg',
    width: 1200,
    height: 900,
    thumb: '/1.jpg',
    alt: 'Salon interior',
    tag: 'other',
  },
  {
    full: '/1000144294.jpg',
    width: 1200,
    height: 1600,
    thumb: '/1000144294.jpg',
    alt: 'Style example 1',
    tag: 'nails',
  },
  {
    full: '/1000144295.jpg',
    width: 1200,
    height: 1600,
    thumb: '/1000144295.jpg',
    alt: 'Style example 2',
    tag: 'nails',
  },
  {
    full: '/1000144298.jpg',
    width: 1600,
    height: 1200,
    thumb: '/1000144298.jpg',
    alt: 'Style example 3',
    tag: 'nails',
  },
];

