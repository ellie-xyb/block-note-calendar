import * as React from 'react';
import { Link } from 'react-router-dom';

function Topbar(props) {
    const topbarStyle = {
        backgroundColor: '#282c34',
        color: '#61dafb',
        position: 'sticky',
        zIndex: 600,
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      };

      const insideBoxStyle = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
      }

      const linkStyle = {
        paddingLeft: '15px',
        color: 'white',
        textDecoration: 'none',
      }
  return (
    <div style={topbarStyle}>
        <div style={insideBoxStyle}>
          <h3>Note Block Calendar</h3> 
          <div>
            { props.isSignIn && 
              <>
                <Link to='/signin' style={linkStyle}>Sign in</Link>
                <Link to='/signup' style={linkStyle}>Sign up</Link>  
              </>              
            }
            { !props.isSignIn && 
              <Link to='/signout' style={linkStyle}>Sign out</Link>
            }
          </div>
        </div>
    </div>  
    
  );
}

export default Topbar;