import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <a href="https://github.com/PrototypeInteractive/gatsby-react-boilerplate" target="_blank" rel="noopener noreferrer">
              <Icon icon={Github} width={24} height={24} fill={'#fff'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
