import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const nodesRef = useRef<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // 🎯 تنظیمات بر اساس سایز صفحه
  const getNodeCount = () => {
    const w = window.innerWidth;
    if (w < 600) return 25; // موبایل
    if (w < 1200) return 50; // تبلت
    return 80; // دسکتاپ
  };

  const CONNECTION_DISTANCE = 150;
  const LINE_COLOR = "#B9FF66";
  const NODE_COLOR = "#eeeeee";
  const NODE_RADIUS = 2;

  const initNodes = (width: number, height: number, count: number): Node[] => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3, // 🧠 سرعت کمتر
      vy: (Math.random() - 0.5) * 0.3,
    }));
  };

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      if (canvasRef.current) {
        nodesRef.current = initNodes(width, height, getNodeCount());
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const nodes = nodesRef.current;
    const quadStep = 3; // 🧠 فریم‌اسکیپ برای کاهش مصرف

    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % quadStep === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        }

        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.8;

        // 🧮 بهینه‌سازی حلقه‌ها با فاصله محدودتر
        for (let i = 0; i < nodes.length; i++) {
          const node1 = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const node2 = nodes[j];
            const dx = node2.x - node1.x;
            const dy = node2.y - node1.y;
            const distanceSq = dx * dx + dy * dy;
            if (distanceSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
              const opacity = 1 - Math.sqrt(distanceSq) / CONNECTION_DISTANCE;
              ctx.globalAlpha = opacity * 0.7;
              ctx.beginPath();
              ctx.moveTo(node1.x, node1.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.stroke();
            }
          }
        }

        ctx.globalAlpha = 1;
        ctx.fillStyle = NODE_COLOR;
        for (const node of nodes) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default AnimatedBackground;
