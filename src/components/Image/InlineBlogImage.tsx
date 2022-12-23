import React from "react";

interface InlineBlogImageProps {
  src: string;
  altText: string;
  size: number;
}

export const InlineBlogImage = ({
  src,
  size,
  altText,
}: InlineBlogImageProps) => {
  return (
    <>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          className="shadow--tl"
          src={src}
          width={`${size}`}
          style={{ border: "1px solid #fff", borderRadius: "3px" }}
        />
        <p
          className="ifm-color-primary-dark"
          style={{
            fontSize: "12px",
            fontStyle: "italic",
            paddingTop: "4px",
          }}
        >
          {altText}
        </p>
      </div>
      <br />
    </>
  );
};
