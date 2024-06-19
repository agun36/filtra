import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { sections } from '@/utils/data';
import { Contacts } from '../contacts';



export const Customer = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [showImage, setShowImage] = useState(true);

    const NextShow = (index: number) => {
        setActiveIndex(index);
        setShowImage(true);
    }

    return (
        <section className='customers container container-fluid '>
            <div className='ml-4 mb-8'>
                <h1 className='text-bg-100 col-md-4 col-7 mb-4'>
                    Whatever your need is, we’ve got it covered
                </h1>
                <p className='text-bg-500 col-md-5'>Filetra provides flexible deployment options, either on-premises or in public clouds, and is delivered as a comprehensive suite that equips businesses with comprehensive capabilities.</p>
            </div>
            <div className='d-flex flex-wrap  flex-lg-nowrap   justify-content-between gap-8 align-items-center show-customer'>
                <ul className=''>
                    {sections.map((section, index) => (
                        <li key={index} className={index === activeIndex ? 'active' : ''} onClick={() => NextShow(index)}>
                            <a >
                                <h1 className={` ${activeIndex === index ? "text-bg-100" : "text-bg-600"}`}>{section.title}</h1>
                                <p className={`mt-5 ${activeIndex === index ? "text-bg-100" : "text-bg-700"} `}>{section.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className=''>
                    {showImage && activeIndex !== null && <img src={sections[activeIndex].image} alt="description" className='img-fluid' />}
                </div>
            </div>
            <div className='customers-contacts mt-8'>
                <Contacts />
            </div>
        </section>
    );
}