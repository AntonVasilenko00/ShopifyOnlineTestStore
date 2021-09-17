import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.scss'
interface LayoutProps {
  children: React.ReactChildren | React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <div className={styles.MainLayout}>
        <Header/>
        {children}
        <Footer/>
      </div>

  );
};

export default Layout;
