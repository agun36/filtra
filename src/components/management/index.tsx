import './styles.scss'

import dataImg from '@/utils/helpers'

export const Management = () => {
    return (
        <section className="management bg-bg-100 row  ">
            <div className="management-content  mx-auto">
                <div className="management-content-text row">
                    <h1 className='text-bg-200 mb-5  col-md-5 col-11 mx-auto text-center'>
                        We reimagined the conventional document management process and workflow
                    </h1>
                    <p className='text-bg-700 para-fs-md para-fs-sm col-md-9 mx-auto'>Our Enterprise Document Management Solution was developed specifically for government and corporate organizations with the intention of enhancing your efficiency and productivity. Filetra streamlines the document management process. Your team will have the ability to create, integrate external content sources, manage, store, archive, and retrieve digital content.</p>
                </div>
            </div>
            <img src={dataImg.dashboard} alt="showing the user profile" className='mx-auto' />
        </section>
    )
}