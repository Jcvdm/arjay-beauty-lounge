export type PortfolioItem = {
  full: string; // URL to full-size image in public/
  thumb: string; // URL to thumbnail (can be same as full for now)
  alt: string;
  width?: number;
  height?: number;
  tag?: 'nails' | 'facials' | 'brows' | 'lips' | 'skin' | 'other';
};

// Use the actual gallery photos placed under public/gallery
const galleryFiles = [
  'IMG_20250815_125326_edit_246351062900067.jpg',
  'IMG_20250816_103327_edit_246253920751984.jpg',
  'IMG_20250822_153438_edit_246174917380364.jpg',
  'IMG_20250827_122512.jpg',
  'IMG_20250827_124035.jpg',
  'IMG_20250827_124115.jpg',
  'IMG_20250827_124207.jpg',
  'IMG_20250827_124238.jpg',
  'IMG_20250827_124317.jpg',
  'IMG_20250827_124438.jpg',
  'IMG_20250827_124511.jpg',
  'IMG_20250827_124622.jpg',
  'IMG_20250827_124706.jpg',
  'IMG_20250827_124741.jpg',
  'IMG_20250827_124839.jpg',
  'IMG_20250827_124908.jpg',
  'IMG_20250827_125030.jpg',
  'IMG_20250827_125105.jpg',
  'IMG_20250827_125133.jpg',
  'IMG_20250827_125311.jpg',
  'IMG_20250827_125358.jpg',
  'IMG_20250827_125441.jpg',
  'IMG_20250827_125602.jpg',
  'IMG_20250827_125645.jpg',
  'IMG_20250827_125741.jpg',
  'IMG_20250827_131103.jpg',
  'IMG_20250827_131157.jpg',
  'IMG_20250827_131247.jpg',
  'IMG_20250827_131344.jpg',
  'IMG_20250827_131428.jpg',
  'IMG_20250827_131516.jpg',
  'IMG_20250827_131606.jpg',
  'IMG_20250827_131731.jpg',
  'IMG_20250827_131827.jpg',
  'IMG_20250827_131903.jpg',
  'IMG_20250827_131942.jpg',
  'IMG_20250827_132020.jpg',
  'IMG_20250827_132108.jpg',
  'IMG_20250827_132156.jpg',
];

export const portfolio: PortfolioItem[] = galleryFiles.map((name) => ({
  full: `/gallery/${name}`,
  thumb: `/gallery/${name}`,
  alt: 'Portfolio photo',
}));
