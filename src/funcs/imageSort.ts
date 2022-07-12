import { SortDir, SortMode } from "../components/controls/Controls";

interface ImageSortProps {
  pixelData: number[][],
  sortDir: SortDir,
  sortMode: SortMode,
}

const imageSort = ({pixelData, sortDir, sortMode}: ImageSortProps) => {  
  const makeRows = (pixels: typeof pixelData) => {
		let row: number[][] = [];
		let imgRows: number[][][] = [];

		pixels.forEach(el => {
			row.push(el);
			if (row.length === 720) {
				imgRows.push([...row]);
				row = [];
			};
		});
		return imgRows;
	}

  const sortHorz = (rows: number[][][]) => {
		const sortRows = sortBlob(rows);
		return sortRows;
	}

  const sortBlob = (rows: number[][][]) => {
    let sortRow: number[][][] = [];
    rows.forEach(row => {
      row.sort((a: any, b: any) => a[0] - b[0]);
      sortRow.push(row);
    });
    return sortRow;
  }

  const showSorted = (rows: number[][][]) => {
    const sortedPixels = [...rows.flat()];
    const sortedFlat = [...sortedPixels.flat()];

    return sortedFlat;
  }

  // const convertRGB = (blob: number[][]) => {
	// 	return blob.map(el => el[3]);
	// };

  const imageRows = makeRows(pixelData);
  const sortedRows = sortHorz(imageRows);
  const imageSorted = showSorted(sortedRows);
  // console.log('sorting', imageSorted);

  return imageSorted;
}

export default imageSort;