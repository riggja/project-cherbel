import React, { Component } from 'react';
import '../css/custom-default.css';
import './SocialMedia.css';

class SocialMedia extends Component {

    render() {
        return(
            <section>
                <h3>Social Media</h3>
                <table id="social">
                    <td><a href="www.facebook.com"><img src="https://i.ibb.co/80hwJkK/iconfinder-Rounded-Facebook-svg-5282541.png" alt="Facebook Icon" border="0"/></a></td>
                    <td><a href="www.twitter.com"><img src="https://i.ibb.co/Npkt1kR/iconfinder-Rounded-Twitter5-svg-5282551.png" alt="Twitter Icon" border="0"/></a></td>
                    <td><a href="www.instagram.com"><img src="https://i.ibb.co/BCkpFF0/iconfinder-Rounded-Instagram-svg-5282544.png" alt="Twitter Icon" border="0"/></a></td>
                </table>
            </section>
        )
    }
}

export default SocialMedia
