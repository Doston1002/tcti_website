import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useParams } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';

function AnnouncementsOne() {
    const { lang, setLang } = useContext(LanguageContext);
    const { id } = useParams()
    const [found, setFound] = useState([])
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`http://tcti.uz/api/announcements/one/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFound(data)
            });
    }, [])
    useEffect(() => {
        fetch('http://tcti.uz/api/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    console.log(news);
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
                                        <h3 className="sn-title mt-3">{item[`title_${lang}`]}</h3>
                                        <p className="mainBody mt-5" dangerouslySetInnerHTML={{ __html: item[`body_${lang}`] }}></p>
                                    </div>
                                </>
                            ))}

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar-widget text-center">
                                <h3 className="sw-title">{context[lang].other.first}</h3>
                                <div className="news-list">
                                    {news.map(news_item => (
                                        <div className="nl-item">
                                            <div className="nl-img">
                                                <a href={`/announcements/${news_item.id}`}>
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

export default AnnouncementsOne;