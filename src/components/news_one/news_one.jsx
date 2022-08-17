import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useParams } from 'react-router-dom'

function NewsOne() {
    const { lang, setLang } = useContext(LanguageContext);
    const { id } = useParams()
    const [found, setFound] = useState([])
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`http://tcti.uz/api/news/one/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFound(data)
            });
    }, [])
    useEffect(() => {
        fetch('http://tcti.uz/api/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    return (
        <>
            <div className="container-fluid mt-5 news_item_wrapper">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="sn-container">
                            {found.map(item => (
                                <>
                                    <div className="sn-img">
                                        <img src={`${item.img}`} max-width="700" width="100%" />
                                    </div>
                                    <div className="sn-content">
                                        <h1 className="sn-title mt-3">{item[`title_${lang}`]}</h1>
                                        <p className="mainBody mt-5" dangerouslySetInnerHTML={{ __html: item[`body_${lang}`] }}></p>
                                    </div>
                                </>
                            ))}

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar-widget text-center">
                                <h2 className="sw-title">{context[lang].other.first}</h2>
                                <div className="news-list">
                                    {news.map(news_item => (
                                        <div className="nl-item">
                                            <div className="nl-img">
                                                <a href={`/news/${news_item.id}`}>
                                                    <img src={`${news_item.img}`} max-width="400" width="100%" />
                                                    <p>{news_item[`title_${lang}`]}</p>
                                                </a>
                                            </div>
                                            <div className="nl-title">
                                                <a href="/page/get/<%= onePage.id %>" className="titleNameArticle"></a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsOne;