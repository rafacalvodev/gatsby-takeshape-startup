import React from 'react';

import { useSiteMetadata } from 'hooks';

import Container from 'components/Container';

const Footer = () => {
  const { companyName, companyUrl } = useSiteMetadata();
  return (
    <footer className='page-footer'>
      <Container>
        <small>
          &copy; {new Date().getFullYear()}{' '}
          <a href={companyUrl} rel='nofollow'>
            {companyName}
          </a>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
