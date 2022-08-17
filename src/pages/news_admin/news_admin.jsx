import AdminHeader from '../../components/admin_header/admin_header'
import AdminNews from '../../components/admin_news/admin_news'

function NewsAdmin() {
  const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
  return (
    <div className='d-flex'>
        <AdminHeader />
        <AdminNews />
    </div>
  );
}

export default NewsAdmin;
