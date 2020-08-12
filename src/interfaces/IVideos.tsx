type TProps = {
  [key: string]: IVideosSize;
};

interface IVideosSize {
  height: number;
  size: number;
  url: string;
  width: number;
}

export interface IVideos {
  comments: number;
  downloads: number;
  duration: number;
  favorites: number;
  id: number;
  likes: number;
  pageURL: string;
  picture_id: string;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  videos: TProps;
  views: number;
}
