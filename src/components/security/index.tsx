import dataImg from '@/utils/helpers';

import './styles.scss'

export const Security = () => {
    return (
        <section className="security row row-col-2  d-flex justify-content-center gap-5">
            <div className="security-header text-center mb-5  text-bg-100 col-8 col-md-3">
                <h1 className=''>Not to worry, your security is our top priority.</h1>
            </div>
            <div className="security-content row row-col-2  no-padding-right no-padding-left   justify-content-center gx-0 gap-5">
                <div className="card security-content-card  col-md-4 col-12" >
                    <div className='bg-bg-300 text-center'>
                        <img src={dataImg.folder} className="card-img-top img-card " alt="..." />
                    </div>
                    <div className="card-body px-5">
                        <h2 className="card-title text-bg-100 my-4 ">Document Confidentiality</h2>
                        <p className="card-text text-bg-500 ">Using two-factor document encryption, Filetra ensures the security and confidentiality of official electronic documents, ensuring that sensitive documents are only accessible to authorized users. Filetra also ensures audit trail and version control. </p>
                    </div>
                </div>
                <div className="card security-content-card col-md-4 col-12" >
                    <div className='bg-bg-300 text-center'>
                        <img src={dataImg.sign} className="card-img-top img-card" alt="..." />
                    </div>
                    <div className="card-body  px-5">
                        <h3 className="card-title text-bg-100 my-4 ">Encrypted Signatures</h3>
                        <p className="card-text text-bg-500 ">The signature module of Filetra is designed to provide your staff with secure and encrypted electronic document signing, ensuring the integrity of actions and documents.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}