import Image from 'next/image'
import AuriLogo from '../../assets/AuriLogo.png'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

export default function MeSection() {
	return (
		<>
			<div className="justify-center">
				<div>
					<p className="text-6xl md:text-9xl">Ola{' ;)'}</p>
					<p className="text-3xl md:text-6xl">FullStack Developer</p>
					<p className="text-3xl md:text-6xl">Improving this 🚧</p>

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
					<div className="md:h-[800px] md:w-[800px]">
						<Image src={AuriLogo} layout={'responsive'} priority alt="Eu/Me" />
					</div>
				</div>
			</div>
		</>
	)
}