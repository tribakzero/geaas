export const getFileURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => resolve(event.target?.result?.toString() as string);
    fileReader.onerror = (error) => reject(error);
  });
};

const imageCache: Record<string, HTMLImageElement> = {};

export const getImageFromURL = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    if (url in imageCache) resolve(imageCache[url]);
    const image = new Image();
    image.src = url;
    image.onload = () => {
      imageCache[url] = image;
      resolve(image);
    };
    image.onerror = (error) => {
      reject(error);
    };
  });
};

export const canvasToPNG = (canvas: HTMLCanvasElement): string => canvas.toDataURL('image/png');
