import React, { useEffect, useRef } from 'react';

const BgCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colorDot = [
      'rgb(81, 162, 233)',
      'rgb(81, 162, 233)',
      'rgb(81, 162, 233)',
      'rgb(255, 77, 90)',
    ];
    const color = 'rgb(81, 162, 233)';

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = color;

    const mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
    };

    const windowSize = window.innerWidth;
    let dots: { nb: number; distance: number; d_radius: number; array: any[] };

    if (windowSize > 1600) {
      dots = { nb: 100, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 1300) {
      dots = { nb: 75, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 1100) {
      dots = { nb: 50, distance: 0, d_radius: 0, array: [] };
    } else {
      dots = { nb: 1, distance: 0, d_radius: 0, array: [] };
      ctx.globalAlpha = 0;
    }

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colour: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5;
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
      }

      create() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx!.fillStyle = this.colour;
        ctx!.fill();
      }

      animate() {
        for (let i = 0; i < dots.nb; i++) {
          const dot = dots.array[i];

          if (dot.y < 0 || dot.y > canvas!.height) {
            dot.vx = dot.vx;
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas!.width) {
            dot.vx = -dot.vx;
            dot.vy = dot.vy;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
        const dot = dots.array[i];
        dot.create();
      }
      dots.array[0].radius = 1.5;
      dots.array[0].colour = '#51a2e9';
      dots.array[dots.array.length - 1].animate();
    }

    const interval = setInterval(draw, 1000 / 30);

    const handleResize = () => {
      clearInterval(interval);
      canvas!.width = document.body.scrollWidth;
      canvas!.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-bg" />;
};

export default BgCanvas;
