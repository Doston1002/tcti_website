import AdminHeader from '../../components/admin_header/admin_header'
import Media from '../../components/media/media'


function AdminPhoto() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <Media />
        </>
    );
}

export default AdminPhoto;
