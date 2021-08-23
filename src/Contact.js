import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SendIcon from '@material-ui/icons/Send';
function Contact() {
	const [state, handleSubmit] = useForm('meqvpnor');
	if (state.succeeded) {
		return (
			<div>
				<br />
				<p>
					Thank you for contacting me. I will respond to your message shortly.
				</p>
			</div>
		);
	}
	return (
		<form onSubmit={handleSubmit} className='form'>
			<br />
			<h2>Contact Me</h2>
			<label htmlFor='name'>Name</label>
			<input type='text' id='name' name='name' autoComplete='off' required />
			<label htmlFor='email'>Email Address</label>
			<input id='email' type='email' name='email' required autoComplete='off' />
			<ValidationError prefix='Email' field='email' errors={state.errors} />
			<label htmlFor='message'>Message</label>
			<textarea
				id='message'
				name='message'
				cols='23'
				rows='7'
				autoComplete='off'
				required
				style={{ resize: 'none' }}
			/>
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<button type='submit' disabled={state.submitting}>
				Send Email&nbsp;
				<SendIcon />
			</button>
			<div className='email'>
				<p>
					<MailOutlineIcon /> &nbsp;Email:
				</p>
				<small>rafaelfernandescruz@sapo.pt</small>
			</div>
		</form>
	);
}

export default Contact;
