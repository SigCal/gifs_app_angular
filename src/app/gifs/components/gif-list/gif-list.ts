import { Component } from '@angular/core';
import { GifListItem } from "./gif-list-item/gif-list-item";

interface GList {
  class: string;
  src: string;
}

@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html'
})
export class GifList {
  gList: GList[] = [
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
    },
    {
      class: "h-auto max-w-full rounded-base",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    }
  ];
}
