import "./game.css"
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
    const { unityProvider } = useUnityContext({
      loaderUrl: "Portfolio/Build/Webbuild.loader.js",
      dataUrl: "Portfolio/Build/Webbuild.data",
      frameworkUrl: "Portfolio/Build/Webbuild.framework.js",
      codeUrl: "Portfolio/Build/Webbuild.wasm",
    });

    return (
        
        <div className="unity-outer-container">
            <h2>Pixel Game Demo <span>C# & Unity</span></h2>
            <div className="unity-container">
                <Unity className="unity" unityProvider={unityProvider} height="960px" width="600" />
            </div>
        </div>
    );
  }

  export default Game