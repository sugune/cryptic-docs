import { useData } from "../context";

const Hero = () => {
  const { theme } = useData();

  return (
    <div className="max-container flex flex-col xl:flex-row gap-12 
    pt-24 ">
      <div className="lg:w-3/5 ">
        <p className="font-palanquinin font-semibol text-primary">
          Boost Your Memory and Retention
        </p>
        <h1
          className="text-[58px] max-sm:leading-tight md:text-[85px]
        sm:text-7xl xl:text-8xl text-light font-semibold mt-8 font-palanquin "
        >
          Master Your Learning with{" "}
          <span className="whitespace-nowrap text-primary ">Cyrus Cards</span>
        </h1>
        <p className="text-sm mt-10 font-montserrat max-w-lg text-muted/60">
          Why struggle with traditional study methods when you can have a
          smarter way to learn? My flashcards are customizable, user-friendly,
          and accessible from anywhere. Start your journey to academic success
          or professional growth today.
        </p>
        <a href="" className="button block w-max ml-auto mt-4">
          Get started
        </a>
      </div>
      <div className=" ">
        <img
          src={theme.hero}
          alt="hero image"
          className="object-contain mx-auto "
        />
      </div>
    </div>
  );
};

export default Hero;
