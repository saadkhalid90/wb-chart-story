import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useData } from "./useData";
import styles from "./css-modules/dataStoryComp.module.css";
import { drawGroupedBars, removeSVGContent } from "./drawGroupedBars";
import React from "react";

const chartMargins = { top: 50, bottom: 20, left: 50, right: 20 };

function DataStoryComp({ maxIndex, svgWidth, svgHeight }) {
  const captions = [
    <span>
      At ages 3–5, <b>girls</b> and <b>boys</b> are similar in their experiences
      of <b>multiple risks to on-track developmental outcomes</b> in Punjab
      province
    </span>,
    <span>
      For these children, the{" "}
      <b>likelihood of being developmentally on track</b> is inversely related
      to the <b>number of risk they face</b>
    </span>,
    <span>
      We do observe some{" "}
      <b>
        variation in the distribution of risks to on-track developmental
        outcomes
      </b>{" "}
      across <b>provinces</b>
    </span>,
    <span>
      The inverse relation between the{" "}
      <b>likelihood of children being developmentally on track</b> and the{" "}
      <b>risks they face</b> can also be seen for different provinces
    </span>,
  ];
  const [vizIndex, setVizIndex] = useState(1);
  const fade = useRef(true);
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
    //setFade(false);
    fade.current = true;
  }, [vizIndex]);

  useEffect(() => {
    console.log(fade.current);
  }, [fade.current]);

  useEffect(() => {
    if (data.gender && data.prov) {
      vizIndex === 1
        ? drawGroupedBars(
            svgRef.current,
            data.gender,
            chartMargins,
            ["Female", "Male"],
            "Number of Risk Factors",
            clickType === "forward" ? "draw" : "update",
            0.4
          )
        : vizIndex === 2
        ? drawGroupedBars(
            svgRef.current,
            data.gender,
            chartMargins,
            ["Female_DOT", "Male_DOT"],
            "Number of Risk Factors",
            clickType === "forward" ? "update" : "draw",
            0.4
          )
        : vizIndex === 3
        ? drawGroupedBars(
            svgRef.current,
            data.prov,
            chartMargins,
            ["Punjab", "Sindh", "KP", "Balochistan"],
            "Number of Risk Factors",
            clickType === "forward" ? "draw" : "update",
            0.3
          )
        : drawGroupedBars(
            svgRef.current,
            data.prov,
            chartMargins,
            ["Punjab_DOT", "Sindh_DOT", "KP_DOT", "Balochistan_DOT"],
            "Number of Risk Factors",
            "update",
            0.3
          );

      console.log("useeffect called!");
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

        <p
          className={`${styles.chart_desc} ${fade.current && styles.desc_fade}`}
          onAnimationEnd={() => (fade.current = false)}
        >
          {captions[vizIndex - 1]}
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
