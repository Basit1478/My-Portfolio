import {Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {manrope} from "../fonts";

export const BrowserCard: React.FC<{
  image: string;
  title: string;
  index: number;
  accent: string;
  width?: number;
}> = ({image, title, index, accent, width = 720}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  return (
    <div
      style={{
        width,
        height: 470,
        borderRadius: 26,
        overflow: "hidden",
        backgroundColor: "#F4F0E8",
        boxShadow: "0 34px 80px rgba(0,0,0,0.28)",
        opacity: interpolate(frame, [index * 11, index * 11 + 18], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: interpolate(
          frame,
          [index * 11, index * 11 + 22, durationInFrames],
          [index % 2 === 0 ? "-90px 90px" : "90px 90px", "0px 0px", "0px -42px"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
        rotate: index % 2 === 0 ? "-2.5deg" : "2.5deg",
        scale: interpolate(frame, [0, durationInFrames], [1, 1.035], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <div
        style={{
          height: 58,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 22px",
          borderBottom: "1px solid #D8D3CA",
          backgroundColor: "#EEEAE2",
        }}
      >
        {["#FF5F4A", "#F3C44E", "#5CCB79"].map((color) => (
          <span key={color} style={{width: 11, height: 11, borderRadius: "50%", backgroundColor: color}} />
        ))}
        <div
          style={{
            marginLeft: 14,
            padding: "7px 16px",
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            color: "#6B6862",
            fontFamily: manrope,
            fontSize: 17,
            flex: 1,
          }}
        >
          {title.toLowerCase().replace(/ /g, "-")}.live
        </div>
      </div>
      <div style={{position: "relative", height: 412, overflow: "hidden", backgroundColor: "#17181C"}}>
        <Img
          name={`${title} live screenshot`}
          src={staticFile(image)}
          style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center"}}
        />
        <div
          style={{
            position: "absolute",
            left: 22,
            bottom: 20,
            padding: "12px 17px",
            backgroundColor: accent,
            color: "#16171A",
            fontFamily: manrope,
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {title} · Live
        </div>
      </div>
    </div>
  );
};
