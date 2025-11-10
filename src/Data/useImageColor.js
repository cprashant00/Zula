import { useState, useEffect } from "react";

const useImageColor = (imageUrl) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!imageUrl) {
      setColor(null);
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous"; // Important for cross-origin images

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Get color from the bottom-right pixel (or near it)
      const x = img.width - 2; // Sample near the edge
      const y = img.height - 2;
      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      const rgbaColor = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`;
      
      setColor(rgbaColor);
    };

    img.onerror = () => {
      console.error("Failed to load image for color extraction.");
      setColor(null);
    };

    img.src = imageUrl;

  }, [imageUrl]);

  return color;
};

export default useImageColor;
