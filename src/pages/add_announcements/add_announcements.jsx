import AdminHeader from '../../components/admin_header/admin_header'
import AddAnnouncementsForm from '../../components/add_announcements_form/add_announcements_form'


function AddAnnouncements() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <AddAnnouncementsForm />
        </>
    );
}

export default AddAnnouncements;
