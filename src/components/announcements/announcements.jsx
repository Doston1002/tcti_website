import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import ReactPaginate from 'react-paginate';

function Announcements() {
    const { lang, setLang } = useContext(LanguageContext);
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data)
            });
    }, [])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(announcements.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(announcements.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, announcements]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % announcements.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="body_Naujienos_wrapper2">
                <div className="page_body_Naujienos2">
                    <h2 className="publics_1 m-auto">{context[lang].publics.first}</h2>
                </div>
                <div className="page_body_Naujienos_the_loop_wrapper2">
                    <div className="data_elonlar_wrapper ">
                        {currentItems.map(item => (
                            <a href={`/announcements/${item.id}`} className="news_item">
                                <div className="card ">
                                    <img className="card-img-top" src={item.img} alt="Card image cap" width="150px"
                                        height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title elon_title">{item[`title_${lang}`]}</h5>
                                        <h1 className="card-text the_loop_p2 elon_body" >
                                            {item.date}
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div id="pagination-container" className="light-theme simple-pagination"></div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName='page-num'
                        previousLinkClassName='page-num'
                        nextLinkClassName='page-num'
                        activeLinkClassName='active'
                    />
                </div>
            </div>
        </>
    );
}

export default Announcements;
