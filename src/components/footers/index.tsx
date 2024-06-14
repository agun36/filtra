import { useState } from 'react';
import './styles.scss';
import buddyIcon from '@/assets/images/buddy_icon.svg';
import clock from '@/assets/images/clock.svg';
import chat from '@/assets/images/Chat Popup.svg';
export const Footers = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <footer className="footer bg-bg-300 text-center">
            <small className="mt-auto">
                FileTra &copy; 2024, All rights reserved.
            </small>
            <img src={chat} alt="showing chat" onClick={() => setModalVisible(true)} className='btn-fixed' />
            {isModalVisible && (
                <div className="modal  fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                    <div className="modal-dialog ">
                        <div className="modal-content border-0 ">
                            <div className="modal-header bg-bg-000 rounded-top shadow py-8">
                                <div className="text-start px-3">
                                    <h2 className="modal-title text-white" id="staticBackdropLabel">Hi There 👋</h2>
                                    <p className='text-white'>Hey There! Welcome to Budddy. We Reply to Every Singel Message So Fell to ASk Us Anything</p>
                                </div>
                                <button type="button" className="btn-close btn-close-white bg-bg-200" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalVisible(false)}></button>
                            </div>
                            <div className="modal-body text-start bg-bg-550 px-4">
                                <h3 className="text-white">Start Coversation </h3>
                                <div className="d-grid gap-2">
                                    <div className="d-flex gap-2">
                                        <img src={buddyIcon} alt="showing buddy" />
                                        <menu className="list-unstyled">
                                            <li className='text-white'>Budddy Usual Reply Time</li>
                                            <li className=' opacity-50 '><img src={clock} alt="showing clock" /><span className='text-white ms-2'>{new Date().toLocaleTimeString()}</span></li>
                                        </menu>
                                    </div>
                                    <button type="button" className="btn bg-white text-bg-100 px-6 py-3 ">Send Message to Budddy</button>

                                </div>
                            </div>
                            <div className="modal-footer bg-white rounded-bottom shadow py-8">
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};