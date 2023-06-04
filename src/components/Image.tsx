import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ImageProps {
  imageUrl: string | undefined;
  children?: React.ReactNode;
}

const Image = ({ imageUrl, children }: PropsWithChildren<ImageProps>) => {
  return <BaseImage imageUrl={imageUrl}>{children}</BaseImage>;
};

Image.DetailCharacter = ({ imageUrl, children }: PropsWithChildren<ImageProps>) => {
  return <DetailCharacterImage imageUrl={imageUrl}>{children}</DetailCharacterImage>;
};

export default Image;

const BaseImage = styled.div<{ imageUrl: string | undefined }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
`;

const DetailCharacterImage = styled(BaseImage)`
  width: 300px;
  height: 300px;
  border: 5px solid white;
`;
