const imagePrep = (imageData: Uint8ClampedArray) => {
  const pixelize = (data: Uint8ClampedArray) => {
    let pixel: number[] = [];
    const rgbPixels: typeof pixel[] = [];
    data.forEach((el) => {
      pixel.push(el);
      if (pixel.length === 4) {
        rgbPixels.push([...pixel]);
        pixel = [];
      }
    });
    return rgbPixels;
  };

  const convertHSL = (pixels: number[][]) => {
    const hslPixels = pixels.map((e, i) => rgb2hsl(e, i));
    return hslPixels;
  };

  const rgb2hsl = (pixel: number[], index: number) => {
    const r = pixel[0] / 255,
      g = pixel[1] / 255,
      b = pixel[2] / 255;
    const colorMin = Math.min(r, g, b),
      colorMax = Math.max(r, g, b),
      colorDelta = colorMax - colorMin;
    let l = (colorMax + colorMin) / 2;
    let s = !colorDelta ? 0 : colorDelta / (1 - Math.abs(2 * l - 1));
    let h = !colorDelta
      ? 0
      : colorMax == r
      ? (g - b) / colorDelta
      : colorMax == g
      ? 2 + (b - r) / colorDelta
      : 4 + (r - g) / colorDelta;

    h = Math.floor(60 * (h < 0 ? h + 6 : h));
    s = Math.floor(s * 100);
    l = Math.floor(l * 100);

    return [h, s, l, index];
  };

  const imagePixelsRGB = pixelize(imageData);
  const imagePixelsHSL = convertHSL(imagePixelsRGB);

  return { imagePixelsRGB, imagePixelsHSL };
};

export default imagePrep;
