import React from "react";

interface ErrorProps {
  error?: string;
}

export const Error: React.FC<ErrorProps> = ({
  error = "Sorry this is not available",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10vh",
        fontSize: "3vmin",
      }}
    >
      {error}
    </div>
  );
};

export default Error;
