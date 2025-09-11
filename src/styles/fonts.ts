// Importing the font from 'next/font'
import { Geist } from 'next/font/google';

export const geist = Geist({
  subsets: ['latin'], // Define the subsets
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify the weight options
  display: 'swap', // Set font-display strategy
});
