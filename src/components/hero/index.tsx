import { Navigation } from "@/components/navigation"

import dataImg from "@/utils/helpers"

import './styles.scss'
import { ContactModal } from "./contact-modal"
import { useState } from "react"
export const Header = () => {
    const [modalShow, setModalShow] = useState(false);


    return (
        <header className="header bg-bg-100 min-vh-100">
            <div className="container container-fluid ">

                <div className="border-bottom py-4">
                    <Navigation />
                </div>

                <div className="header-content">
                    <div className="header-content-img">
                        <img src={dataImg.herobg2} alt="displaying person typing" className="img-fluid" />
                    </div>
                    <div className="header-content-para bg-bg-200  ">
                        <div className="header-content-para-text">
                            <div className="mb-5 row">
                                <h1 className="text-bg-100 ">Streamline Your Workflow with our advanced Electronic Document Management Solution.</h1>
                                <p className="mt-5 text-bg-500 ">Say goodbye to outdated and ineffective document management systems. Filetra electronic document management system provides a comprehensive solution for streamlining your workflow and increasing your productivity. </p>
                            </div>
                            <button type="button" className="btn text-white btn-bg-100 px-3 py-1 opacity"
                                onClick={() => setModalShow(true)} >
                                Contact Sales
                            </button>
                        </div>
                    </div>



                </div>
            </div>
            {modalShow && <ContactModal labels={''} placefield={''} inputType={'input'} show={modalShow} onHide={() => setModalShow(false)} name={""} />}

        </header >
    )
}