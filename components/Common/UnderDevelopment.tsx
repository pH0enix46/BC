import Link from "next/link";
import React from "react";

interface UnderDevelopmentProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
}

export default function UnderDevelopment({
  title = "Under Development",
  message = "We're working hard to bring you amazing content. This page will be available soon!",
  showBackButton = true,
}: UnderDevelopmentProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Processing Animation */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            {/* Outer spinning ring */}
            <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            {/* Middle ring */}
            <div
              className="absolute top-2 left-2 w-16 h-16 border-4 border-primary/10 border-b-primary/50 rounded-full animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
            {/* Inner pulsing dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>

        {/* Message */}
        <p className="text-lg text-gray-400 mb-8">{message}</p>

        {/* Loading dots animation */}
        <div className="flex justify-center space-x-3 mb-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Back to home button */}
        {showBackButton && (
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
