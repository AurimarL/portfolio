// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
	status: string
}

import sgMail from '@sendgrid/mail'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
	const body = JSON.parse(req.body)
	const message = `
	Name: ${body.Name} \r\n
	Email: ${body.Email}\r\n
	Message: ${body.Message}\r\n`

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const msg = {
		to: 'aurimardev@gmail.com', // Change to your recipient
		from: 'aurimardev@gmail.com', // Change to your verified sender
		subject: '!!Portfolio Email!!',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	}
	try {
		sgMail.send(msg)
		res.status(200).json({status: 'Ok'})
	} catch (error) {
		console.log(error)
	}
}
