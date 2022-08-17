import Header from '../../components/header/header'
import AnnouncementsOne from '../../components/announcements_one/announcement'
import Footer from '../../components/footer/footer'


function NewsPage() {
    return (
        <div className='wrapped'>
            <Header />
            <AnnouncementsOne />
            <Footer />
        </div>
    );
}

export default NewsPage;
