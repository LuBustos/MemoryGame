import "./Title.css";
interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <p className={"Title"}>{title}</p>
      <hr />
    </div>
  );
};

export default Title;
