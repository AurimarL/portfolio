import Image from 'next/image'
import ImageComingSoon from '../../assets/ImageComingSoon.png'
import Button from '../../components/Button'
import OndandoLogo from '../../assets/OndandoLogo.png'

import github from '../../assets/github.png'

export default function ProjectsSection() {
	const Data = [
		{
			name: 'Soon',
			image: ImageComingSoon,
			link: 'aurimarlopes.com',
			gitlink: 'aurimarlopes.com',
		},
		{
			name: 'Ondando',
			image: OndandoLogo,
			link: 'github.com/Ondando',
			gitlink: 'github.com/Ondando',
		},
		{
			name: 'Brevemente',
			image: ImageComingSoon,
			link: 'aurimarlopes.com',
			gitlink: 'aurimarlopes.com',
		},
	]
	return (
		<>
			<div className="md:flex-row md:flex ">
				{Data.map((projeto, i) => {
					return (
						<div
							key={i}
							className=" bg-blue-400 rounded-lg  m-2 md:h-fill md:w-[500px] border-2">
							<Image
								layout={'responsive'}
								alt={projeto.name}
								src={projeto.image ? projeto.image : ImageComingSoon}
								className="rounded-md rounded-b-3xl"
							/>
							<div className="flex-row flex justify-between border-t-2">
								<div className="m-2">
									<h3>{projeto.name}</h3>
									<Image
										src={github}
										height={50}
										width={50}
										onClick={() => window.open('https://' + projeto.gitlink)}
										layout={'fixed'}
									/>
								</div>
								<div>
									<Button
										PlaceHolder="Live"
										evt={() =>
											window.open('https://' + projeto.link, projeto.name)
										}
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}