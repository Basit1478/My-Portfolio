import {AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame} from "remotion";
import {manrope, prata} from "../fonts";
import {Texture} from "../components/Texture";

export const ProofScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: "#D8FF5B", color: "#16171A", fontFamily: manrope, overflow: "hidden"}}>
      <Texture />
      <Interactive.Div
        name="Proof label"
        style={{position: "absolute", top: 92, left: 80, fontSize: 24, fontWeight: 800, letterSpacing: "0.12em"}}
      >
        03 / THE PROOF
      </Interactive.Div>
      <Interactive.Div
        name="Project count"
        style={{
          position: "absolute",
          top: 170,
          left: 64,
          fontSize: 330,
          fontWeight: 800,
          lineHeight: 0.78,
          letterSpacing: "-0.085em",
          opacity: interpolate(frame, [0, 17], [0, 1], {extrapolateRight: "clamp"}),
          scale: interpolate(frame, [0, 23], [0.82, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({damping: 200}),
            output: "perceptual-scale",
          }),
        }}
      >
        20
      </Interactive.Div>
      <Interactive.Div
        name="Live builds"
        style={{
          position: "absolute",
          top: 460,
          left: 80,
          fontFamily: prata,
          fontSize: 112,
          fontStyle: "italic",
          lineHeight: 0.95,
          letterSpacing: "-0.055em",
          opacity: interpolate(frame, [12, 30], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
        }}
      >
        live builds.
      </Interactive.Div>
      <div style={{position: "absolute", top: 650, left: 80, right: 80, display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "2px solid #16171A"}}>
        {["BUSINESS WEBSITES", "AI TOOLS", "UTILITIES", "INTERACTIVE GAMES"].map((label, index) => (
          <Interactive.Div
            name={label}
            key={label}
            style={{
              padding: "30px 20px 30px 0",
              borderBottom: "1px solid rgba(22,23,26,0.45)",
              borderRight: index % 2 === 0 ? "1px solid rgba(22,23,26,0.45)" : "none",
              paddingLeft: index % 2 === 1 ? 28 : 0,
              fontSize: 31,
              fontWeight: 800,
              letterSpacing: "0.03em",
              opacity: interpolate(frame, [24 + index * 6, 42 + index * 6], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <span style={{color: "#FF5F4A", marginRight: 18}}>{String(index + 1).padStart(2, "0")}</span>{label}
          </Interactive.Div>
        ))}
      </div>
      <div style={{position: "absolute", left: 80, right: 80, bottom: 250, height: 410}}>
        {[
          ["projects/avion.webp", -6, 0, "AVION"],
          ["projects/personal-library.webp", 4, 255, "LIBRARY"],
          ["projects/secure-encryption.webp", -3, 510, "SECURE DATA"],
        ].map(([src, rotation, x, label], index) => (
          <div
            key={String(src)}
            style={{
              position: "absolute",
              left: Number(x),
              top: index === 1 ? 34 : 0,
              width: 430,
              height: 290,
              overflow: "hidden",
              border: "10px solid #F4F0E8",
              backgroundColor: "#16171A",
              rotate: `${rotation}deg`,
              boxShadow: "0 22px 50px rgba(22,23,26,0.18)",
              opacity: interpolate(frame, [42 + index * 8, 60 + index * 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [42 + index * 8, 64 + index * 8], ["0px 70px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            <Img src={staticFile(String(src))} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top"}} />
            <span style={{position: "absolute", left: 12, bottom: 10, padding: "7px 10px", backgroundColor: "#16171A", color: "#FFFFFF", fontSize: 14, fontWeight: 700}}>{label}</span>
          </div>
        ))}
      </div>
      <Interactive.Div
        name="Proof footer"
        style={{position: "absolute", left: 80, bottom: 92, right: 80, display: "flex", justifyContent: "space-between", fontSize: 25, fontWeight: 700}}
      >
        <span>EVERY PROJECT.</span><span>LIVE + CLICKABLE.</span>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
