import '../css/style.css';
import '../css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';

const CallAction = () => {
    const navigate = useNavigate()
    return (
        <section id="cta" className="parallax">
            <div className="overlay"></div>
                <div className="container">
                    <div className="row text-center">
                        <h2>Are you ready to request a Service?</h2>
                        <a onClick={() => navigate('/contact')} className="btn btn-blue">GET A FREE QUOTE</a>
                    </div>
                </div>
        </section>
    );
};

export default CallAction;
