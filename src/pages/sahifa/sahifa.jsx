import AdminHeader from '../../components/admin_header/admin_header'
import AdminPages from '../../components/admin_pages/admin_pages'

function PagesAdmin() {
  const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
  return (
    <div className='d-flex'>
        <AdminHeader />
        <AdminPages />
    </div>
  );
}

export default PagesAdmin;
