import { Image } from "react-bootstrap"

interface IImageViewport {
  imageUrl: string
}

export const ImageViewport = (prop: IImageViewport) => {
  return (
    <div>
      <Image width={500} height={500} src={prop.imageUrl} />
    </div>
  );
}