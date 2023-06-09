import React from 'react';
import { useTranslation } from 'react-i18next';

function Documents() {
    const { t } = useTranslation();

    return (
        <div className="documents">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>{t('documents.title')}</h3>
                            </div>
                            <div className="card-body">
                                <p>{t('documents.description')}</p>
                                <ul>
                                    <li>{t('documents.id')}</li>
                                    <li>{t('documents.proofOfAddress')}</li>
                                    <li>{t('documents.bankStatement')}</li>
                                    <li>{t('documents.businessDocs')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documents;
