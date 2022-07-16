import {
  SortDir,
  SortMode,
  SortThreshold,
} from '../components/controls/Controls';
import { PixelChoice } from '../components/Sorter';

type PixelArray = number[][][];
type RowArray = number[][];
type FlatArray = number[];
interface ImageSortProps {
  pixelChoice: PixelChoice;
  sortDir: SortDir;
  sortMode: SortMode;
  threshold: SortThreshold;
}

const imageSort = ({
  pixelChoice,
  sortDir,
  sortMode,
  threshold,
}: ImageSortProps) => {
  // console.log(pixelData);
  const makeRows = (pixels: typeof pixelData) => {
    let row: RowArray = [];
    const imgRows: PixelArray = [];

    pixels.forEach((el) => {
      row.push(el);
      if (row.length === 720) {
        imgRows.push([...row]);
        row = [];
      }
    });
    return imgRows;
  };

  const sortHorz = (rows: PixelArray) => {
    const sortRows = sortBlob(rows);
    return sortRows;
  };

  const sortVert = (rows: PixelArray) => {
    const cols = transposeImgArray(rows);
    const sortedCols = sortBlob(cols);
    const sortCols = transposeImgArray(sortedCols);
    return sortCols;
  };

  const sortHove = (rows: PixelArray) => {
    const sortedRows = sortBlob(rows);
    const cols = transposeImgArray(sortedRows);
    const sortedCols = sortBlob(cols);
    const sortCols = transposeImgArray(sortedCols);
    return sortCols;
  };

  const transposeImgArray = (array: PixelArray) => {
    return array[0].map((_, column) => array.map((row) => row[column]));
  };

  const sortBlob = (rows: PixelArray) => {
    const sortedRows: PixelArray = [];
    rows.forEach((row) => {
      row.sort((a, b): any => {
        if (
          (sortMode.mode === 'rgb' &&
            threshold.inverted === false &&
            a[sortMode.value] >= threshold.value &&
            b[sortMode.value] >= threshold.value) ||
          (sortMode.mode === 'rgb' &&
            threshold.inverted === true &&
            a[sortMode.value] <= threshold.value &&
            b[sortMode.value] <= threshold.value) ||
          (sortMode.mode === 'hsl' &&
            threshold.inverted === false &&
            sortMode.value === 0 &&
            a[sortMode.value] > (threshold.value / 255) * 360 &&
            b[sortMode.value] > (threshold.value / 255) * 360) ||
          (sortMode.mode === 'hsl' &&
            threshold.inverted === true &&
            sortMode.value === 0 &&
            a[sortMode.value] < (threshold.value / 255) * 360 &&
            b[sortMode.value] < (threshold.value / 255) * 360) ||
          (sortMode.mode === 'hsl' &&
            threshold.inverted === false &&
            sortMode.value !== 0 &&
            a[sortMode.value] > (threshold.value / 255) * 100 &&
            b[sortMode.value] > (threshold.value / 255) * 100) ||
          (sortMode.mode === 'hsl' &&
            threshold.inverted === true &&
            sortMode.value !== 0 &&
            a[sortMode.value] < (threshold.value / 255) * 100 &&
            b[sortMode.value] < (threshold.value / 255) * 100)
        ) {
          return a[sortMode.value] - b[sortMode.value];
        }
      });
      sortedRows.push(row);
    });
    return sortedRows;
  };

  const showSorted = (rows: PixelArray) => {
    // console.log(rows);
    let sortedFlat = [];
    const sortedPixels = [...rows.flat()];

    if (sortMode.mode === 'hsl') {
      const convertedPixels: RowArray = [];
      const rgb = convertRGB(sortedPixels);

      // console.log('sortedPixels', sortedPixels);
      rgb.forEach((p) => {
        convertedPixels.push(pixelChoice.rgb[p]);
      });
      // console.log('convertedPixels', convertedPixels);

      sortedFlat = [...convertedPixels.flat()];
    } else {
      sortedFlat = [...sortedPixels.flat()];
    }

    // const sortedFlat = [...sortedPixels.flat()];

    return sortedFlat;
  };

  const convertRGB = (hslPixels: number[][]) => {
    return hslPixels.map((el) => el[3]);
  };

  const choosePixels = () => {
    if (sortMode.mode === 'hsl') {
      return pixelChoice.hsl;
    }
    return pixelChoice.rgb;
  };

  const pixelData = choosePixels();
  const imageRows = makeRows(pixelData);
  let sortedImg: PixelArray = [];
  switch (sortDir) {
    case 'horz':
      sortedImg = sortHorz(imageRows);
      break;
    case 'vert':
      sortedImg = sortVert(imageRows);
      break;
    case 'hove':
      sortedImg = sortHove(imageRows);
      break;
  }

  const imageSorted = showSorted(sortedImg);
  // console.log('sorting', imageSorted);

  return imageSorted;
};

export default imageSort;
