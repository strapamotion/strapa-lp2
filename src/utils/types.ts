import { StaticImageData } from "next/image";

export type Client = {
  name: string;
  img: StaticImageData;
  url?: string;
};
