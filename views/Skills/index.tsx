import * as React from 'react'

interface SkillsModalProps {
	TextHeader: string
	SkillsList: string[]
}

export function SkillsModal(props: SkillsModalProps) {
	return (
		<>
			<div className="m-4 p-2 border-2 border-black rounded-md">
				<div className="border-b-2 border-blue-500">
					<h1 className="text-center ">{props.TextHeader}</h1>
				</div>
				<div className="">
					<ul key={'some'}>
						{props.SkillsList?.map((skill, i) => {
							return (
								<li key={i}>
									<h3>{skill}</h3>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default function SkillsSection() {
	const FrontEndSkillsList = [
		'ReactJS',
		'React Native',
		'NextJS',
		'TailwindCs',
		'Bootstrap',
		'Storybook',
	]
	const BackEndSkillsList = ['MongoDB', 'FaunaDB', 'Solidity', 'AWS EC2']
	return (
		<div className="md:w-2/3 mx-auto ">
			<SkillsModal TextHeader="FrontEnd 🛠️" SkillsList={FrontEndSkillsList} />

			<SkillsModal TextHeader="BackEnd 🛠️" SkillsList={BackEndSkillsList} />
		</div>
	)
}
