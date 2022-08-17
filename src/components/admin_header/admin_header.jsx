import newsIcon from '../../images/newspaper-solid.png'
import pageIcon from '../../images/file-lines-solid.png'
import announcementIcon  from '../../images/scroll-solid.png'
import uploadIcon from '../../images/photo-film-solid.png'
import photoIcon from '../../images/image-solid.png'
import videoIcon from '../../images/film-solid.png'
import fileIcon from '../../images/file-solid.png'
import chartIcon from '../../images/chart-line-solid.png'
import './admin_header.css'

function AdminHeader() {
    return (
        <>
            <div id="wrapper">
                <div className="topbar">
                    <div className="topbar-left">
                        <a href="/" className="logo">
                            <span className="logo-light">
                                <h1>TKTI</h1>
                            </span>
                            <span className="logo-sm">
                                <i className="fa-solid fa-newspaper"></i>
                            </span>
                        </a>
                    </div>    
                </div>
                <div className="left side-menu">
                    <div className="slimscroll-menu" id="remove-scroll">
                        <div id="sidebar-menu">
                            <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Menu</li>
                                <li>
                                    <a href="/admin/yangilik" className="waves-effect">
                                        <i
                                        className="mdi  mdi-message-text-outline text-white bg-warning"><img src={newsIcon} alt="" width={18} /></i>
                                        <span> Yangilik </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/page" className="waves-effect">
                                        <i
                                        className="mdi  mdi-message-text-outline text-white bg-warning"><img src={pageIcon} alt="" width={15} /></i>
                                        <span> Sahifa </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/announcement" className="waves-effect">
                                        <i
                                        className="mdi  mdi-message-text-outline text-white bg-warning"><img src={announcementIcon} alt="" width={18} /></i>
                                        <span> Elon </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/upload" className="download_efect">
                                        <i 
                                        className="mdi  mdi-settings text-white bg-danger"><img src={uploadIcon} alt="" width={18} /></i>
                                        <span>Media fayl yuklash</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/photo" className="download_efect">
                                        <i
                                        className="mdi  mdi-settings text-white bg-danger"><img src={uploadIcon} alt="" width={18} /></i>
                                        <span>Media resurslar</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="/admin/videos" className="download_efect">
                                        <i
                                        className="mdi  mdi-settings text-white bg-danger"><img src={videoIcon} alt="" width={18} /></i>
                                        <span>Videolar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/files" className="download_efect">
                                        <i
                                        className="mdi  mdi-settings text-white bg-danger"><img src={fileIcon} alt="" width={15} /></i>
                                        <span>Fayllar</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a href="/admin/statistic/all" className="waves-effect">
                                        <i
                                        className="mdi mdi-trending-up bg-success text-white"><img src={chartIcon} alt="" width={18} /></i>
                                        <span> Statistika </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHeader;
