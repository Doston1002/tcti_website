import AdminHeader from '../../components/admin_header/admin_header'
import EditNewsForm from '../../components/edit_news/edit_news'


function EditNews() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <EditNewsForm />
        </>
    );
}

export default EditNews;
