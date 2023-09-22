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
    <ErrorBoundaryContainer>
      <NoticeMessage>오류가 발생했습니다!</NoticeMessage>
      <ErrorMessage>{error.message}</ErrorMessage>
      <RetryButton onClick={handleRetry}>다시 시도하기</RetryButton>
    </ErrorBoundaryContainer>
  );
};

export default FallbackErrorBoundary;

const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const NoticeMessage = styled.h2`
  color: white;
  font-size: 30px;
`;
const ErrorMessage = styled.pre`
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
