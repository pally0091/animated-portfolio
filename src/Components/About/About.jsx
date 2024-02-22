import Header from "../Header";
import information from "../../content/information";

function About() {
  const userData = information.userData;
  return (
    <div>
      <Header>About Me</Header>
      <div>
        <p className="mb-10 w-[90%] mx-auto text-justify">
          {userData.description}
        </p>
      </div>
    </div>
  );
}

export default About;
