import {Video} from "@remotion/media";
import {AbsoluteFill, Easing, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {Texture} from "./components/Texture";
import {manrope, prata} from "./fonts";

export type PlatformShowcaseProps = {
  format: "linkedin" | "x";
  email: string;
};

export const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({format, email}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const linkedin = format === "linkedin";

  return (
    <AbsoluteFill style={{backgroundColor: "#0D0E12", color: "#F4F0E8", fontFamily: manrope, overflow: "hidden"}}>
      <Texture dark />
      <div
        style={{
          position: "absolute",
          width: linkedin ? 610 : 780,
          height: linkedin ? 610 : 780,
          borderRadius: "50%",
          right: linkedin ? -165 : -60,
          top: linkedin ? 380 : 150,
          backgroundColor: "#6477FF",
          opacity: 0.3,
          scale: interpolate(frame, [0, durationInFrames], [0.92, 1.08], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      />

      <Interactive.Div
        name="Platform header"
        style={{
          position: "absolute",
          top: linkedin ? 50 : 44,
          left: linkedin ? 50 : 84,
          width: linkedin ? 325 : 1070,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid #F4F0E8",
          paddingTop: linkedin ? 15 : 17,
          fontSize: linkedin ? 18 : 20,
          fontWeight: 800,
          letterSpacing: "0.1em",
        }}
      >
        <span>BASIT ALI</span>
        <span style={{display: "flex", alignItems: "center", gap: 10, color: "#AAA9A3"}}>
          <i style={{display: "block", width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F4A"}} />
          {linkedin ? "LINKEDIN CUT" : "X / TWITTER CUT"}
        </span>
      </Interactive.Div>

      <div
        style={{
          position: "absolute",
          left: linkedin ? 50 : 84,
          top: linkedin ? 168 : 154,
          width: linkedin ? 325 : 1080,
          opacity: interpolate(frame, [0, 22, 390, 420], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 26], [linkedin ? "-50px 0px" : "-70px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Showcase headline"
          style={{
            fontSize: linkedin ? 70 : 112,
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: "-0.065em",
          }}
        >
          BUILDING<br />AI WITH<br />ATTENTION<span style={{color: "#FF5F4A"}}>.</span>
        </Interactive.Div>
        <Interactive.Div
          name="Showcase descriptor"
          style={{
            marginTop: linkedin ? 30 : 38,
            fontFamily: prata,
            fontSize: linkedin ? 42 : 62,
            fontStyle: "italic",
            lineHeight: 1.05,
            color: "#D8FF5B",
          }}
        >
          Live work,<br />shown as built.
        </Interactive.Div>

        <div
          style={{
            marginTop: linkedin ? 44 : 58,
            display: "grid",
            gridTemplateColumns: linkedin ? "1fr" : "repeat(3, 1fr)",
            borderTop: "1px solid #3B3B37",
          }}
        >
          {[
            ["20", "LIVE BUILDS"],
            ["03", "CORE DISCIPLINES"],
            ["PK", "KARACHI BASED"],
          ].map(([value, label], index) => (
            <Interactive.Div
              name={label}
              key={label}
              style={{
                padding: linkedin ? "20px 0" : "22px 28px 0 0",
                borderBottom: linkedin ? "1px solid #3B3B37" : "none",
                borderRight: !linkedin && index < 2 ? "1px solid #3B3B37" : "none",
                paddingLeft: !linkedin && index > 0 ? 28 : 0,
              }}
            >
              <strong style={{display: "block", color: "#FF5F4A", fontSize: linkedin ? 31 : 42, lineHeight: 1}}>{value}</strong>
              <span style={{display: "block", marginTop: 9, color: "#AAA9A3", fontSize: linkedin ? 14 : 17, fontWeight: 700, letterSpacing: "0.08em"}}>{label}</span>
            </Interactive.Div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: linkedin ? 50 : 84,
          top: linkedin ? 230 : 190,
          width: linkedin ? 325 : 1080,
          opacity: interpolate(frame, [405, 438], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [405, 442], ["0px 70px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Closing headline"
          style={{fontSize: linkedin ? 67 : 108, fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.06em"}}
        >
          AVAILABLE<br />FOR SELECT<br />PROJECTS<span style={{color: "#FF5F4A"}}>.</span>
        </Interactive.Div>
        <Interactive.Div
          name="Closing line"
          style={{marginTop: linkedin ? 30 : 38, fontFamily: prata, fontSize: linkedin ? 40 : 60, fontStyle: "italic", color: "#D8FF5B"}}
        >
          Let's make something useful.
        </Interactive.Div>
        <Interactive.Div
          name="Platform email"
          style={{
            marginTop: linkedin ? 42 : 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: linkedin ? 82 : 96,
            padding: linkedin ? "0 20px" : "0 28px",
            backgroundColor: "#F4F0E8",
            color: "#16171A",
            fontSize: linkedin ? 23 : 38,
            fontWeight: 800,
          }}
        >
          <span>{email}</span><span style={{color: "#FF5F4A", fontSize: linkedin ? 38 : 52}}>↗</span>
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          left: linkedin ? 405 : 1304,
          top: linkedin ? 82 : 70,
          width: linkedin ? 638 : 518,
          height: linkedin ? 1134 : 920,
          padding: linkedin ? 10 : 9,
          borderRadius: linkedin ? 38 : 30,
          backgroundColor: "#F4F0E8",
          boxShadow: "0 45px 100px rgba(0,0,0,0.48)",
          overflow: "hidden",
          opacity: interpolate(frame, [4, 25], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}),
          translate: interpolate(frame, [4, 30], [linkedin ? "70px 0px" : "110px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          rotate: interpolate(frame, [0, durationInFrames], [linkedin ? "1.2deg" : "1deg", linkedin ? "-0.8deg" : "-0.5deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Video
          name="Vertical portfolio reel"
          src={staticFile("media/basit-ali-portfolio-reel.mp4")}
          style={{width: "100%", height: "100%", borderRadius: linkedin ? 29 : 22}}
          objectFit="cover"
          volume={1}
        />
      </div>

      <div style={{position: "absolute", left: linkedin ? 50 : 84, right: linkedin ? 50 : 84, bottom: linkedin ? 46 : 34, height: 5, backgroundColor: "#303136"}}>
        <div
          style={{
            height: "100%",
            width: `${interpolate(frame, [0, durationInFrames - 1], [0, 100], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}%`,
            backgroundColor: "#FF5F4A",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
