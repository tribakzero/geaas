import React, { useEffect } from 'react';

const canvasRef = React.createRef<HTMLCanvasElement>();

interface CanvasProps {
  width: number;
  height: number;
  ghost: HTMLImageElement | null;
  overlay: HTMLImageElement | null;
  x: number;
  y: number;
  scale: number;
  grayscale: boolean;
  onCanvasChange: (ref: HTMLCanvasElement) => void;
}

const Canvas: React.FC<CanvasProps> = (props) => {
  const { width, height, onCanvasChange, ghost, overlay, x, y, scale, grayscale } = props;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        context.filter = `grayscale(${grayscale ? 100 : 0})`;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (ghost) context.drawImage(ghost, 0, 0, canvas.width, canvas.height);
        if (overlay) context.drawImage(overlay, x, y, overlay.width * scale, overlay.height * scale);
        onCanvasChange(canvas);
      }
    }
  }, [onCanvasChange, ghost, overlay, x, y, scale, grayscale]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Canvas;
