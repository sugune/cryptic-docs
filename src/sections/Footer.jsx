import { useData } from "../context";
import { socials } from "../constants";

const Footer = () => {
  const { theme } = useData();

  return (
    <div
      className="bg-ct-secondary flex justify-between w-full h-full gap-4
      items-center max-container 
      max-md:items-center 
    max-md:flex-col"
    >
      <a href="https://cyruscards.netlify.app/" className="">
        <img src={theme.logo} className="w-[100px]" alt="logo" />
      </a>
      <p className="text-muted text-sm text-center">
        Copyright © 2023 Cyrus Cards. All rights reserved
      </p>
      <div className="flex gap-4">
        {socials.map((social) => (
          <a href={social.link} className="text-primary text-2xl ">
            <i className={social.logo}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
