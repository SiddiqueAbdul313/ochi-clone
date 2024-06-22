import { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [pupilPosition, setPupilPosition] = useState({
    leftPupil: { x: 0, y: 0 },
    rightPupil: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      const maxPupilMove = 1; // Max distance the black pupil can move
      const leftEyeCenterX = window.innerWidth / 2 - 100;
      const rightEyeCenterX = window.innerWidth / 2 + 100;
      const eyeCenterY = window.innerHeight / 2;

      const movePupil = (eyeCenterX) => {
        const eyeDeltaX = mouseX - eyeCenterX;
        const eyeDeltaY = mouseY - eyeCenterY;
        const eyeDistance = Math.sqrt(
          eyeDeltaX * eyeDeltaX + eyeDeltaY * eyeDeltaY
        );
        const eyeAngle = Math.atan2(eyeDeltaY, eyeDeltaX);
        const pupilX = Math.cos(eyeAngle) * Math.min(eyeDistance, maxPupilMove);
        const pupilY = Math.sin(eyeAngle) * Math.min(eyeDistance, maxPupilMove);

        return { x: pupilX, y: pupilY };
      };

      setPupilPosition({
        leftPupil: movePupil(leftEyeCenterX),
        rightPupil: movePupil(rightEyeCenterX),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="flex gap-[10vw] absolute top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div
              className="relative flex items-center justify-center w-[60%] h-[60%] bg-zinc-900 rounded-full transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${pupilPosition.leftPupil.x}vw, ${pupilPosition.leftPupil.y}vh)`,
              }}
            >
               <h2 className="uppercase font-[neue-montreal-light] text-[2.5vw] md:text-2xl tracking-wider font-extrabold">
                play
              </h2>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 rotate-90 transition-transform duration-200 ease-out"
              >
                <div className="w-3 h-3 md:w-6 md:h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div
              className="relative flex items-center justify-center w-[60%] h-[60%] bg-zinc-900 rounded-full transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${pupilPosition.rightPupil.x}vw, ${pupilPosition.rightPupil.y}vh)`,
              }}
            >
              <h2 className="uppercase font-[neue-montreal-light] text-[2.5vw] md:text-2xl tracking-wider font-extrabold">
                play
              </h2>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 rotate-90 transition-transform duration-200 ease-out"
              >
                <div className="w-3 h-3 md:w-6 md:h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
