import React, { useState, useEffect } from 'react';

const ImageLoad = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
      // start loading original image
      const imageToLoad = new Image();
      imageToLoad.src = src;
      imageToLoad.onload = () => {
          // When image is loaded replace the src and set loading to false
          setLoading(false);
          updateSrc(src);
      }
  }, [src])

  return (
      <img
          className="image"
          src={currentSrc}
          style={{
              opacity: loading ? 0.5 : 1,
              // transition: "opacity .25s linear",
              transition: "opacity ease-in 500ms",
              clipPath: "inset(0)"
        }}
          alt={alt}
      />
  )
});

export default ImageLoad;