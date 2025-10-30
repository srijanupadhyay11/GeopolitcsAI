export interface Meme {
  id: string;
  imageUrl: string;
  caption: string;
  author: string;
  timestamp: number;
  likes: number;
  likedBy: string[];
  comments?: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: number;
}

export interface MemeUpload {
  image: File;
  caption: string;
}