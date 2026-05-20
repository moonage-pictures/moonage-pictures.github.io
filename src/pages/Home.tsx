import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import logo from "@/assets/images/logo.svg";

interface CircleProps {
  to: string;
  label: string;
  color: string;
  className: string;
}

function NavCircle({ to, label, color, className }: CircleProps) {
  return (
    <Link to={to}>
      <div className={`rounded-full flex items-center justify-center text-center absolute ${color} ${className}`}>
        <h1
          className="text-black uppercase font-heading font-bold text-[1.7vw] tracking-[0.2rem] max-md:text-[2.5vh] max-md:tracking-[0.25rem] leading-tight"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </div>
    </Link>
  );
}

function BlankCircle({ color, className }: { color: string; className: string }) {
  return <div className={`rounded-full absolute ${color} ${className}`} />;
}

export function Home() {
  return (
    <>
      <div className="h-[95vh] bg-black relative">
        <NavCircle
          to="/company"
          label="Company"
          color="bg-brand-red"
          className="top-[3vw] left-[10vw] w-[18vw] h-[18vw] max-md:top-[3vh] max-md:left-[5vh] max-md:w-[24vh] max-md:h-[24vh]"
        />
        <NavCircle
          to="/news"
          label="News"
          color="bg-brand-blue"
          className="top-[3vw] left-[36vw] w-[16vw] h-[16vw] max-md:top-[20vh] max-md:left-[28vh] max-md:w-[18vh] max-md:h-[18vh]"
        />
        <NavCircle
          to="/people"
          label="People"
          color="bg-white"
          className="top-[20vw] left-[26vw] w-[15vw] h-[15vw] max-md:top-[35vh] max-md:left-[8vh] max-md:w-[20vh] max-md:h-[20vh]"
        />
        <NavCircle
          to="/contact"
          label="Contact"
          color="bg-brand-green"
          className="top-[17vw] left-[64vw] w-[17vw] h-[17vw] max-md:top-[65vh] max-md:left-[33vh] max-md:w-[21vh] max-md:h-[21vh]"
        />
        <NavCircle
          to="/shows"
          label="Shows"
          color="bg-brand-pink"
          className="top-[27vw] left-[44vw] w-[15vw] h-[15vw] max-md:top-[40vh] max-md:left-[35vh] max-md:w-[18vh] max-md:h-[18vh]"
        />
        <NavCircle
          to="/daydream"
          label="Day<br/>Dream"
          color="bg-brand-yellow"
          className="top-[33vw] left-[78vw] w-[11vw] h-[11vw] max-md:top-[65vh] max-md:left-[8vh] max-md:w-[16vh] max-md:h-[16vh]"
        />

        <BlankCircle color="bg-brand-blue" className="top-[35vw] left-[18vw] w-[8vw] h-[8vw] max-md:top-[4vh] max-md:left-[28vh] max-md:w-[6vh] max-md:h-[6vh]" />
        <BlankCircle color="bg-brand-yellow" className="top-[16vw] left-[53vw] w-[8vw] h-[8vw] max-md:top-[20vh] max-md:left-[47vh] max-md:w-[8vh] max-md:h-[8vh]" />
        <BlankCircle color="bg-white" className="top-[7vw] left-[62vw] w-[7vw] h-[7vw] max-md:top-[58vh] max-md:left-[26vh] max-md:w-[7vh] max-md:h-[7vh]" />
        <BlankCircle color="bg-brand-red" className="top-[35vw] left-[62vw] w-[8vw] h-[8vw] max-md:top-[53vh] max-md:left-[3vh] max-md:w-[9vh] max-md:h-[9vh]" />
        <BlankCircle color="bg-brand-pink" className="top-[17vw] left-[83vw] w-[6vw] h-[6vw] max-md:top-[82vh] max-md:left-[27vh] max-md:w-[5vh] max-md:h-[5vh]" />
        <BlankCircle color="bg-brand-yellow" className="top-[23vw] left-[15vw] w-[7vw] h-[7vw] max-md:top-[28vh] max-md:left-[6vh] max-md:w-[7vh] max-md:h-[7vh]" />

        <img
          src={logo}
          alt="Moonage logo"
          className="absolute h-[15vw] top-0 left-[73vw] max-md:h-[24vh] max-md:top-[-5vw] max-md:left-[48vw]"
        />
      </div>
      <Footer />
    </>
  );
}
