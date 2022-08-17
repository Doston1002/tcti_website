import Header from '../../components/header/header';
import SearchedPage from '../../components/searched/searched'
import Footer from '../../components/footer/footer';

function FilteredPage() {
  return (
      <div className='wrapped'>
        <Header />
        <SearchedPage />
        <Footer />
      </div>
        
  );
}

export default FilteredPage;
