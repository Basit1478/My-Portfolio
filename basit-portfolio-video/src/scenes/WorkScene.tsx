import {AbsoluteFill, Interactive, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {BrowserCard} from "../components/BrowserCard";
import {manrope, prata} from "../fonts";
import {Texture} from "../components/Texture";

export const WorkScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#6477FF", color: "#FFFFFF", fontFamily: manrope, overflow: "hidden"}}>
      <Texture dark />
      <Interactive.Div
        name="Work label"
        style={{position: "absolute", top: 88, left: 80, fontSize: 24, fontWeight: 700, letterSpacing: "0.12em", zIndex: 6}}
      >
        02 / SELECTED WORK
      </Interactive.Div>
      <Interactive.Div
        name="Work headline"
        style={{
          position: "absolute",
          top: 150,
          left: 76,
          zIndex: 6,
          fontSize: 112,
          fontWeight: 800,
          lineHeight: 0.91,
          letterSpacing: "-0.06em",
          opacity: interpolate(frame, [0, 18], [0, 1], {extrapolateRight: "clamp"}),
        }}
      >
        LIVE WORK,<br /><span style={{fontFamily: prata, fontStyle: "italic", fontWeight: 400, color: "#D8FF5B"}}>shown as built.</span>
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          top: 480,
          left: -70,
          width: 1220,
          height: 1510,
          translate: interpolate(frame, [0, durationInFrames], ["0px 40px", "0px -250px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{position: "absolute", left: 10, top: 40}}>
          <BrowserCard image="projects/acmeem.png" title="Acmeem" index={0} accent="#D8FF5B" width={740} />
        </div>
        <div style={{position: "absolute", right: -20, top: 370}}>
          <BrowserCard image="projects/ali-rent-a-car.png" title="Ali Rent a Car" index={2} accent="#FF5F4A" width={710} />
        </div>
        <div style={{position: "absolute", left: -10, top: 760}}>
          <BrowserCard image="projects/infology.png" title="Infology" index={4} accent="#D8FF5B" width={720} />
        </div>
        <div style={{position: "absolute", right: 0, top: 1100}}>
          <BrowserCard image="projects/prd-generator.webp" title="PRD Generator" index={6} accent="#FF5F4A" width={700} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
