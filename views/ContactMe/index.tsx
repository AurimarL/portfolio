/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react'
import Button from '../../components/Button'
import ReCAPTCHA from 'react-google-recaptcha'

interface IContactForm {
	setname: any
	setemail: any
	setmessage: any
}

function ContactForm(props: IContactForm) {
	return (
		<div className="flex justify-center md:m-8">
			<form className="  md:p-4 rounded-md border-2 p-2 border-primaryBlue w-full md:w-fit">
				<div className="md:pt-2 md:pb-2 m-2 ">
					<input
						placeholder="Name"
						className=" w-full md:w-96 md:text-[30px] border-2 p-1"
						onChange={(e) => props.setname(e.target.value)}
					/>
				</div>
				<div className="md:pt-2 md:pb-2 m-2">
					<input
						placeholder="Email"
						type={'email'}
						className=" w-full md:w-96 md:text-[30px] border-2 p-1"
						onChange={(e) => props.setemail(e.target.value)}
					/>
				</div>
				<div className="m-2">
					<textarea
						id="mensagem"
						name="mensagem"
						rows={4}
						className="w-full md:w-1/2 border-2 rounded"
						placeholder="Message"
						onChange={(e) => props.setmessage(e.target.value)}
					/>
				</div>
			</form>
		</div>
	)
}
export default function ContactMe() {
	const [Name, setName] = useState('')
	const [Email, setEmail] = useState()
	const [Message, setMessage] = useState('')

	async function SendEmail() {
		return
		// send Email
		const EmailData = {Name, Email, Message}

		fetch('/api/mail', {
			method: 'post',
			body: JSON.stringify(EmailData),
		})
	}

	const onReCAPTCHAChange = (captchaCode: any) => {
		// If the reCAPTCHA code is null or undefined indicating that
		// the reCAPTCHA was expired then return early
		if (!captchaCode) {
			return
		}
		// Reset the reCAPTCHA so that it can be executed again if user
		// submits another email.
		// ReCAPTCHA.current.reset()
	}

	return (
		<div c>
			<ContactForm
				setname={setName}
				setemail={setEmail}
				setmessage={setMessage}
			/>
			{/*<ReCAPTCHA
				ref={ReCAPTCHA}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
				onChange={(e: any) => onReCAPTCHAChange(e)}
	/>*/}
			<div className="text-center m-2">
				<Button
					PlaceHolder="Send Message"
					evt={SendEmail}
					key={undefined}
					Disable={true}
				/>
				<p className="text-[10px]">Email is disabled</p>
			</div>
		</div>
	)
}
