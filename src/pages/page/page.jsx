import Header from '../../components/header/header'
import PageOpened from '../../components/page/page'
import Footer from '../../components/footer/footer'


function Page() {
    return (
        <div className='wrapped'>
            <Header />
            <PageOpened />
            <Footer />
        </div>
    );
}

export default Page;
