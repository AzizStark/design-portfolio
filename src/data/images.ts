const firstImage = require('../images/1.jpg');
const secondImage = require('../images/2.jpg');
const thirdImage = require('../images/3.jpg');
const fourthImage = require('../images/4.jpg');
const fifthImage = require('../images/5.jpg');

const sixthImage = require('../images/6.jpg');
const seventhImage = require('../images/7.jpg');
const eighthImage = require('../images/8.jpg');
const ninthImage = require('../images/9.jpg');

export enum ImageTags {
  Any = 'All',
  PhotoManipulation = 'Photo Manipulation',
  GraphicDesign = 'Graphic Design',
}

export interface ImageData {
  image: any;
  name: string;
  tags: string[];
}

export const designImages: ImageData[] = [
  {
    image: firstImage,
    name: 'Night Edit',
    tags: [ImageTags.Any, ImageTags.PhotoManipulation],
  },
  {
    image: secondImage,
    name: 'Old Couple Edit',
    tags: [ImageTags.Any, ImageTags.PhotoManipulation],
  },
  {
    image: thirdImage,
    name: 'MMM',
    tags: [ImageTags.Any, ImageTags.GraphicDesign],
  },
  {
    image: fourthImage,
    name: 'Soul Notes',
    tags: [ImageTags.Any, ImageTags.GraphicDesign],
  },
  {
    image: fifthImage,
    name: 'Steps Manipulation',
    tags: [ImageTags.Any, ImageTags.PhotoManipulation],
  },
  {
    image: sixthImage,
    name: 'School Logo',
    tags: [ImageTags.Any, ImageTags.GraphicDesign],
  },
  {
    image: seventhImage,
    name: 'Personal Logo',
    tags: [ImageTags.Any, ImageTags.GraphicDesign],
  },
  {
    image: eighthImage,
    name: 'Business Card',
    tags: [ImageTags.Any, ImageTags.GraphicDesign],
  },
  {
    image: ninthImage,
    name: 'Soul Notes Book Wrapper',
    tags: [ImageTags.Any, ImageTags.GraphicDesign],
  },
];
