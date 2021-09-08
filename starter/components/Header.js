import React from 'react'

import { GlobalContext } from './GlobalContext';

const Header = ({  }) => {
    return (
        <GlobalContext.Consumer>
            {({ defaultSeo, siteName }) => <>
                <header>
                    
                </header>
            </>}
        </GlobalContext.Consumer>
    );
};

export default Header;
