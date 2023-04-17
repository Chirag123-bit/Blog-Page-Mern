import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function ProfileTab() {
    return (
        <Tabs
            defaultActiveKey="Profile"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="Profile" title="Profile">
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>First Name</h6>
                    <h6 className='right-text'>Chirag</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Last Name</h6>
                    <h6 className='right-text'>Simkhada</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>User Name</h6>
                    <h6 className='right-text'>Chirag</h6>
                </div>
                <div className="text-con d-flex justify-content-between">
                    <h6 className='left-text'>Email</h6>
                    <h6 className='right-text'>chiragsimkhada@gmail.com</h6>
                </div>
            </Tab>
        </Tabs>
    );
}

export default ProfileTab;