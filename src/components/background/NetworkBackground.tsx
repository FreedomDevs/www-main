'use client';

import { useEffect, useRef } from 'react';

import styles from './NetworkBackground.module.scss';

interface Node {
  x: number;
  y: number;

  baseX: number;
  baseY: number;

  vx: number;
  vy: number;

  radius: number;
  phase: number;
}

interface Particle {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

interface Mouse {
  x: number;
  y: number;
  active: boolean;
}

const COLORS = {
  line: '214, 220, 229',
  primary: '255, 51, 102',
  node: '214, 220, 229',
};

const MAX_DISTANCE = 190;
const MOUSE_DISTANCE = 260;

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isMobile = window.innerWidth <= 700;

    const mouse: Mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    let nodes: Node[] = [];
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;

      const nodeCount = isMobile
        ? Math.max(16, Math.floor(area / 30000))
        : Math.max(28, Math.floor(area / 18000));

      nodes = Array.from({ length: nodeCount }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,

          baseX: x,
          baseY: y,

          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,

          radius: Math.random() * 1.2 + 0.8,
          phase: Math.random() * Math.PI * 2,
        };
      });

      particles = [];
    };

    const getConnections = () => {
      const connections: Array<{
        from: number;
        to: number;
        distance: number;
      }> = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        let closest: Array<{
          index: number;
          distance: number;
        }> = [];

        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;

          const target = nodes[j];

          const dx = target.x - node.x;
          const dy = target.y - node.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance <= MAX_DISTANCE) {
            closest.push({
              index: j,
              distance,
            });
          }
        }

        closest = closest.sort((a, b) => a.distance - b.distance).slice(0, 3);

        for (const connection of closest) {
          if (i < connection.index) {
            connections.push({
              from: i,
              to: connection.index,
              distance: connection.distance,
            });
          }
        }
      }

      return connections;
    };

    const updateNodes = (time: number) => {
      for (const node of nodes) {
        if (reducedMotion) {
          node.x = node.baseX;
          node.y = node.baseY;
          continue;
        }

        node.baseX += node.vx;
        node.baseY += node.vy;

        if (node.baseX < -40 || node.baseX > width + 40) {
          node.vx *= -1;
        }

        if (node.baseY < -40 || node.baseY > height + 40) {
          node.vy *= -1;
        }

        node.x = node.baseX + Math.sin(time * 0.0004 + node.phase) * 4;
        node.y = node.baseY + Math.cos(time * 0.00035 + node.phase) * 4;

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_DISTANCE && distance > 0) {
            const force = (1 - distance / MOUSE_DISTANCE) * 0.018;

            node.x += dx * force;
            node.y += dy * force;
          }
        }
      }
    };

    const drawGlow = () => {
      const gradient = context.createRadialGradient(
        width * 0.72,
        height * 0.18,
        0,
        width * 0.72,
        height * 0.18,
        Math.min(width, height) * 0.65
      );

      gradient.addColorStop(0, 'rgba(255, 51, 102, 0.055)');
      gradient.addColorStop(0.45, 'rgba(255, 51, 102, 0.018)');
      gradient.addColorStop(1, 'rgba(255, 51, 102, 0)');

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const drawConnections = (
      connections: Array<{
        from: number;
        to: number;
        distance: number;
      }>
    ) => {
      for (const connection of connections) {
        const from = nodes[connection.from];
        const to = nodes[connection.to];

        let alpha = (1 - connection.distance / MAX_DISTANCE) * 0.14;

        if (mouse.active) {
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;

          const dx = mouse.x - midX;
          const dy = mouse.y - midY;

          const mouseDistance = Math.sqrt(dx * dx + dy * dy);

          if (mouseDistance < MOUSE_DISTANCE) {
            alpha += (1 - mouseDistance / MOUSE_DISTANCE) * 0.16;
          }
        }

        const gradient = context.createLinearGradient(
          from.x,
          from.y,
          to.x,
          to.y
        );

        gradient.addColorStop(0, `rgba(${COLORS.line}, ${alpha * 0.4})`);

        gradient.addColorStop(0.5, `rgba(${COLORS.primary}, ${alpha})`);

        gradient.addColorStop(1, `rgba(${COLORS.line}, ${alpha * 0.4})`);

        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);

        context.strokeStyle = gradient;
        context.lineWidth = 0.7;

        context.stroke();
      }
    };

    const drawNodes = () => {
      for (const node of nodes) {
        let alpha = 0.3;

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MOUSE_DISTANCE) {
            alpha += (1 - distance / MOUSE_DISTANCE) * 0.5;
          }
        }

        context.beginPath();

        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        context.fillStyle = `rgba(${COLORS.node}, ${alpha})`;

        context.fill();
      }
    };

    const spawnParticle = (
      connections: Array<{
        from: number;
        to: number;
        distance: number;
      }>
    ) => {
      if (
        reducedMotion ||
        particles.length >= 5 ||
        Math.random() > 0.012 ||
        connections.length === 0
      ) {
        return;
      }

      const connection =
        connections[Math.floor(Math.random() * connections.length)];

      particles.push({
        from: connection.from,
        to: connection.to,
        progress: 0,
        speed: 0.003 + Math.random() * 0.003,
      });
    };

    const updateParticles = (
      connections: Array<{
        from: number;
        to: number;
        distance: number;
      }>
    ) => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.progress += particle.speed;

        if (particle.progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        const from = nodes[particle.from];
        const to = nodes[particle.to];

        if (!from || !to) continue;

        const x = from.x + (to.x - from.x) * particle.progress;

        const y = from.y + (to.y - from.y) * particle.progress;

        context.beginPath();

        context.arc(x, y, 1.6, 0, Math.PI * 2);

        context.fillStyle = `rgba(${COLORS.primary}, 0.8)`;

        context.shadowBlur = 10;
        context.shadowColor = `rgba(${COLORS.primary}, 0.8)`;

        context.fill();

        context.shadowBlur = 0;
      }

      spawnParticle(connections);
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      drawGlow();

      updateNodes(time);

      const connections = getConnections();

      drawConnections(connections);
      drawNodes();
      updateParticles(connections);

      animationFrame = requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={styles.background} aria-hidden="true" />
  );
}
