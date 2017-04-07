import { Link } from "react-router";
import { Avatar } from "../../widgets";
export default class ResultEntry extends React.Component {
  render () {
    const result = this.props.result;
    const image = result.avatar;
    const name = result.name;
    let link = `/char/${result.id}/${name}`;
    return <Link to={link}>
      <Avatar width={50} height={50} image={image} />
      <div>{name}</div>
    </Link>;
  }
}
