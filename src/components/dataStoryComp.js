import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useData } from "./useData";
import styles from "./css-modules/dataStoryComp.module.css";
import { drawGroupedBars, removeSVGContent } from "./drawGroupedBars";

function DataStoryComp({ maxIndex, svgWidth, svgHeight }) {
  const [vizIndex, setVizIndex] = useState(1);
  const [clickType, setClickType] = useState("forward");
  const svgRef = useRef();
  const data = useData();
  const incrementIndex = () => {
    setClickType("forward");
    if (vizIndex < maxIndex) {
      return setVizIndex(vizIndex + 1);
    } else {
      return vizIndex;
    }
  };

  const decrementIndex = () => {
    setClickType("backward");
    if (vizIndex > 1) {
      return setVizIndex(vizIndex - 1);
    } else {
      return vizIndex;
    }
  };

  useEffect(() => {
    if (data.gender && data.prov) {
      vizIndex === 1
        ? drawGroupedBars(
            svgRef.current,
            data.gender,
            { top: 50, bottom: 20, left: 50, right: 20 },
            ["Female", "Male"],
            "Number of Risk Factors",
            clickType === "forward" ? "draw" : "update",
            0.4
          )
        : vizIndex === 2
        ? drawGroupedBars(
            svgRef.current,
            data.gender,
            { top: 50, bottom: 20, left: 50, right: 20 },
            ["Female_DOT", "Male_DOT"],
            "Number of Risk Factors",
            clickType === "forward" ? "update" : "draw",
            0.4
          )
        : vizIndex === 3
        ? drawGroupedBars(
            svgRef.current,
            data.prov,
            { top: 50, bottom: 20, left: 50, right: 20 },
            ["Punjab", "Sindh", "KP", "Balochistan"],
            "Number of Risk Factors",
            clickType === "forward" ? "draw" : "update",
            0.3
          )
        : drawGroupedBars(
            svgRef.current,
            data.prov,
            { top: 50, bottom: 20, left: 50, right: 20 },
            ["Punjab_DOT", "Sindh_DOT", "KP_DOT", "Balochistan_DOT"],
            "Number of Risk Factors",
            "update",
            0.3
          );
          
        console.log('useeffect called!')
        console.log(data);
        console.log(vizIndex);
        console.log(clickType);
    }
  }, [data, vizIndex, clickType]);

  return (
    <div className={styles.storyContainer}>
      <div className={styles.controlContainer}>
        <div className={styles.chevAndStateContainer}>
          <div className={styles.chevronContainer}>
            <div
              className={`${styles.leftChevContainer} ${styles.chevContainer}`}
            >
              <IoIosArrowDropleftCircle onClick={(e) => decrementIndex()} />
            </div>
            <div
              className={`${styles.rightChevContainer} ${styles.chevContainer}`}
            >
              <IoIosArrowDroprightCircle onClick={(e) => incrementIndex()} />
            </div>
          </div>
          <p className={styles.stateShow}>{`${vizIndex}/${maxIndex}`}</p>
        </div>

        <p className={styles.chart_desc}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation (${vizIndex})`}
        </p>
      </div>
      <div className={styles.chart_contain} style={{ width: "100%" }}>
        <svg
          className={styles.chart_svg}
          ref={svgRef}
          id="chart_svg_id1"
          width="100%"
          overflow="visible"
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        />
      </div>
    </div>
  );
}

export default DataStoryComp;
