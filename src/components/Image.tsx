import styled from 'styled-components';

const defaultImage = new URL('/defaultImage.png', import.meta.url).href;

const Image = ({ imageUrl, alt }: { imageUrl: string | undefined; alt: string | undefined }) => {
  return <BaseImage alt={alt} src={imageUrl ? imageUrl : defaultImage} />;
};

Image.DetailCharacter = ({ imageUrl, alt }: { imageUrl: string | undefined; alt: string | undefined }) => {
  return <DetailCharacterImage alt={alt} src={imageUrl ? imageUrl : defaultImage} />;
};

export default Image;

const BaseImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
`;

const DetailCharacterImage = styled(BaseImage)`
  width: 300px;
  height: 300px;
  border: 5px solid white;
`;
