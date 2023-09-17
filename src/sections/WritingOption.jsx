import writingImg from "../assets/images/writing.jpg";

const WritingOption = () => {
  return (
    <div
      className="max-container flex max-md:flex-col md:justify-center
      flex-row-reverse
    md:items-center gap-16"
    >
      <div className="md:w-1/2">
        <h2 className="text-5xl font-montserrat text-light font-bold ">
          <span className="text-primary">Writing</span> Option
        </h2>

        <p className="text-lg mt-10 max-w-lg text-muted/80 font-palanquin
        text-[1rem] leading-normal">In the realm of our Writing feature, you
        hold the pen to craft your understanding of terms. This versatile tool
        tailors itself to the intricacies of each term's definitions, furnishing
        you with a corresponding number of input boxes to express your
        knowledge. It's important to note that our Writing feature embraces a
        forgiving approach – your responses won't be judged by case sensitivity
        or white space sensitivity, where extra spaces or variations in
        capitalization won't hinder your success. As long as your spelling
        aligns with the correct answer, whether it's "C orr ect" or "correct,"
        your effort will shine through, promoting a learning environment that
        values your insights and comprehension above all else. This feature
        empowers you to express your knowledge naturally, ensuring your focus
        remains on grasping the content's essence rather than the nuances of
        formatting.

        </p>
      </div>
      <div className="md:w-1/2  ">
        <img
          src={writingImg}
          alt="writing image"
          className="object-contain shadow-1 rounded-3xl w-[250px] mx-auto "
        />
      </div>
    </div>
  );
};

export default WritingOption;
