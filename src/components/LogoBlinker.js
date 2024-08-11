import React from 'react';
import './LogoBlinker.css';

const LogoBlinker = () => {
    const logos = [
        'https://th.bing.com/th/id/R.a18e0b39d49f321c3d477af26ff38808?rik=QyxXNPNky9iqeA&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.TBvJQM0YORRyOAY6RwAQkwAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.1a5ef8096a24048b03a92d337630a89e?rik=PZz8TcD%2bWGXBhQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f12%2fEbay-Logo-PNG.png&ehk=UIgG%2fbPePvzfsQmJlPOZkgY%2fcGl8wQOb8dFMYnYvluQ%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a18e0b39d49f321c3d477af26ff38808?rik=QyxXNPNky9iqeA&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.TBvJQM0YORRyOAY6RwAQkwAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.1a5ef8096a24048b03a92d337630a89e?rik=PZz8TcD%2bWGXBhQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f12%2fEbay-Logo-PNG.png&ehk=UIgG%2fbPePvzfsQmJlPOZkgY%2fcGl8wQOb8dFMYnYvluQ%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a18e0b39d49f321c3d477af26ff38808?rik=QyxXNPNky9iqeA&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.TBvJQM0YORRyOAY6RwAQkwAAAA?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.1a5ef8096a24048b03a92d337630a89e?rik=PZz8TcD%2bWGXBhQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f12%2fEbay-Logo-PNG.png&ehk=UIgG%2fbPePvzfsQmJlPOZkgY%2fcGl8wQOb8dFMYnYvluQ%3d&risl=&pid=ImgRaw&r=0',
        
    ];

    return (
        <div className="logo-container">
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className={`logo logo-${index}`}
                />
            ))}
        </div>
    );
};

export default LogoBlinker;
