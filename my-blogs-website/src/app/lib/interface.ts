export interface SimpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: string; // or use 'URL' if it's a URL string
  }
  
  import { PortableTextBlock } from '@portabletext/types';

  export interface FullBlog {
    currentSlug: string;
    title: string;
    content: PortableTextBlock[]; // Rich text content as an array of blocks
    titleImage: string;
  }
  
  