import { cardData } from "../data/cardData";

function Cards() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col md:flex-col lg:flex-row items-center sm:flex-row gap-5 px-10">
        <div className="cardcontainer w-full md:w-full sm:w-1/2 h-[50vh]">
          <div
            className="card relative w-full h-full flex items-center justify-center rounded-xl"
            style={{ backgroundColor: cardData[0].bgColor }}
          >
            <img src={cardData[0].imgSrc} className="w-36" />
            <button className="absolute left-0 sm:left-10 bottom-5 scale-90 text-[3vw] sm:text-[1.3vw] sm:bottom-10 border-[1px] py-1 px-5 border-[#81b05a] text-[#ceeb67] rounded-full uppercase">
              {cardData[0].buttonText}
            </button>
          </div>
        </div>
        <div className="cardcontainer flex flex-col md:flex-row gap-5 w-full md:w-full sm:w-1/2 h-[100vh] sm:h-[50vh]">
          {cardData.slice(1).map((card, index) => (
            <div
              key={index}
              className="card relative md:w-1/2 h-full flex flex-col items-center justify-center rounded-xl"
              style={{ backgroundColor: card.bgColor }}
            >
              <img src={card.imgSrc} className="w-28 md:w-36" />
              <button className="absolute left-0 sm:left-5 bottom-5 sm:bottom-10 border-[1px] scale-90 text-[3vw] md:text-[2vw] lg:text-[1.2vw] m py-1 px-5 border-[#ededed] text-[#ededed] rounded-full uppercase">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
