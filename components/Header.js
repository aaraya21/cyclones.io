const headerStyle = {
  backgroundColor: 'blue',
  color: 'white',
  width: '100%',
  height: '50px',
};

const Header = () => (
  <div className="Header" style={headerStyle}>
    HEADER
    <style jsx>
      {`
        background-color: blue;
        color: white;
        width: 100%;
        height: 50px;
      `}
    </style>
  </div>
);

export default Header;
