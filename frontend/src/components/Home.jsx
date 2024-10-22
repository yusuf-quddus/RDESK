import '../css/style.css'
import '../css/bootstrap.min.css'

const Home = ({scrollToSection}) => {
    return (
        <section id="home" className="home">
            <div className="text-wrapper">  
                <div className="container scroll">
                    <div className="big">Help Desk Solutions </div>          
                    <div className="medium">Making Technology Accessible</div>
                    <a onClick={() => scrollToSection("contact")} className="middle btn btn-white hover-btn-blue">Get a Free Quote</a>
                </div>       
            </div>
            <img src="../public/images/slider/1.jpg" alt=""/>
        </section>
    )
}

export default Home