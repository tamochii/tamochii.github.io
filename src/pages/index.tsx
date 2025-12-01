//取消注释 下面的代码以启用重定向到文档首页
/*import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
    return <Redirect to="/docs/foreword" />;
}*/

import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// 粒子配置
const PARTICLE_COUNT = 150; // 减少数量，保持清爽

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    size: number;
    color: string;
    // 律动参数
    speed: number;
    phase: number;
    amplitude: number;
}

export default function MyReactPage() {
    const { siteConfig } = useDocusaurusContext();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // 初始化粒子 - 全屏随机分布
        const initParticles = () => {
            particles = [];

            // 青色主题配色方案
            const hexColors = [
                '#06B6D4', // Cyan 500
                '#22D3EE', // Cyan 400
                '#67E8F9', // Cyan 300
                '#A5F3FC', // Cyan 200
                '#0891B2', // Cyan 600
                '#14B8A6', // Teal 500 (点缀)
            ];

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;

                particles.push({
                    x: x,
                    y: y,
                    originX: x,
                    originY: y,
                    size: Math.random() * 4 + 1, // 1px - 5px 大小不一
                    color: hexColors[Math.floor(Math.random() * hexColors.length)],
                    speed: Math.random() * 0.5 + 0.2, // 律动速度
                    phase: Math.random() * Math.PI * 2, // 初始相位
                    amplitude: Math.random() * 20 + 10, // 浮动范围
                });
            }
        };

        const handleResize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initParticles();
        };

        // 动画循环
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const time = Date.now() * 0.001;

            particles.forEach(p => {
                // 自主律动：使用正弦波模拟漂浮呼吸感
                // X轴和Y轴使用不同的频率，制造无规则感
                const offsetX = Math.sin(time * p.speed + p.phase) * p.amplitude;
                const offsetY = Math.cos(time * p.speed * 0.8 + p.phase) * p.amplitude;

                p.x = p.originX + offsetX;
                p.y = p.originY + offsetY;

                // 绘制
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.6; // 增加一点透明度，更有质感
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);

        handleResize(); // 初始化
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <Layout title="Home">
            <style>{`
                .footer { display: none; }
                .hero-container {
                    position: relative;
                    height: calc(100vh - var(--ifm-navbar-height));
                    width: 100%;
                    overflow: hidden;
                    background: var(--ifm-background-color);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding-bottom: 15vh; /* 将内容向上推，让按钮视觉居中 */
                }
                .hero-content {
                    z-index: 10;
                    text-align: center;
                }
                .hero-title {
                    font-size: 4rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    background: linear-gradient(120deg, #06B6D4, #14B8A6); /* 青色渐变 */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                canvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none; /* 确保 Canvas 不阻挡点击 */
                }
            `}</style>

            <div ref={containerRef} className="hero-container">
                <canvas ref={canvasRef} />

                <div className="hero-content">
                    <h1 className="hero-title">计算机知识库</h1>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/foreword"
                        style={{
                            padding: '0.8rem 3rem', // 减少垂直内边距，让字看起来更大
                            fontSize: '2rem',       // 增大字体
                            fontWeight: 'bold',     // 加粗
                            borderRadius: '999px',  // 极致圆润
                            boxShadow: '0 10px 20px rgba(6, 182, 212, 0.3)', // 加深一点阴影
                            backgroundColor: '#06B6D4', // 按钮颜色
                            borderColor: '#06B6D4'
                        }}>
                        点我开始😙
                    </Link>
                </div>
            </div>
        </Layout>
    );
}