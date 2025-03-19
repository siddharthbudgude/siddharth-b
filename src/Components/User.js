import Customeraccount from './Customeraccount';
import Customerlogin from './Customerlogin';

function User() {

    return (
        <>
            <div className="user-account d-flex flex-column flex-md-row md-p-2 container">
                <Customerlogin />
                <Customeraccount />
            </div>
        </>
    );
}

export default User;
