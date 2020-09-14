import React from 'react';
import { FormattedMessage } from 'react-intl';
// data stubs
import theme from '../../data/theme';




function FooterContacts() {
    return (
        <div className="site-footer__widget footer-contacts">
            <h5 className="footer-contacts__title"><FormattedMessage id="topbar.contacts" defaultMessage="Contact Us" /></h5>

            <div className="footer-contacts__text">
            </div>

            <ul className="footer-contacts__contacts">
                <li>
                    <i className="footer-contacts__icon fas fa-globe-americas" />
                    {theme.contacts.address}
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-envelope" />
                    {theme.contacts.email}
                </li>
                <li>
                    <i className="footer-contacts__icon fas fa-mobile-alt" />
                    {`${theme.contacts.phone}, ${theme.contacts.phone}`}
                </li>
                <li>
                    
                </li>
            </ul>
        </div>
    );
}

export default FooterContacts;
