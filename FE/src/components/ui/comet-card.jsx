import { useRef } from "react";

export default function CometCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow khi hover */}
      <div
        className="
          pointer-events-none
          absolute -inset-1
          rounded-[22px]
          bg-gradient-to-br
          from-emerald-400/25
          via-cyan-400/20
          to-blue-500/25
          blur-xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      {/* Card chính */}
      <div
        ref={cardRef}
        className="
          relative
          rounded-[20px]
          bg-white/80
          backdrop-blur-sm
          border border-black/10   /* 👈 border nhạt mặc định */
          shadow-sm
          transition-transform duration-300 ease-out
          will-change-transform
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Đẩy content ra trước để có chiều sâu */}
        <div
          className="relative"
          style={{ transform: "translateZ(40px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
