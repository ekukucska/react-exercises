import React from 'react';
import ErrorBoundaryTest from '../../components/ErrorBoundary/ErrorBoundaryTest';
import ErrorBoundary from '../../components/ErrorBoundary';

const ErrorBoundaryPage = () => {
  return (
    <ErrorBoundary>
      <ErrorBoundaryTest />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryPage;
