interface ISectionSepare {
	SectionName: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any
}
export default function SectionSepare(props: ISectionSepare) {
	return (
		<>
			<h1 className="text-center ">
				{'< '} {props.SectionName}
				{' />'}
			</h1>
			<>{props.children}</>
		</>
	)
}
