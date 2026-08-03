import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {manrope, prata} from "../fonts";
import {Texture} from "../components/Texture";

export const PositioningScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: "#16171A", color: "#F4F0E8", fontFamily: manrope, overflow: "hidden"}}>
      <Texture dark />
      <Interactive.Div
        name="Scene label"
        style={{position: "absolute", top: 96, left: 80, fontSize: 24, fontWeight: 700, letterSpacing: "0.12em", color: "#AAA9A3"}}
      >
        01 / WHAT I DO
      </Interactive.Div>
      <Interactive.Div
        name="Complex line"
        style={{
          position: "absolute",
          top: 235,
          left: 72,
          fontSize: 154,
          fontWeight: 800,
          lineHeight: 0.86,
          letterSpacing: "-0.065em",
          opacity: interpolate(frame, [0, 18], [0, 1], {extrapolateRight: "clamp"}),
          translate: interpolate(frame, [0, 24], ["-100px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        COMPLEX
      </Interactive.Div>
      <Interactive.Div
        name="Technology line"
        style={{
          position: "absolute",
          top: 390,
          left: 72,
          fontFamily: prata,
          fontSize: 135,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 0.9,
          letterSpacing: "-0.05em",
          color: "#FF5F4A",
          opacity: interpolate(frame, [8, 26], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [8, 30], ["90px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        technology
      </Interactive.Div>
      <div style={{position: "absolute", left: 80, right: 80, top: 650, height: 2, backgroundColor: "#3B3B37"}} />
      <Interactive.Div
        name="Positioning statement"
        style={{
          position: "absolute",
          top: 720,
          left: 80,
          right: 80,
          fontSize: 83,
          fontWeight: 600,
          lineHeight: 1.03,
          letterSpacing: "-0.045em",
          opacity: interpolate(frame, [20, 42], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [20, 45], ["0px 70px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        I make it feel <span style={{fontFamily: prata, fontStyle: "italic", color: "#D8FF5B"}}>clear, useful,</span><br />and worth caring about.
      </Interactive.Div>
      <div style={{position: "absolute", left: 80, right: 80, bottom: 116, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "2px solid #F4F0E8"}}>
        {[
          ["01", "AI SYSTEMS"],
          ["02", "PRODUCT BUILD"],
          ["03", "VISUAL CLARITY"],
        ].map(([index, label], itemIndex) => (
          <Interactive.Div
            name={label}
            key={label}
            style={{
              padding: "32px 18px 0 0",
              borderRight: itemIndex < 2 ? "1px solid #3B3B37" : "none",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.06em",
              opacity: interpolate(frame, [38 + itemIndex * 7, 56 + itemIndex * 7], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <span style={{display: "block", color: "#FF5F4A", fontSize: 20, marginBottom: 20}}>{index}</span>
            {label}
          </Interactive.Div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
