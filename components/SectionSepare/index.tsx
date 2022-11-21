interface ISectionSepare {
	SectionName: string
}
export default function SectionSepare(props: ISectionSepare) {
	return (
		<>
			<h1 className="text-center m-4">
				{'< '} {props.SectionName}
				{' />'}
			</h1>
		</>
	)
}
