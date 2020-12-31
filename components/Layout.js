import Head from 'next/head';
import Header from './Header';
import NavBar from './NavBar';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <title>Cyclones</title>
    </Head>

    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <NavBar />
    <style jsx>{`
      .Layout {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      .Content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default Layout;
