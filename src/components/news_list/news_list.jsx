import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import ReactPaginate from 'react-paginate';

function News() {
    const { lang, setLang } = useContext(LanguageContext);
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://tcti.uz/api/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(news.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(news.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, news]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % news.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="body_Naujienos_wrapper">
                <div className="page_body_Naujienos">
                    <h2 className="news_1">{context[lang].news.first}</h2>
                </div>
                <div className="page_body_Naujienos_the_loop_wrapper paddingNews list-wrapper">
                    {currentItems.map(news_item => (
                        <a href={`/news/${news_item.id}`}>
                            <div className="the_loop_img list-item">
                                <img src={`${news_item.img}`} className="newsImage" width="250px" height="250px" alt="" />
                                <h5 className="the_loop_text textOverflow news_title">{news_item[`title_${lang}`]}</h5>
                                <p className="the_loop_p news_date">{news_item.date}</p>
                            </div>
                        </a>
                    ))}
                    <div className="roditi_dougiau_button">

                    </div>
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
        </>
    );
}

export default News;
