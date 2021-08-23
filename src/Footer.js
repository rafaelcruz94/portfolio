import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className='footer'>
           <small>© 2021 Rafael Cruz</small>
           <div>
           <a href="https://www.linkedin.com/in/rafael-cruz-20aa3b211/" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
           <a href="https://github.com/rafaelcruz94" target='_blank' rel="noreferrer"><GitHubIcon /></a>
           </div>
        </div>
    )
}

export default Footer
