export const NotFound = () => {
    // Custom 404 page with improved styling and helpful message
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                fontSize: '4rem',
                margin: '0',
                color: '#333'
            }}>404</h1>
            <h2 style={{
                fontSize: '1.5rem',
                color: '#666',
                marginBottom: '1rem'
            }}>Page Not Found</h2>
            <p style={{
                color: '#888',
                maxWidth: '500px',
                lineHeight: '1.6'
            }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <a href="/"
               style={{
                   marginTop: '2rem',
                   padding: '10px 20px',
                   backgroundColor: '#007bff',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '5px',
                   transition: 'background-color 0.3s'
               }}
               onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
               onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
                Return Home
            </a>
        </div>
    );
};