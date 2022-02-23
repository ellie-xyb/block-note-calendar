import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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

// const signOutBtnStyle = {
//   color: 'white',
//   border: 'none',
//   backgroundColor: '#282C34',
//   fontSize: '16px',
//   cursor: 'pointer',
// }

function Topbar(props) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    props.removeToken(['mytoken']);
    props.setSignIn(false);
    navigate('/signin/');
  };

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
              // <button style={signOutBtnStyle}>Sign out</button>
              <Button variant="text" sx={{color: 'white'}} onClick={handleSignOut}>Sign out</Button>
            }
          </div>
        </div>
    </div>  
    
  );
}

export default Topbar;