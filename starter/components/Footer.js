import React, { useContext } from 'react';

import { GlobalContext } from './GlobalContext';

const Footer = ({  }) => {
    const { defaultSeo, siteName } = useContext(GlobalContext);
    return (
        <footer>
        </footer>
    );
};

export default Footer;
