import React from 'react'
import Button from '../Button'
export default function Sections() {
	const Sections = ['Skills', 'Projetos', 'Servicos', 'Contactar']
	return (
		<>
			{Sections.map((e, i) => {
				return (
					<Button
						key={i}
						PlaceHolder={e}
						evt={() => (window.location.href = '#' + e)}
					/>
				)
			})}
		</>
	)
}
