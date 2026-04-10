export interface Gif {
  id: string;
  title: string;
  url: string;
  weight: number;
  height: number;
}

export const mockGifs: Gif[] = [
  {
    id: '1',
    title: 'Funny Cat',
    url: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    weight: 500,
    height: 300,
  },
  {
    id: '2',
    title: 'Dancing Dog',
    url: 'https://media.giphy.com/media/3o7TKsQkq1Z4d0985W/giphy.gif',
    weight: 600,
    height: 400,
  },
  {
    id: '3',
    title: 'Excited Baby',
    url: 'https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif',
    weight: 700,
    height: 500,
  },
];