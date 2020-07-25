import React from 'react';
import './style.css';

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
}

function Footer() {
        return (
            <footer className='page-footer' style={footerStyle}>
                <div className='container'>
                    <div className='row'>
                        <div className="link-git">© 2020 Brain Pickers
                        <a href="https://github.com/MagusConjurer/brain-picker" target="_blank">
                            <i className="fab fa-github fa-lg"></i></a></div>
                    </div>
                    <div className='row'>
                        <span>Created by Brain-Pickers: Brandon Bringhurst, Cameron Davis, Christina Lupanow, Miguel Celis, Shianne Taylor</span>
                    </div>
                </div>
            </footer>
        )
}

export default Footer;




