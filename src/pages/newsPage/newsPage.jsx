import Header from '../../components/header/header'
import NewsOne from '../../components/news_one/news_one'
import Footer from '../../components/footer/footer'


function NewsPage() {
    return (
        <div className='wrapped'>
            <Header />
            <NewsOne />
            <Footer />
        </div>
    );
}

export default NewsPage;
