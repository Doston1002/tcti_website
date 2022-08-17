import AdminHeader from '../../components/admin_header/admin_header'
import EditPageForm from '../../components/edit_page/edit_page'

function EditPage() {
  const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
  return (
    <div className='d-flex'>
        <AdminHeader />
        <EditPageForm />
    </div>
  );
}

export default EditPage;
