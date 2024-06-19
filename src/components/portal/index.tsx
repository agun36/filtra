import { cardData } from "@/utils/data"
import './styles.scss'


export const Portal = () => {
    return (
        <div className="portal bg-bg-300">
            <div className="portal-title text-center col-md-3 col-8 mx-auto ">
                <h1 className="text-bg-100">Oh yes, there’s more where that came from</h1>
            </div>

            <div className="portal-content row row-cols-1 row-cols-md-4 gap-2 justify-content-center">
                {cardData.map((card, index) => (
                    <div key={index} className="card text-center col">
                        <div className="text-center">
                            <img src={card.image} alt={card.alt} className="img-fluid" width={'100px'} height={'100px'} />
                        </div>
                        <p className='text-bg-800'>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}