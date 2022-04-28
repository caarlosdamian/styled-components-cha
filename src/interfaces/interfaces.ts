type colors = {
  colors: {
    header: string;
    body: string;
    footer: string;
  };
  mobile: string;
};

export interface Theme {
  theme: colors;
}

export interface LogoProps {
  src: string;
  alt: string;
}
export interface ButtonProps {
  bg?: string;
  color?: string;
}
export interface ImgProps {
  src: string;
  alt: string;
}
export interface CardProps {
    item: {
        id: number,
        title: string,
        body: string,
        image: string
    }
}
export interface StyleCardProps{
    layout:string|boolean
}