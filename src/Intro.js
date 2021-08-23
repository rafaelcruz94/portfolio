import React, { useState } from 'react';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Contact from './Contact';

function Intro() {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	return (
		<div>
			<div className='intro'>
				<h1>Rafael Cruz</h1>
				<h4>Front-end Developer</h4>
				<p>
					I'm an enthusiastic developer who likes to take new challenges and
					build stuff.
				</p>
				<div className='buttons'>
					<button>
						<a href='./download/CV-Rafael.pdf' download="CV-Rafael.pdf">
							Resume <GetAppOutlinedIcon />
						</a>
					</button>
					<button onClick={onOpenModal}>
						Get In Touch&nbsp;
						<MailOutlineOutlinedIcon />
					</button>
				</div>
			</div>
			<div>
				<Modal open={open} onClose={onCloseModal} center>
					<Contact />
				</Modal>
			</div>
		</div>
	);
}

export default Intro;
