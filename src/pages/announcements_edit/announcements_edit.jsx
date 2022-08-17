import AdminHeader from '../../components/admin_header/admin_header'
import AnnouncementsEditAdmin from '../../components/announcements_edit/announcements_edit'


function AnnouncementsEdit() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <AnnouncementsEditAdmin />
        </>
    );
}

export default AnnouncementsEdit;
