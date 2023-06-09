import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className="">
                <h4>find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="">
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;