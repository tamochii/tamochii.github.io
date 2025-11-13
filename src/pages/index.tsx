//取消注释 下面的代码以启用重定向到文档首页
/*import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
    return <Redirect to="/docs/foreword" />;
}*/

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

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

.start-button {
    padding: 1rem 2.5rem;
    background-color: var(--ifm-color-primary);
    color: #fff;
    border-radius: 8px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 10;
    transition: transform 0.2s ease-in-out, background-color 0.2s;
}

.start-button:hover {
    transform: scale(1.05);
    background-color: var(--ifm-color-primary-dark);
    color: #fff;
    text-decoration: none;
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
                paddingBottom: '10vh', // 将内容向上推
            }}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/foreword"
                    style={{
                        padding: '1.2rem 2rem', // 增大内边距
                        fontSize: '2rem',   // 增大字体
                        borderRadius: '30px', // 使边角更圆润
                    }}>
                    点我开始 😙
                </Link>
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