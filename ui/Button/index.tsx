export interface IButton {
  text: String | any;
}

export const PrimaryButton = ({ text }: IButton) => {
  return (
    <>
      <button className="btn btn-primary ">{text}</button>
    </>
  );
};
