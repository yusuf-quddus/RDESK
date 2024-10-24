import '../css/style.css'
import '../css/bootstrap.min.css'

import { useNavigate } from 'react-router-dom';

const Home = ({scrollToSection}) => {
    const navigate = useNavigate()

    return (
        <section id="home" className="home">
            <div className="text-wrapper">  
                <div className="container scroll">
                    <div className="big">Help Desk Solutions </div>          
                    <div className="medium">Making Technology Accessible</div>
                    <a onClick={() => navigate('/contact#get-quote')} 
                        className="middle btn btn-white hover-btn-blue">GET A FREE QUOTE</a>
                </div>       
            </div>
            <img src="../public/images/slider/1.jpg" alt=""/>
        </section>
    )
}

export default Home