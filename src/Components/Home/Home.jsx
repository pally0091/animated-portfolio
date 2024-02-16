import Banner from "./Banner";
import "./home.scss";
import Skills from "./Skills";
import Header from "../Header";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Skills />
      <Header>My Professional Status</Header>
      <div className="w-[80%] flex flex-col md:flex-row gap-5 my-5 py-5 px-5 justify-around items-start mx-auto">
        {/* github status  */}
        <picture>
          <source
            srcSet="https://github-readme-stats.vercel.app/api?username=pally0091&show_icons=true&theme=gruvbox"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcSet="https://github-readme-stats.vercel.app/api?username=pally0091&show_icons=true"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img src="https://github-readme-stats.vercel.app/api?username=pally0091&show_icons=true" />
        </picture>
        {/* language status  */}
        <picture>
          <source
            srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=pally0091&layout=donut&theme=gruvbox"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=pally0091&show_icons=true"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pally0091&show_icons=true" />
        </picture>
      </div>
    </div>
  );
};

export default Home;
