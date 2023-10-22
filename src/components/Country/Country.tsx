import "./country.css";

export default function Country({ img, name, population, region, capital }) {
  //
  let arrOfDetails = [population, region, capital];
  let arrOfDetailsLabels: string[] = ["population", "region", "capita"];
  //
  return (
    <div className="h-[25vw] mb-[4vw] bg-Dark_Blue_DM_Elements cursor-pointer rounded-lg">
      <div className="h-[22vw] w-[18.5vw] flex flex-col justify-between">
        <img
          src={img}
          alt="flag"
          className="w-[100%] h-[12vw] rounded-tr-[0.5vw] rounded-tl-[0.5vw]"
        />
        <h3 className="text-white text-[1.5vw] font-bold pl-[1.5vw]">{name}</h3>
        <div
          className="text-white capitalize pl-[1.5vw] font-semibold "
          style={{ lineHeight: "1.6vw" }}
        >
          {arrOfDetails.map((e, i) => {
            return (
              <p key={i}>
                {arrOfDetailsLabels[i]}:
                <span className="text-Dark_Gray_LM_Input"> {e}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
