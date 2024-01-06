import './rightBar.scss'
import edina from '../../assets/IMG_0619.JPG'
import zejneb from '../../assets/IMG_1772.jpg'

const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={edina} alt="" />
                            <span>Edina Dinar</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={zejneb} alt="" />
                            <span>Zejneb Dinar</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={edina}
                                alt=""
                            />
                            <p>
                                <span>Edina Dinar</span>
                                changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={edina}
                                alt=""
                            />
                            <p>
                                <span>Edina Dinar</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={zejneb}
                                alt=""
                            />
                            <p>
                                <span>Zejneb Dinar</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={zejneb}
                                alt=""
                            />
                            <p>
                                <span>Zejneb Dinar</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={edina}
                                alt=""
                            />
                            <div className="online" />
                            <span>Edina Dinar</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={zejneb}
                                alt=""
                            />
                            <div className="online" />
                            <span>Zejneb Dinar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar