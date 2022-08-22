import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import MagistraturaComponent from '../../../components/qabul/magistratura/magistraturaComponent';

function Magistratura() {
    return (
        <div className='wrapped'>
            <Header />
            <MagistraturaComponent />
            <Footer />
            
        </div>
    );
}

export default Magistratura;
