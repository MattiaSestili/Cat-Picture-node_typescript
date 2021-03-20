import { Image } from "react-bootstrap"

interface IImageViewport {
  imageUrl: string
}

/*
 * Simple viewport to load an image 500x500
 * @param {IImageViewport}
 */
export const ImageViewport = (props: IImageViewport) => {
  return (
    <div>
      <Image width={500} height={500} src={props.imageUrl} />
    </div>
  );
}