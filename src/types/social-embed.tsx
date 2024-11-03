export interface InstagramEmbedProps {
    postUrl: string;
    caption?: string;
    hideCaption?: boolean;
    maxWidth?: number;
  }
  
  export interface TwitterEmbedProps {
    tweetUrl: string;
    theme?: 'light' | 'dark';
    maxWidth?: number;
  }