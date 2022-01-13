function Topbar() {
    const topbarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',
        backgroundColor: '#282c34',
        color: '#61dafb',
      };

      const linkStyle = {
          paddingLeft: '15px',
          color: 'white',
          textDecoration: 'none',
      }
  return (
    <div style={topbarStyle}>
        <h3>Note Block Calendar</h3>
        <div>
            <a href="#" target="_blank" rel="sign in" style={linkStyle}>sign in</a>
            <a href="#" target="_blank" rel="register" style={linkStyle}>register</a>
        </div>     
    </div>
  );
}

export default Topbar;
