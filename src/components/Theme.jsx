import { useData } from "../context";

const Theme = ({ singleTheme }) => {
  const { theme, changeTheme } = useData();
  const { name, selector, logo, logoSm, hero } = singleTheme;

  return (
    <div
      className={`w-[100px] ${selector} p-4 rounded-xl ${
        theme.name === name ? "border-2 border-primary" : ""
      }
    flex flex-col items-center`}
    >
      <div
        className={`w-[50px] h-[50px] overflow-hidden rounded-full bg-primary border-2 border-primary relative
        ${theme.name === name ? "swirl-in-fwd" : ""}
        `}
        onClick={() => changeTheme(singleTheme)}
      >
        <div className="bg-secondary absolute left-1/2 h-full w-full "></div>

        <div
          className="bg-secondary w-1/2 h-1/2 absolute bottom-1/2 left-1/2
          rounded-full scale-110
        -translate-x-2"
        ></div>
        <div
          className="bg-primary w-1/2 h-1/2 absolute top-1/2 right-1/2
          rounded-full scale-105
        translate-x-2"
        ></div>
      </div>

      <p
        className="capitalize mt-3 text-sm font-semibold font-palanquin text-center
      text-primary "
      >
        {name}
      </p>
    </div>
  );
};

export default Theme;
