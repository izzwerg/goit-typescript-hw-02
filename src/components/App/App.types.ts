export interface ImgProps {
  id: string;
  slug: string;
  urls: {
    [key: string]: string;
  };
  alt_description: string;
}
