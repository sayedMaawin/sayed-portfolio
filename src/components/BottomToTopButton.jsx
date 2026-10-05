import { useEffect, useState } from "react";
import { MoveUp } from "lucide-react";

const BottomToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className="rounded-full bg-teal-600 text-white p-3 cursor-pointer hover:bg-teal-900 transition duration-300"
        aria-label="Scroll to top"
      >
        <MoveUp />
      </button>
    </div>
  );
};

export default BottomToTopButton;