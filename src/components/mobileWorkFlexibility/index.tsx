import './styles.scss'
import mobileWork from '@/assets/images/desktop.svg';

export const MobileWorkFlexibility = () => {
    return (
        <section className="mobile-work  p-8">
            <div className="mobile-work-content row row-col-1 d-flex align-items-center mx-auto py-8">
                <div className="mobile-work-content-text col-md-4 offset-0 offset-md-2 mb-5">
                    <h1 className='text-bg-100 mb-5 '>
                        Work on the go at your convenience
                    </h1>
                    <p className='text-bg-500 '>You can be productive without being physically present in the office. As long as you have an internet-capable smartphone, tablet, or laptop, you can work from anywhere and at any time.</p>
                </div>
                <div className='mobile-work-img col-12 col-md-3 offset-0  offset-md-1 my-5'>
                    <img src={mobileWork} alt="showing the user profile" className='d-none d-sm-none d-md-block d-lg-block' />
                </div>
            </div>
        </section>
    )
}