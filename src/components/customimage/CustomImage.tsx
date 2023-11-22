import {
  CustomDivJustify,
  CustomImages,
  CustomMainDiv,
  CustomStrong,
} from "./CustomeImageStyles";

interface Image {
  url: string;
  title: string;
  description: string;
  id: number;
}
export interface customImageProps {
  image: Image;
}
const CustomImage = ({ image }: customImageProps) => {
  return (
    <CustomMainDiv>
      <CustomImages src={image.url} alt={`Image ${image.id}`} />
      <CustomDivJustify>
        <CustomStrong>title:</CustomStrong> {image.title}
      </CustomDivJustify>
      <CustomDivJustify>
        <CustomStrong>description:</CustomStrong> {image.description}
      </CustomDivJustify>
    </CustomMainDiv>
  );
};

export default CustomImage;
