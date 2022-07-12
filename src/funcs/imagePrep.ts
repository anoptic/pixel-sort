const imagePrep = (imageData: Uint8ClampedArray) => {
  const pixelize = (data: Uint8ClampedArray) => {
    let pixel: number[] = [];
    let rgbPixels: typeof pixel[] = [];
    data.forEach(el => {
      pixel.push(el);
      if (pixel.length === 4) {
        rgbPixels.push([...pixel]);
        pixel = [];
      }
    });
    return rgbPixels;
  }
  
  const convertHSL = (pixels: number[][]) => {
    const hslPixels = pixels.map((e,i) => rgb2hsl(e,i));
    return hslPixels;
  }
  
  const rgb2hsl = (pixel: number[], index: number) => {
    let r = pixel[0]/255, g = pixel[1]/255, b = pixel[2]/255;
    let cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = (cmax-cmin);
    let l = (cmax + cmin) / 2;
    let s = !delta ? 0 : delta / (1 - Math.abs(2 * l - 1));
    let h = !delta ? 0 : cmax==r ? (g-b)/delta : cmax==g ? 2+(b-r)/delta : 4+(r-g)/delta;
    
    h = Math.floor(60 * (h<0 ? h+6 : h));
    s = Math.floor(s * 100);
    l = Math.floor(l * 100);
  
    return [h, s, l, index];
  }

  const imagePixelsRGB = pixelize(imageData);
  const imagePixelsHSL = convertHSL(imagePixelsRGB);

  return {imagePixelsRGB, imagePixelsHSL}
}

export default imagePrep;