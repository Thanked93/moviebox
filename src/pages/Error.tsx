import React from "react";

interface ErrorProps {
  error: string;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {error}
    </div>
  );
};

export default Error;
