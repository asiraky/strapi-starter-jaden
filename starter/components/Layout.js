import Header from './Header';
import Footer from './Footer';

const Layout = ({ header, footer, children }) => (
    <div>
        <Header {...header} />
        {children}
        <Footer {...footer} />
    </div>
);

export default Layout;
