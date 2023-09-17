import { themes } from "../constants";
import Theme from "../components/Theme";

const Themes = () => {
  return (
    <div className="max-container flex max-lg:flex-col gap-16">
      <div className="flex flex-1 flex-col">
        <h2 className="text-5xl font-montserrat text-light font-bold">
          Available <span className="text-primary">Themes</span>
        </h2>
        <p
          className="text-lg mt-10 max-w-lg text-muted/80 font-palanquin
        text-[1rem] leading-normal"
        >
          Prepare to embark on a visual journey with my splendid array of
          available themes. Whether you prefer the crisp allure of 'Green
          Apple,' the mysterious ambiance of 'Midnight Dusk,' or the playful
          charm of 'Tako,' we've got you covered. Dive into the refreshing
          'Natural Sky,' explore the depths of 'Yin & Yang,' and savor the
          vibrant hues of 'Strawberry Daiquiri.' Feel the rush of the 'Tidal
          Wave,' bask in the tranquility of 'Lavender,' or embrace the
          simplicity of 'Yotsuba.' With my themes, you can customize your
          browsing experience to match your mood and style. Each theme is a
          doorway to a unique visual adventure, ensuring that your visit is not
          only informative but also visually captivating. Select your favorite
          theme and embark on a personalized journey through my content.
        </p>
      </div>
      <div className="flex-1 flex justify-center ">
        <div className="flex max-w-xl flex-wrap justify-center gap-12 ">
          {themes.map((theme) => (
            <Theme key={theme.name} singleTheme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
