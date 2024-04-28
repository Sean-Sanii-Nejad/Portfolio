import "./game.css"
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
    const { unityProvider } = useUnityContext({
      loaderUrl: "Build/Webbuild.loader.js",
      dataUrl: "Build/Webbuild.data",
      frameworkUrl: "Build/Webbuild.framework.js",
      codeUrl: "Build/Webbuild.wasm",
    });

    return (
        <div className="unity-outer-container">
            <h2>Pixel Game Demo <span>C# & Unity</span></h2>
            <div className="unity-container">
                <Unity className="unity" unityProvider={unityProvider} />
            </div>
        </div>
    );
  }

  export default Game