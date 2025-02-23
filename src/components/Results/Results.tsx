import data from "../../data.json";

function Results() {
  return (
    <section>
      <ul className="flex flex-col gap-4">
        {data.map(({ category, icon, score, textColor, bgColor }, index) => {
          return (
            <li
              className={`flex flex-row justify-between ${bgColor} rounded-md py-4 px-3 md:py-3`}
              key={index}
            >
              <div
                className={`flex flex-row gap-2 items-center justify-center`}
              >
                <img src={icon} alt={category} />
                <span className={`font-bold ${textColor}`}>{category}</span>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <span className="text-darkGrayBlue font-bold">{score}</span>
                <span className="flex flex-row gap-1 text-slate-400">
                  <span>/</span>100
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Results;
