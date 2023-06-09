import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';

function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="row">
        <div className="col-lg-9 col-md-12">
          <h1>{t('home.welcome')}</h1>
          <p>{t('home.description')}</p>
          <Link className="btn btn-primary" to="/registration">{t('home.signup')}</Link>
        </div>
        <div className="col-lg-3 col-md-12">
          {/* <Image src="./assets/img/logo_home.svg" alt="SPIYANAA Home" rounded className="shadow" /> */}
          <House />
        </div>
      </div>
    </Container>
  );
}

export default Home;
