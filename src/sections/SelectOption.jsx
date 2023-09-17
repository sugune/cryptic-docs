import selectImg from "../assets/images/select.jpg";

const SelectOption = () => {
  return (
    <div
      className="max-container flex max-md:flex-col md:justify-center
    md:items-center gap-16"
    >
      <div className="md:w-1/2">
        <h2 className="text-5xl font-montserrat text-light font-bold ">
          <span className="text-primary">Select</span> Option
        </h2>

        <p className="text-lg mt-10 max-w-lg text-muted/80 font-palanquin text-[1rem] leading-normal">
          With the Select feature, you gain the power to pinpoint the precise
          definition of a given term from an array of choices. This feature
          adapts intelligently to the complexity of the terms, ensuring that
          you're presented with a comprehensive set of options. If a term boasts
          1 or 2 definitions, you'll have 4 choices to select from, ensuring a
          well-rounded assessment. However, when a term delves deeper, offering
          3 or more definitions, the Select feature dynamically scales,
          presenting you with an expanding set of choices. This means 3
          definitions provide 6 choices, 4 definitions grant 8 options, and the
          pattern continues. With the Select feature, you're guaranteed a
          minimum of 4 choices, and as the depth of knowledge grows, so does the
          breadth of your options. It's a feature designed to empower your
          learning experience, offering flexibility and precision in your quest
          for understanding.
        </p>
      </div>
      <div className="md:w-1/2  ">
        <img
          src={selectImg}
          alt="select image"
          className="object-contain shadow-1 rounded-3xl w-[250px] mx-auto "
        />
      </div>
    </div>
  );
};

export default SelectOption;
