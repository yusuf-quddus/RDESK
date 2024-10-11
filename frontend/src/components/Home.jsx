import '../css/style.css'
import '../css/bootstrap.min.css'

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="text-wrapper">  
                <div className="container scroll">
                    <div className="big">Help Desk Solutions </div>          
                    <div className="small">Making Technology Accessible</div>
                    <a href="#contact" className="middle btn btn-white hover-btn-blue">Request a Service</a>
                </div>       
            </div>
            <img src="../public/images/slider/1.jpg" alt=""/>
        </section>
    )
}

export default Home