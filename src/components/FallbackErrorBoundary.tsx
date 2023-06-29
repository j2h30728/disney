import styled from 'styled-components';

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const FallbackErrorBoundary = ({ error, resetErrorBoundary }: ErrorBoundaryProps) => {
  const handleRetry = () => {
    resetErrorBoundary();
  };

  return (
    <ErrorBoundaryConteiner>
      <NotieceMessage>오류가 발생했습니다!</NotieceMessage>
      <ErrorMeassage>{error.message}</ErrorMeassage>
      <RetryButton onClick={handleRetry}>새로고침</RetryButton>
    </ErrorBoundaryConteiner>
  );
};

export default FallbackErrorBoundary;

const ErrorBoundaryConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const NotieceMessage = styled.h2`
  color: white;
  font-size: 30px;
`;
const ErrorMeassage = styled.pre`
  color: red;
`;

const RetryButton = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  transition: ease-in 0.1s;

  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
    background-color: gray;
  }
`;
