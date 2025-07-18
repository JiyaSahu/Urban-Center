import { useRef } from "react";
import "./SpotlightCard.css"; // Make sure this CSS file exists

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);

  <div className="p-4">
        <SpotlightCard
          className="max-w-md mx-auto text-center"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h1 className="text-3xl font-bold mb-2">Spotlight Effect Card</h1>
          <p>This card uses a spotlight hover animation!</p>
        </SpotlightCard>
      </div>
  const handleMouseMove = (e) => {
    const div = divRef.current;
    const { left, top, width, height } = div.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    div.style.setProperty("--spotlight-x", `${x}px`);
    div.style.setProperty("--spotlight-y", `${y}px`);
    div.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
