import { ReactComponent as StackOverflowIcon } from "assets/icons/stack-overflow-brands.svg";
import { ReactComponent as GithubIcon } from "assets/icons/github-brands.svg";
import { ReactComponent as LinkedInIcon } from "assets/icons/linkedin-brands.svg";
import { ReactComponent as ReactIcon } from "assets/icons/react-brands.svg";
import jsIcon from "assets/icons/js.png";
import tsIcon from "assets/icons/typescript.png";
import "./about.css";

const About = () => {
  return (
    <div className="about_outer_div">
      <div className="about_inner_div">
        <p className="about_p">
          {" "}
          Hello,
          <br /> I am vaibhav an aspiring Full stack web devloper. I've done my
          bachelors in computer science from University of Delhi. Currently I am
          learning different webdev technologies like d3.js, web3.0, websockets
          etc.. This project shows currency exchage rates against US dollars.
          <br />
          Since the api is of free tier hence I could only use US dollar as
          base.
        </p>{" "}
        <div className="tech_stack_div">
          <p>
            {" "}
            <strong> Tech stacks used for this project </strong>{" "}
          </p>
          <ReactIcon id="tech_stack_icons" className="react_icon" />
          <img id="tech_stack_icons" src={jsIcon} />
          <img id="tech_stack_icons" src={tsIcon} />
          <img
            id="tech_stack_icons"
            src="https://www.chartjs.org/media/logo-title.svg"
          />
        </div>
        <div className="about_footer_div">
          <p>
            <strong> please follow me on </strong>
          </p>{" "}
          <div>
            <a
              href="https://stackoverflow.com/users/10702870/vaibhav-bisht"
              target="_blank"
            >
              <StackOverflowIcon id="svg_icon" className="stackoverflow_icon" />
            </a>
            <a href="https://github.com/vaibhav135" target="_blank">
              <GithubIcon id="svg_icon" className="github_icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-singh-bisht-81619b126/"
              target="_blank"
            >
              <LinkedInIcon id="svg_icon" className="linkedin_icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
