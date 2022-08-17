import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/homePage'
import NewsPage from './pages/newsPage/newsPage'
import AnnouncementsPage from './pages/announcementsPage/announcement'
import Login from './pages/login/login'
import NewsAdmin from './pages/news_admin/news_admin'
import AddNews from './pages/add_news/add_news'
import EditNews from './pages/edit_news/edit_news'
import PagesAdmin from './pages/sahifa/sahifa'
import AddPage from './pages/add_page/add_page'
import EditPage from './pages/edit_page/edit_page'
import AdminAnnouncements from './pages/announcements_admin/announcements_admin'
import AddAnnouncements from './pages/add_announcements/add_announcements'
import AnnouncementsEdit from './pages/announcements_edit/announcements_edit'
import Upload from './pages/admin_upload/admin_upload'
import AdminPhoto from './pages/admin_photo/admin_photo'
import AdminVideo from './pages/admin_video/admin_video'
import AdminFile from './pages/admin_file/admin_file'
import StatisticsPage from './pages/statistics/statistics'
import FilteredPage from './pages/searched/searched'
import Page from './pages/page/page'
import PageStaticRectorat from './pages/rectorat/rectorat'
import RectorPage from './pages/rectorat/rector'
import RectorPageOquv from './pages/rectorat/oquvProrekt'
import RectorPageIlmiy from './pages/rectorat/IlmiyProrektor'
import RectorPageMoliya from './pages/rectorat/MoliyaProrektor'
import RectorPageManav from './pages/rectorat/prormanav'
import PageStaticOne from './pages/bol_markaz/page_1'
import PageStaticFaculty from './pages/faculty/faculties'
import PageStaticThree from './pages/page_3/page_3'
import PageStaticFour from './pages/page_4/page_4'
import PageStaticFive from './pages/page_5/page_5'
import PageStaticSix from './pages/page_6/page_6'
import PageStaticSeven from './pages/page_7/page_7'
import PageStaticEight from './pages/page_8/page_8'
import PageStaticNine from './pages/page_9/page_9'
import PageStaticTen from './pages/page_10/page_10'
import PageStaticEleven from './pages/page_11/page_11'
import PageStaticTwelve from './pages/page_12/page_12'
import PageStaticThirdteen from './pages/page_13/page_13'
import PageStaticFourteen from './pages/page_14/page_14'
import PageStaticFiveteen from './pages/page_15/page_15'
import PageStaticSixteen from './pages/oomf/page_16'
import PageStaticSeventeen from './pages/yobtf/page_17'
import PageStaticEighteen from './pages/page_18/page_18'
import PageStaticNineteen from './pages/page_19/page_19'
import PageStaticTwenty from './pages/page_20/page_20'

import PageStaticTwentyTwo from './pages/page_22/page_22'
import PageStaticTwentyThree from './pages/page_23/page_23'
import PageStaticTwentyFour from './pages/page_24/page_24'
import PageStaticTwentyFive from './pages/page_25/page_25'
import PageStaticTwentySix from './pages/page_26/page_26'
import PageStaticTwentySeven from './pages/page_27/page_27'
import PageStaticTwentyEight from './pages/page_28/page_28'
import PageStaticTwentyNigh from './pages/page_29/page_29'
import PageStaticthirteenth from './pages/page_30/page_30'
import PageStaticthirteenthone from './pages/page_31/page_31'
import PageStaticthirteenthtwoo from './pages/page_32/page_32'
import PageStaticthirteenththree from './pages/page_33/page_33'
import PageStaticthirteenthfour from './pages/page_34/page_34'
import PageStaticthirteenthfive from './pages/page_35/page_35'
import PageStaticthirteenthsix from './pages/page_36/page_36'
import PageStaticthirteenthseven from './pages/page_37/page_37'
import PageStaticthirteentheight from './pages/page_38/page_38'
import PageStaticthirteenthnine from './pages/page_39/page_39'

import PageStaticFourtyOne from './pages/page_41/page_41'
import PageStaticFourtyTwo from './pages/page_42/page_42'
import PageStaticManagement from './pages/mktf/mktf'
import PageStaticYoshlarIttifoqi from './pages/page_43/yoshlar_ittifoqi'
import PageStaticAkademiklitsey from './pages/litsey/litsey'
import PageStaticAkademikFilial from './pages/filial/filial'
import PageStaticAkademikBakalavr from './pages/bakalavr/bakalavr'
import PageStaticNoorganic from './pages/nmktf/nmktf'
import PageStaticVinoUzum from './pages/vinoch/vinoch'
import PageStaticQoshTalim from './pages/qush_talim/qush_talim'
import PageStaticUniverHaqida from './pages/univer_haqida/univer_haqida'
import OtmIshReja from './pages/otm_ish_reja/otm_ish_reja'
import BizBnAloqa from './pages/biz_bn_aloqa/biz_bn_aloqa'
import BizningManzil from './pages/bizning_manzil/bizning_manzil'
import Aloqa from './pages/aloqa/aloqa'
import OtmUstavi from './pages/otm_ustavi/otm_ustavi'
import XorijiyAbitur from './pages/xorijAbitur/xorijAbitur'
import UtishBallar from './pages/UtishBallar/UtishBallar'
import NotFound from './pages/NotFound/NotFound'
import TestFanlari from './pages/TestFanlari/TestFanlari'
import DarsJadval from './pages/DarsJadval/DarsJadval'
import Symbols from './pages/symbols/symbols'
import Bugalter from './pages/buxgalteriya/bugalter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/announcements/:id" element={<AnnouncementsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/yangilik" element={<NewsAdmin />} />
        <Route path="/admin/news/add" element={<AddNews />} />
        <Route path="/admin/news_edit/:id" element={<EditNews />} />
        <Route path="/admin/page" element={<PagesAdmin />} />
        <Route path="/page/get/:id" element={<Page />} />
        <Route path="/page/static/get/rectorat" element={<PageStaticRectorat />} />
        <Route path="/page/static/get/oquvProrekt" element={<RectorPageOquv />} />
        <Route path="/page/static/get/IlmiyProrektor" element={<RectorPageIlmiy />} />
        <Route path="/page/static/get/MoliyaProrektor" element={<RectorPageMoliya />} />
        <Route path="/page/static/get/RectorPageManav" element={<RectorPageManav />} />
        <Route path="/page/static/get/rector" element={<RectorPage />} />
        <Route path="/page/static/get/1" element={<PageStaticOne />} />
        <Route path="/page/static/get/faculties" element={<PageStaticFaculty />} />
        <Route path="/page/static/get/3" element={<PageStaticThree />} />
        <Route path="/page/static/get/4" element={<PageStaticFour />} />
        <Route path="/page/static/get/5" element={<PageStaticFive />} />
        <Route path="/page/static/get/6" element={<PageStaticSix />} />
        <Route path="/page/static/get/7" element={<PageStaticSeven />} />
        <Route path="/page/static/get/8" element={<PageStaticEight />} />
        <Route path="/page/static/get/9" element={<PageStaticNine />} />
        <Route path="/page/static/get/10" element={<PageStaticTen />} />
        <Route path="/page/static/get/11" element={<PageStaticEleven />} />
        <Route path="/page/static/get/12" element={<PageStaticTwelve />} />
        <Route path="/page/static/get/13" element={<PageStaticThirdteen />} />
        <Route path="/page/static/get/14" element={<PageStaticFourteen />} />
        <Route path="/page/static/get/15" element={<PageStaticFiveteen />} />
        <Route path="/page/static/get/16" element={<PageStaticSixteen />} />
        <Route path="/page/static/get/17" element={<PageStaticSeventeen />} />
        <Route path="/page/static/get/18" element={<PageStaticEighteen />} />
        <Route path="/page/static/get/19" element={<PageStaticNineteen />} />
        <Route path="/page/static/get/20" element={<PageStaticTwenty />} />
       
        <Route path="/page/static/get/22" element={<PageStaticTwentyTwo />} />
        <Route path="/page/static/get/23" element={<PageStaticTwentyThree />} />
        <Route path="/page/static/get/24" element={<PageStaticTwentyFour />} />
        <Route path="/page/static/get/25" element={<PageStaticTwentyFive />} />
        <Route path="/page/static/get/26" element={<PageStaticTwentySix />} />
        <Route path="/page/static/get/27" element={<PageStaticTwentySeven />} />
        <Route path="/page/static/get/28" element={<PageStaticTwentyEight />} />
        <Route path="/page/static/get/29" element={<PageStaticTwentyNigh />} />
        <Route path="/page/static/get/30" element={<PageStaticthirteenth />} />
        <Route path="/page/static/get/31" element={<PageStaticthirteenthone />} />
        <Route path="/page/static/get/32" element={<PageStaticthirteenthtwoo />} />
        <Route path="/page/static/get/33" element={<PageStaticthirteenththree />} />
        <Route path="/page/static/get/34" element={<PageStaticthirteenthfour />} />
        <Route path="/page/static/get/35" element={<PageStaticthirteenthfive />} />
        <Route path="/page/static/get/36" element={<PageStaticthirteenthsix />} />
        <Route path="/page/static/get/37" element={<PageStaticthirteenthseven />} />
        <Route path="/page/static/get/38" element={<PageStaticthirteentheight />} />
        <Route path="/page/static/get/39" element={<PageStaticthirteenthnine />} />
   
        <Route path="/page/static/get/41" element={<PageStaticFourtyOne />} />
        <Route path="/page/static/get/42" element={<PageStaticFourtyTwo />} />
        <Route path="/page/static/get/mktf" element={<PageStaticManagement />} />
        <Route path="/page/static/get/yoshlar" element={<PageStaticYoshlarIttifoqi />} />
        <Route path="/page/static/get/litsey" element={<PageStaticAkademiklitsey />} />
        <Route path="/page/static/get/xorijAbitur" element={<XorijiyAbitur />} />
        <Route path="/page/static/get/filial" element={<PageStaticAkademikFilial />} />
        <Route path="/page/static/get/bakalavr" element={<PageStaticAkademikBakalavr />} />
        <Route path="/page/static/get/nmktf" element={<PageStaticNoorganic />} />
        <Route path="/page/static/get/vinoch" element={<PageStaticVinoUzum />} />
        <Route path="/page/static/get/qush_talim" element={<PageStaticQoshTalim />} />
        <Route path="/page/static/get/univer_haqida" element={<PageStaticUniverHaqida />} />
        <Route path="/page/static/get/otm_ish_reja" element={<OtmIshReja />} />
        <Route path="/page/static/get/biz_bn_aloqa" element={<BizBnAloqa />} />
        <Route path="/page/static/get/utishBall" element={<UtishBallar />} />
        <Route path="/page/static/get/DarsJadval" element={<DarsJadval />} />
        <Route path="/page/static/get/NotFound" element={<NotFound />} />
        <Route path="/page/static/get/bizning_manzil" element={<BizningManzil />} />
        <Route path="/page/static/get/aloqa" element={<Aloqa />} />
        <Route path="/page/static/get/otm_ustavi" element={<OtmUstavi />} />
        <Route path="/page/static/get/TestFanlari" element={<TestFanlari />} />
        <Route path="/page/static/get/symbols" element={<Symbols />} />
        <Route path="/page/static/get/44" element={<Bugalter />} />
        <Route path="/admin/page/add" element={<AddPage />} />
        <Route path="/admin/page/edit/:id" element={<EditPage />} />
        <Route path="/admin/announcement" element={<AdminAnnouncements />} />
        <Route path="/admin/announcement/add" element={<AddAnnouncements />} />
        <Route path="/admin/announcements/edit/:id" element={<AnnouncementsEdit />} />
        <Route path="/admin/upload" element={<Upload />} />
        <Route path="/admin/photo" element={<AdminPhoto />} />
        <Route path="/admin/videos" element={<AdminVideo />} />
        <Route path="/admin/files" element={<AdminFile />} />
        <Route path="/admin/statistic/all" element={<StatisticsPage />} />
        <Route path="/search-facultet/:question" element={<FilteredPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
