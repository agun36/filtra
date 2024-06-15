// import '@/assets/styles/_variables.scss'
// import '@/components/contacts/styles.scss'
import { useState } from 'react';
import './styles.scss'
import { ContactModal } from '../hero/contact-modal';
export const Contacts = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <section className="contacts bg-bg-100 d-flex flex-column justify-content-center align-items-center modal-dialog modal-dialog-centered container-fluid">
            <div className="modal-content d-flex align-items-center flex-column">
                <h1 className="text-white col mb-5 text-center fs-1 ">Ready to simplify your workflow? Get started with Filetra today.</h1>
                <button type='button' className="btn bg-white text-bg-100 px-6 py-3 opacity  " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>Get Started</button>
            </div>
            {modalShow && <ContactModal show={modalShow} onHide={() => setModalShow(false)} labels={''} placefield={''} inputType={'input'} name={''} />}
        </section >
    )
}