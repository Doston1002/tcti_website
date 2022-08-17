import AdminHeader from '../../components/admin_header/admin_header'
import AddPageForm from '../../components/add_page_form/add_page_form'


function AddPage() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <AddPageForm />
        </>
    );
}

export default AddPage;
