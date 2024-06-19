import dataImg from '@/utils/helpers'

import './styles.scss'

export const BoostWorkforceProductivity = () => {
    return (
        <section className="boost-workforce  row flex-column">
            <div className='boost-workforce-header    '>
                <h1 className="text-bg-100 col-9  col-lg-4 col-md-7 mx-auto text-center">Supercharge your Workforce Productivity</h1>
            </div>
            <div className="boost-workforce-content mx-auto row row-cols-1 row-cols-md-4 gx-0 gap-2 justify-content-center">

                <div className="card-section bg-bg-300   ">
                    <img src={dataImg.star} alt="displaying star" />
                    <p className='mt-5 text-bg-500 col-9'>Manage the performance of your workforce in terms of their efficiency and productivity.</p>
                </div>
                <div className="card-section bg-bg-300 ">
                    <img src={dataImg.badge} alt="displaying badge" />
                    <p className='mt-5 text-bg-500 col-9'>Monitor & measure staff performance with reward and performance points for work.</p>
                </div>
                <div className="card-section bg-bg-300 ">
                    <img src={dataImg.square} alt="displaying square cubes" />
                    <p className='mt-5 text-bg-500 col-9'>Create a dashboard for employee performance and make it accessible to department heads, the HR department, and senior management.</p>
                </div>

            </div>
        </section>
    )
}