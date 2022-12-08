/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Button from '../../components/Button';

interface IContactForm {
    setname: any;
    setemail: any;
    setmessage: any;
}

function ContactForm(props: IContactForm) {
    return (
        <div className="flex justify-center md:m-8">
            <form className="  border-primaryBlue w-full rounded-md border-2 p-2 md:w-fit md:p-4">
                <div className="m-2 md:pt-2 md:pb-2 ">
                    <input
                        placeholder="Name"
                        className=" w-full border-2 p-1 md:w-96 md:text-[20px]"
                        onChange={(e) => props.setname(e.target.value)}
                    />
                </div>
                <div className="m-2 md:pt-2 md:pb-2">
                    <input
                        placeholder="Email"
                        type={'email'}
                        className=" w-full border-2 p-1 md:w-96 md:text-[20px]"
                        onChange={(e) => props.setemail(e.target.value)}
                    />
                </div>
                <div className="m-2">
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={4}
                        className="w-full rounded border-2"
                        placeholder="Message"
                        onChange={(e) => props.setmessage(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}
export default function ContactMe() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState();
    const [Message, setMessage] = useState('');

    async function SendEmail() {
        return;
        // send Email
        const EmailData = { Name, Email, Message };
        console.log(Name, Email, Message);

        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(EmailData),
        });
    }

    /*const onReCAPTCHAChange = (captchaCode: any) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Reset the reCAPTCHA so that it can be executed again if user
        // submits another email.
        // ReCAPTCHA.current.reset()
    };
*/
    return (
        <div>
            <ContactForm setname={setName} setemail={setEmail} setmessage={setMessage} />
            {/*<ReCAPTCHA
				ref={ReCAPTCHA}
				size="invisible"
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
				onChange={(e: any) => onReCAPTCHAChange(e)}
	/>*/}
            <div className="m-2 text-center">
                <Button PlaceHolder="Send Message" evt={SendEmail} key={undefined} Disable={true} />
                <p className="text-[10px]">Email is disabled</p>
            </div>
        </div>
    );
}
