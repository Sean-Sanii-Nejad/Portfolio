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
        
        <div id="demo"className="unity-outer-container">
            <div className="demo-title">
                <h1>Demo</h1>
            </div>
            
            <h2>Pixel Game <span>C# & Unity</span></h2>
            <div className="unity-container">
                <Unity className="unity" unityProvider={unityProvider} height="960px" width="600" />
            </div> 
        </div>
    );
  }

  export default Game