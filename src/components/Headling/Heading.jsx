import './Heading.css'

const Heading = ({titleName}) => {
  return (
    <div>
      <div className="sub-container-title">
        <h1 className="headline"> {titleName} </h1>
      </div>
    </div>
  );
};

export default Heading;
