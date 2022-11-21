import Image from 'next/image'
import AuriLogo from '../../assets/AuriLogo.png'
import {FaLinkedin, FaGithub, FaRegSmileWink} from 'react-icons/fa'

export default function MeSection() {
	return (
		<div className="justify-center m-2">
			<div>
				<p className="text-6xl md:text-9xl flex flex-row gap-2">
					Hi <FaRegSmileWink />
				</p>
				<p className="text-3xl md:text-6xl">FullStack Developer</p>
				<div className="flex flex-row">
					<FaLinkedin
						size={50}
						onClick={() => open('https://www.linkedin.com/in/aurimar-lopes/')}
					/>
					<FaGithub
						size={50}
						onClick={() => open('https://github.com/AurimarL')}
					/>
				</div>
			</div>
			<div className="md:flex md:justify-center">
				<div className="md:h-[700px] md:w-[700px]">
					<Image src={AuriLogo} layout={'responsive'} priority alt="Eu/Me" />
				</div>
			</div>
		</div>
	)
}
