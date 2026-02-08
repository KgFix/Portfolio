import React, { useEffect, useRef } from 'react';

interface DotInstance {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
  create: () => void;
}

interface DotsConfig {
  nb: number;
  distance: number;
  d_radius: number;
  array: DotInstance[];
}

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const isMouseInRef = useRef(false);
  const dotsRef = useRef<DotsConfig | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colorDot = [
      'rgb(81, 162, 233)',
      'rgb(81, 162, 233)',
      'rgb(81, 162, 233)',
      'rgb(81, 162, 233)',
      'rgb(255, 77, 90)',
    ];
    const color = 'rgb(81, 162, 233)';

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    ctx.lineWidth = 0.3;
    ctx.strokeStyle = color;

    const windowSize = window.innerWidth;
    let dotsConfig: DotsConfig;

    if (windowSize > 1600) {
      dotsConfig = { nb: 600, distance: 70, d_radius: 300, array: [] };
    } else if (windowSize > 1300) {
      dotsConfig = { nb: 575, distance: 60, d_radius: 280, array: [] };
    } else if (windowSize > 1100) {
      dotsConfig = { nb: 500, distance: 55, d_radius: 250, array: [] };
    } else if (windowSize > 800) {
      dotsConfig = { nb: 300, distance: 0, d_radius: 0, array: [] };
    } else if (windowSize > 600) {
      dotsConfig = { nb: 200, distance: 75, d_radius: 200, array: [] };
    } else {
      dotsConfig = { nb: 100, distance: 75, d_radius: 200, array: [] };
    }

    dotsRef.current = dotsConfig;

    // Set initial mouse position
    mousePositionRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Auto-movement state for mobile
    const autoMouse = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: 2,
      vy: 2
    };

    class DotClass implements DotInstance {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      radius: number = 0;
      colour: string = '';

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5;
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
      }

      create() {
        if (!ctx || !canvas) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        const dotDistance = Math.sqrt(
          (this.x - mousePositionRef.current.x) ** 2 +
            (this.y - mousePositionRef.current.y) ** 2
        );
        const distanceRatio = dotDistance / (windowSize / 1.7);

        ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
        ctx.fill();
      }
    }

    const createDots = () => {
      if (!dotsRef.current) return;

      // Randomize line animations on mobile OR if mouse is not in view
      if (window.innerWidth <= 800 || !isMouseInRef.current) {
        autoMouse.x += autoMouse.vx;
        autoMouse.y += autoMouse.vy;

        if (autoMouse.x < 0 || autoMouse.x > canvas.width) autoMouse.vx = -autoMouse.vx;
        if (autoMouse.y < 0 || autoMouse.y > canvas.height) autoMouse.vy = -autoMouse.vy;

        mousePositionRef.current.x = autoMouse.x;
        mousePositionRef.current.y = autoMouse.y;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (dotsRef.current.array.length === 0) {
        for (let i = 0; i < dotsRef.current.nb; i++) {
          dotsRef.current.array.push(new DotClass());
        }
        dotsRef.current.array[0].radius = 1.5;
        dotsRef.current.array[0].colour = '#51a2e9';
      }

      // Animate dots
      for (let i = 1; i < dotsRef.current.nb; i++) {
        const dot = dotsRef.current.array[i];

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }

      // Draw dots
      for (let i = 0; i < dotsRef.current.nb; i++) {
        dotsRef.current.array[i].create();
      }

      // Draw lines
      for (let i = 0; i < dotsRef.current.nb; i++) {
        for (let j = 0; j < dotsRef.current.nb; j++) {
          const i_dot = dotsRef.current.array[i];
          const j_dot = dotsRef.current.array[j];

          if (
            i_dot.x - j_dot.x < dotsRef.current.distance &&
            i_dot.y - j_dot.y < dotsRef.current.distance &&
            i_dot.x - j_dot.x > -dotsRef.current.distance &&
            i_dot.y - j_dot.y > -dotsRef.current.distance
          ) {
            if (
              i_dot.x - mousePositionRef.current.x < dotsRef.current.d_radius &&
              i_dot.y - mousePositionRef.current.y < dotsRef.current.d_radius &&
              i_dot.x - mousePositionRef.current.x > -dotsRef.current.d_radius &&
              i_dot.y - mousePositionRef.current.y > -dotsRef.current.d_radius
            ) {
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);

              const dotDistance = Math.sqrt(
                (i_dot.x - mousePositionRef.current.x) ** 2 +
                  (i_dot.y - mousePositionRef.current.y) ** 2
              );
              let distanceRatio = dotDistance / dotsRef.current.d_radius;

              distanceRatio -= 0.3;
              if (distanceRatio < 0) {
                distanceRatio = 0;
              }

              ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    };

    // Animation loop
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;
      if (deltaTime > interval) {
        lastTime = currentTime - (deltaTime % interval);
        createDots();
      }
    };

    animate(0);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Check if mouse is within hero section bounds
      if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        isMouseInRef.current = true;
        mousePositionRef.current.x = x;
        mousePositionRef.current.y = y;
        
        // Sync auto mouse so it picks up from here when leaving
        autoMouse.x = x;
        autoMouse.y = y;
      } else {
        isMouseInRef.current = false;
      }

      if (dotsRef.current && dotsRef.current.array[0]) {
        dotsRef.current.array[0].x = x;
        dotsRef.current.array[0].y = y;
      }
    };
    
    const handleMouseLeave = () => {
      isMouseInRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Add specific leave listener to window to catch exiting viewport
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget) {
         handleMouseLeave();
      }
    });

    // Resize handler
    const handleResize = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (dotsRef.current) {
        dotsRef.current.array = [];
      }
      resizeCanvas();
      animate(0);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
};

export default HeroCanvas;
