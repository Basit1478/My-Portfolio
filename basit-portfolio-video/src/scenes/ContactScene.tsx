import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame} from "remotion";
import {manrope, prata} from "../fonts";
import {Texture} from "../components/Texture";

export type ContactSceneProps = {
  email: string;
  phone: string;
};

export const ContactScene: React.FC<ContactSceneProps> = ({email, phone}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{backgroundColor: "#FF5F4A", color: "#16171A", fontFamily: manrope, overflow: "hidden"}}>
      <Texture />
      <Interactive.Div
        name="Contact label"
        style={{position: "absolute", top: 94, left: 80, fontSize: 24, fontWeight: 800, letterSpacing: "0.12em"}}
      >
        04 / LET'S BUILD
      </Interactive.Div>
      <Interactive.Div
        name="Contact headline"
        style={{
          position: "absolute",
          top: 250,
          left: 72,
          right: 72,
          fontSize: 136,
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: "-0.065em",
          opacity: interpolate(frame, [0, 19], [0, 1], {extrapolateRight: "clamp"}),
          translate: interpolate(frame, [0, 25], ["0px 90px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        BRING THE<br />HARD PART.
      </Interactive.Div>
      <Interactive.Div
        name="Contact promise"
        style={{
          position: "absolute",
          top: 610,
          left: 76,
          right: 76,
          fontFamily: prata,
          fontStyle: "italic",
          fontSize: 110,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          opacity: interpolate(frame, [18, 38], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [18, 42], ["80px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        I'll bring attention.
      </Interactive.Div>
      <div style={{position: "absolute", left: 80, right: 80, top: 910, height: 2, backgroundColor: "#16171A"}} />
      <Interactive.Div
        name="Email call to action"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1010,
          minHeight: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 38px",
          backgroundColor: "#16171A",
          color: "#F4F0E8",
          fontSize: 44,
          fontWeight: 700,
          opacity: interpolate(frame, [35, 53], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          scale: interpolate(frame, [35, 56], [0.94, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({damping: 200}),
            output: "perceptual-scale",
          }),
        }}
      >
        <span>{email}</span><span style={{color: "#D8FF5B", fontSize: 55}}>↗</span>
      </Interactive.Div>
      <Interactive.Div
        name="Contact details"
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1215,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          fontSize: 36,
          fontWeight: 700,
          lineHeight: 1.45,
          opacity: interpolate(frame, [48, 68], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
        }}
      >
        <div><span style={{display: "block", fontSize: 18, letterSpacing: "0.12em", marginBottom: 18}}>WHATSAPP</span>{phone}</div>
        <div><span style={{display: "block", fontSize: 18, letterSpacing: "0.12em", marginBottom: 18}}>LOCATION</span>KARACHI / PAKISTAN</div>
      </Interactive.Div>
      <Interactive.Div
        name="Final wordmark"
        style={{
          position: "absolute",
          left: 68,
          bottom: 104,
          fontSize: 168,
          fontWeight: 800,
          letterSpacing: "-0.075em",
          lineHeight: 0.75,
          opacity: interpolate(frame, [60, 82], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
        }}
      >
        BASIT ALI<span style={{fontFamily: prata, fontWeight: 400}}>.</span>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
