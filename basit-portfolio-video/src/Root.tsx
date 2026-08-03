import "./index.css";
import {Composition, Folder} from "remotion";
import {PortfolioReel} from "./PortfolioReel";
import {PlatformShowcase} from "./PlatformShowcase";
import {BrandReveal} from "./scenes/BrandReveal";
import {ContactScene} from "./scenes/ContactScene";
import {PositioningScene} from "./scenes/PositioningScene";
import {ProofScene} from "./scenes/ProofScene";
import {WorkScene} from "./scenes/WorkScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BasitPortfolioReel"
        component={PortfolioReel}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          email: "ba876943@gmail.com",
          phone: "+92 370 3168969",
        }}
      />
      <Composition
        id="BasitLinkedIn"
        component={PlatformShowcase}
        durationInFrames={540}
        fps={30}
        width={1080}
        height={1350}
        defaultProps={{format: "linkedin", email: "ba876943@gmail.com"}}
      />
      <Composition
        id="BasitX"
        component={PlatformShowcase}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{format: "x", email: "ba876943@gmail.com"}}
      />
      <Folder name="Basit-Portfolio-Reel-Scenes">
        <Composition id="SceneBrandReveal" component={BrandReveal} durationInFrames={100} fps={30} width={1080} height={1920} />
        <Composition id="ScenePositioning" component={PositioningScene} durationInFrames={100} fps={30} width={1080} height={1920} />
        <Composition id="SceneSelectedWork" component={WorkScene} durationInFrames={180} fps={30} width={1080} height={1920} />
        <Composition id="SceneProof" component={ProofScene} durationInFrames={100} fps={30} width={1080} height={1920} />
        <Composition
          id="SceneContact"
          component={ContactScene}
          durationInFrames={108}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{email: "ba876943@gmail.com", phone: "+92 370 3168969"}}
        />
      </Folder>
    </>
  );
};
