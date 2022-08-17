import AdminHeader from '../../components/admin_header/admin_header'
import Upload_COMPONENT from '../../components/upload/upload'


function Upload() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <Upload_COMPONENT />
        </>
    );
}

export default Upload;
