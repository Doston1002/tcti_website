import AdminHeader from '../../components/admin_header/admin_header'
import AnnouncementsAdmin from '../../components/admin_announcements/admin_announcements'


function AdminAnnouncements() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <AnnouncementsAdmin />
        </>
    );
}

export default AdminAnnouncements;
