import slideImg from "../assets/images/slide.jpg";

const SlideOption = () => {
  return (
    <div
      className="max-container flex max-md:flex-col md:justify-center
      flex-row-reverse 
    md:items-center gap-16"
    >
      <div className="md:w-1/2">
        <h2 className="text-5xl font-montserrat text-light font-bold ">
          <span className="text-primary">Slide</span> Option
        </h2>

        <p
          className="text-lg mt-10 max-w-lg text-muted/80 text-[1rem]
          leading-normal
        font-palanquin "
        >
          The slide option is a fantastic feature that empowers users to put
          their honesty to the test. It offers them the unique ability to
          correct their own answers, fostering a sense of accountability and
          self-improvement. Moreover, it grants users the freedom to
          effortlessly navigate through all the cards, enabling a smooth and
          continuous learning experience. This feature not only promotes active
          engagement but also enhances the overall effectiveness of the learning
          process, making it a valuable asset for anyone seeking to expand their
          knowledge.
        </p>
      </div>
      <div className="md:w-1/2  ">
        <img
          src={slideImg}
          alt="slide image"
          className="object-contain shadow-1 rounded-3xl w-[250px] mx-auto "
        />
      </div>
    </div>
  );
};

export default SlideOption;
