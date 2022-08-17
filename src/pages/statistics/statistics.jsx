import AdminHeader from '../../components/admin_header/admin_header'
import Statistics from '../../components/statistics/statistics'


function StatisticsPage() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            <Statistics />
        </>
    );
}

export default StatisticsPage;
