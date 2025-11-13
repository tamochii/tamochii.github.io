import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ai',
    Svg: require('@site/static/img/icons8-robot.svg').default,
    description: (
      <>
        关
      </>
    ),
  },
  {
    title: 'Rasberry Pi',
    Svg: require('@site/static/img/icons8-raspberry-pi.svg').default,
    description: (
      <>
        树
      </>
    ),
  },
  {
    title: 'Linux',
    Svg: require('@site/static/img/icons8-linux.svg').default,
    description: (
      <>
        这里有
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
