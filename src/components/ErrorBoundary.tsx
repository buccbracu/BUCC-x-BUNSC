import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-gradient mb-4">Oops!</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Something went wrong. Please refresh the page or go back to the home page.
            </p>
            <button
              onClick={() => window.location.href = "/"}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
