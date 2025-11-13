import React from 'react';
import Layout from '@theme/Layout';

const particleCount = 100;

const keyframes = `
@keyframes float {
    0% {
        transform: translateY(0px) translateX(0px);
    }
    50% {
        transform: translateY(-30px) translateX(15px);
    }
    100% {
        transform: translateY(0px) translateX(0px);
    }
}
`;

export default function MyReactPage() {
    const particles = React.useMemo(() => Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 5 + 2}px`,
        animationDuration: `${Math.random() * 15 + 10}s`,
        animationDelay: `${Math.random() * -25}s`,
    })), []);

    return (
        <Layout title="tamochi desu">
            <style>{`
                .footer {
                    display: none;
                }
                ${keyframes}
            `}</style>
            <div style={{
                position: 'relative',
                height: 'calc(100vh - var(--ifm-navbar-height))',
                width: '100%',
                overflow: 'hidden',
                background: 'var(--ifm-background-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {particles.map(p => (
                    <div
                        key={p.id}
                        style={{
                            position: 'absolute',
                            background: 'var(--ifm-color-primary)',
                            borderRadius: '50%',
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                            animation: `float ${p.animationDuration} ease-in-out infinite`,
                            animationDelay: p.animationDelay,
                        }}
                    />
                ))}
            </div>
        </Layout>
    );
}