import ParallaxMousemove from "react-parallax-mousemove";

export default function Parallax() {
  const style = {
    outter: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },

    bgLayerStyle: {
      position: "absolute",
      height: "100%",
    },
  };
  return (
    <div>
      <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
        <ParallaxMousemove.Layer
          layerStyle={style.bgLayerStyle}
          config={{
            xFactor: 0.2,
            yFactor: 0.2,
            springSettings: {
              stiffness: 50,
              damping: 30,
            },
          }}
        >
          <img src="/Group 23.svg" alt="Parallax Layer"></img>
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
    </div>
  );
}
