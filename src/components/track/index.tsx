import './styles.scss'
import ball1 from '@/assets/images/ball1.svg'
import ball2 from '@/assets/images/ball2.svg'
export const Track = () => {
    return (
        <main className='contents container-md container-fluid row mx-auto  justify-content-center align-items-center '>
            <section className="track-contents   ">
                <div className='text-center col-8 mx-auto'>
                    <h1 className="text-bg-100 my-5 titles-fs-md titles-fs-sm">Keeping tabs on documents doesn’t have to be so tedious.</h1>
                    <p className="text-bg-700 para-fs-md para-fs-sm">Managing paper-based workflow can be tedious and expensive. It makes it difficult to create, process, or archive documents, which can complicate the document management process as a whole.</p>
                </div>
            </section>
            <section className='productive row row-col-2 flex-column justify-content-center flex-md-row align-items-center  bg-bg-300  '>
                <div className="card-wrapper col-md-6 col d-flex flex-column gap-3  ">
                    <div className="card-section d-flex gap-2 align-items-center justify-content-center bg-white-000">
                        <img src={ball1} alt="" />
                        <p className='para-fs-md para-fs-sm text-bg-500'>Over 21% of daily productivity loss is attributed to poor document management</p>
                    </div>
                    <div className="card-section d-flex gap-2 bg-white-000 align-items-center justify-content-center">
                        <img src={ball2} alt="" />
                        <p className='para-fs-md para-fs-sm text-bg-500'>Professionals spend 80% of their time on average searching for information.</p>
                    </div>
                </div>
                <div className='productive-text col-md-6 mt-5 mt-md-0 col d-flex flex-column  align-items-cente ustify-content-center'>
                    <h2 className='text-bg-100 mb-4 titles-fs-md titles-fs-sm  col col-md-8   text-left align-self-left'>
                        Be more proactive and productive with work
                        - Get more done quickly
                    </h2>
                    <p className='text-bg-500 col col-md-8 para-fs-md para-fs-sm text-bg-500 '>Email is beneficial, but how do you consolidate all documents for the use of all staff members?
                        Not having access to the documents you need to work on when you need them can cause you to feel overwhelmed and stressed, wasting time that could be spent on more important tasks and increasing overall productivity.
                        Bring your company ahead of the curve.</p>
                </div>
            </section>
            <section className='pitfall text-center col-5 '>
                <h3 className='text-bg-100 titles-fs-md titles-fs-sm'>
                    We fixed the pitfalls
                </h3>
                <p className='text-bg-500 para-fs-md para-fs-sm'>We identified the problems and we figured <span >“There has to be a better and faster way to get work done in record time and be more productive.”</span></p>
            </section>
        </main>
    )
}