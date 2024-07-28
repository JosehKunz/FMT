import './Header.css';
import Button from 'react-bootstrap/Button';


function Header() {
    return (
        <div className="header">
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75" alt="Zé Delivery Logo" />
            <Button variant="warning"         
            style={{ 
          color: '#000', 
          fontWeight: 'bold', 
          backgroundColor: '#ffc107', 
          borderRadius: '40px', 
          padding: '10px 20px', 
          border: 'none', 
          height: '48px',
        }}>
            
            ENTRAR</Button>

        </div>
    );
}

export default Header;
