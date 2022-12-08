interface ISectionSepare {
    SectionName: string;
}
export default function SectionSepare(props: ISectionSepare) {
    return (
        <>
            <h1 className="m-4 text-center">
                {'< '} {props.SectionName}
                {' />'}
            </h1>
        </>
    );
}
