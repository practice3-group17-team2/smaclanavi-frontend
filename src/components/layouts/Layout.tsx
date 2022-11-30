import { FC, ReactNode } from 'react';

import * as styles from './Layout.css';
import { Nav } from './Nav/Nav';
import { Footer } from './Footer/Footer';
import { Terminal } from '../common/terminal/Terminal';

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ children, title }) => (
  <div className={styles.main}>
    <Terminal barTitle={title} className={styles.content}>
      {children}
    </Terminal>
    <Nav className={styles.nav} />
    <Footer />
  </div>
);
