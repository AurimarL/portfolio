interface ISectionSeparator {
  placeHolder: String;
}
export default function SectionSeparator({ placeHolder }: ISectionSeparator) {
  return (
    <div className="m-5">
      <p className="text-4xl text-center">{placeHolder}</p>
    </div>
  );
}
