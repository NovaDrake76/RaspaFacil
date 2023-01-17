import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Scratch = ({ keys, setKeys }) => {
  const [flippedHistory, setFlippedHistory] = useState([]);
  const [clickedId, setClickedId] = useState(null);
  const [endGame, setEndGame] = useState(false);

  const notifyKey = () =>
    toast("🔑 Você achou uma Chave da Sorte!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyPrize = () =>
    toast("💰 Você ganhou!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const scratchs = [
    {
      id: 1,
      name: "car",
      image: "https://i.imgur.com/2BxR4CU.png",
    },

    {
      id: 5,
      name: "money",
      image: "https://i.imgur.com/Yh3pAmH.png",
    },
    {
      id: 13,
      name: "Playstation 5",
      image: "https://i.imgur.com/4t4YqVf.png",
    },
    {
      id: 6,
      name: "money",
      image: "https://i.imgur.com/Yh3pAmH.png",
    },
    {
      id: 3,
      name: "car",
      image: "https://i.imgur.com/2BxR4CU.png",
    },
    {
      id: 7,
      name: "money",
      image: "https://i.imgur.com/Yh3pAmH.png",
    },
    {
      id: 8,
      name: "tv",
      image: "https://i.imgur.com/Rwinctr.png",
    },
    {
      id: 15,
      name: "Nada",
      image: "https://i.imgur.com/GhMs7Qd.pngg",
    },
    {
      id: 4,
      name: "key",
      image: "https://i.imgur.com/BIMoEOV.jpg",
    },
    {
      id: 9,
      name: "tv",
      image: "https://i.imgur.com/Rwinctr.png",
    },
    {
      id: 2,
      name: "car",
      image: "https://i.imgur.com/2BxR4CU.png",
    },
    {
      id: 10,
      name: "tv",
      image: "https://i.imgur.com/Rwinctr.png",
    },

    {
      id: 12,
      name: "Playstation 5",
      image: "https://i.imgur.com/4t4YqVf.png",
    },

    {
      id: 14,
      name: "Nada",
      image: "https://i.imgur.com/GhMs7Qd.png",
    },
    {
      id: 11,
      name: "Playstation 5",
      image: "https://i.imgur.com/4t4YqVf.png",
    },

    {
      id: 16,
      name: "Nada",
      image: "https://i.imgur.com/GhMs7Qd.png",
    },
  ];

  useEffect(() => {
    if (flippedHistory.includes(4)) {
      notifyKey();
      setEndGame(true);
      setKeys(keys + 1);
      setTimeout(() => {
        setFlippedHistory([]);
        setClickedId(null);
        setEndGame(false);
      }, 2000);
    }

    if (flippedHistory.length === 3) {
      setEndGame(true);
      const [first, second, third] = flippedHistory;
      const firstScratch = scratchs.find((scratch) => scratch.id === first);
      const secondScratch = scratchs.find((scratch) => scratch.id === second);
      const thirdScratch = scratchs.find((scratch) => scratch.id === third);

      if (
        firstScratch.name === secondScratch.name &&
        secondScratch.name === thirdScratch.name
      ) {
        setTimeout(() => {
          notifyPrize();

          setFlippedHistory([]);
        }, 1000);
      } else {
        setTimeout(() => {
          setFlippedHistory([]);
        }, 1000);
      }

      setTimeout(() => {
        setClickedId(null);
        setEndGame(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flippedHistory]);

  return (
    <div className="w-[80vw] h-[80vh] flex bg-[#2B62AA] p-4 ">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col items-center w-[40%] gap-4">
        <div>
          <h1 className="text-white text-2xl text-center">
            Raspadinhas da Sorte
          </h1>
          <p className="text-white text-sm text-center">
            Ache 3 iguais e ganhe o prêmio! Se você achar a{" "}
            <b>Chave da Sorte</b>, você pode acumular chaves e ganhar uma
            entrada no <b>Sorteio Especial</b>!
          </p>
        </div>
        <img src="https://i.imgur.com/pjFndeY.png" alt="" className="w-full" />
      </div>
      <div className="flex gap-2 w-1/2 flex-wrap ml-24">
        {scratchs.map((scratch) => (
          <div
            key={scratch.name + scratch.id}
            className={`w-28 h-28  rounded transition-all ease-in-out duration-200 ${
              flippedHistory.includes(scratch.id)
                ? `bg-white`
                : `bg-[#FCA839] ${endGame === false && "cursor-pointer"}`
            }`}
            style={{
              transform: `rotateY(${
                clickedId === scratch.id || flippedHistory.includes(scratch.id)
                  ? 180
                  : 0
              }deg)`,
              backgroundImage:
                clickedId === scratch.id || flippedHistory.includes(scratch.id)
                  ? `url(${scratch.image})`
                  : "none",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={
              flippedHistory.includes(scratch.id) || endGame
                ? null
                : () => {
                    setFlippedHistory([...flippedHistory, scratch.id]);
                    setClickedId(scratch.id);
                  }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Scratch;
