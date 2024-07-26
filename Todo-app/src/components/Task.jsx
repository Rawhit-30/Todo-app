import { formatDate } from "../utlis/dateFormatter";
const Task = ({ task: { Title, description, createdDate } }) => {
  return (
    <>
      <div className="card ">
        <div className="content">
          <div className="header">{Title}</div>
          <div className="meta">{formatDate(createdDate)}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">update</div>
            <div className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
