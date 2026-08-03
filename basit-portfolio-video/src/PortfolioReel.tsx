import {Audio} from "@remotion/media";
import {TransitionSeries, linearTiming} from "@remotion/transitions";
import {fade} from "@remotion/transitions/fade";
import {slide} from "@remotion/transitions/slide";
import {interpolate, staticFile} from "remotion";
import {BrandReveal} from "./scenes/BrandReveal";
import {ContactScene} from "./scenes/ContactScene";
import {PositioningScene} from "./scenes/PositioningScene";
import {ProofScene} from "./scenes/ProofScene";
import {WorkScene} from "./scenes/WorkScene";

export type PortfolioReelProps = {
  email: string;
  phone: string;
};

export const PortfolioReel: React.FC<PortfolioReelProps> = ({email, phone}) => {
  return (
    <>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={100} name="Brand reveal">
          <BrandReveal />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: "from-right"})}
          timing={linearTiming({durationInFrames: 12})}
        />
        <TransitionSeries.Sequence durationInFrames={100} name="Positioning">
          <PositioningScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
        <TransitionSeries.Sequence durationInFrames={180} name="Selected work">
          <WorkScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: "from-bottom"})}
          timing={linearTiming({durationInFrames: 12})}
        />
        <TransitionSeries.Sequence durationInFrames={100} name="Proof">
          <ProofScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
        <TransitionSeries.Sequence durationInFrames={108} name="Contact">
          <ContactScene email={email} phone={phone} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      <Audio
        src={staticFile("audio/editorial-pulse.wav")}
        volume={(frame) =>
          interpolate(frame, [0, 24, 510, 539], [0, 0.42, 0.42, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        }
      />
      <Audio src={staticFile("audio/whoosh.wav")} from={82} volume={0.32} />
      <Audio src={staticFile("audio/whoosh.wav")} from={176} volume={0.25} />
      <Audio src={staticFile("audio/shutter.wav")} from={216} volume={0.22} />
      <Audio src={staticFile("audio/shutter.wav")} from={292} volume={0.18} />
      <Audio src={staticFile("audio/whoosh.wav")} from={354} volume={0.3} />
      <Audio src={staticFile("audio/ding.wav")} from={454} volume={0.22} />
    </>
  );
};
