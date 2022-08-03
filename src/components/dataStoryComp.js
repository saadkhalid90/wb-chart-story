import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useData } from "./useData";
import styles from "./css-modules/dataStoryComp.module.css";
import { drawGroupedBars, removeSVGContent } from "./drawGroupedBars";
import { drawUpset } from "./upset";
import React from "react";
import { sum } from "d3";

import { upsetData1, upsetData2, upsetData3, upsetData4 } from "./VennData";

const riskFactorsDescP = (
  <p>
    <b>Note:</b> Risk factors include being stunted, having a mother with less than
    primary education, not being enrolled in early childhood education, being in
    the poorest wealth quintile, living in a rural area, having a functional
    disability, and not experiencing adequate stimulation at home (engaged in
    less than four stimulating activities with any household caregiver over
    three days).
  </p>
);

const upsetDescP = (
  <p>
    <b>Note:</b> The vertical bars show 20 most important combinations of risks
  </p>
);

const footerArr = [
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Survey in Punjab.
    </p>
    {riskFactorsDescP}
  </div>,
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Survey in Punjab.
    </p>
    {riskFactorsDescP}
  </div>,
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Surveys in Punjab, Sindh, Khyber Pakhtunkhwa and
      Balochistan
    </p>
    {riskFactorsDescP}
  </div>,
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Surveys in Punjab, Sindh, Khyber Pakhtunkhwa and
      Balochistan
    </p>
    {riskFactorsDescP}
  </div>,
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Survey in Punjab
    </p>
    {upsetDescP}
  </div>,
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Survey in Sindh
    </p>
    {upsetDescP}
  </div>,
  <div>
    <p>
      <b>Source:</b> World Bank staff calculations using data from the Multiple
      Indicator Cluster Survey in Khyber Pakhtunkhwa
    </p>
    {upsetDescP}
  </div>,
];

const chartMargins = { top: 120, bottom: 70, left: 50, right: 20 };

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
      to the <b>number of risks they face</b>
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
    <span>
      <b>Co-occurrence</b> of the <b>various risk factors</b> among children in{" "}
      <b>Punjab</b> can be examined in the figure below
    </span>,
    <span>
      <b>Co-occurrence</b> of the <b>various risk factors</b> among children in{" "}
      <b>Sindh</b> can be examined in the figure below
    </span>,
    <span>
      <b>Co-occurrence</b> of the <b>various risk factors</b> among children in{" "}
      <b>Khyber Pakhtunkhwa</b> can be examined in the figure below
    </span>,
    <span>
      <b>Co-occurrence</b> of the <b>various risk factors</b> among children in{" "}
      <b>Balochistan</b> can be examined in the figure below
    </span>,
  ];
  const [vizIndex, setVizIndex] = useState(1);
  const [pState, setPState] = useState(true);
  const fade = useRef();
  const [clickType, setClickType] = useState("forward");
  const svgRef = useRef();
  const data = useData();
  const incrementIndex = () => {
    setClickType("forward");
    if (vizIndex < maxIndex) {
      fade.current.classList.add(styles.desc_fade);
      return setVizIndex(vizIndex + 1);
    } else {
      return vizIndex;
    }
  };

  const decrementIndex = () => {
    setClickType("backward");
    if (vizIndex > 1) {
      fade.current.classList.add(styles.desc_fade);
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
            chartMargins,
            ["Female", "Male"],
            "Number of Risk Factors",
            clickType === "forward" ? "draw" : "update",
            0.4,
            "Children facing risks to on track development outcomes (by gender)"
          )
        : vizIndex === 2
        ? drawGroupedBars(
            svgRef.current,
            data.gender,
            chartMargins,
            ["Female_DOT", "Male_DOT"],
            "Number of Risk Factors",
            clickType === "forward" ? "update" : "draw",
            0.4,
            "Children developmentally on track (by gender)"
          )
        : vizIndex === 3
        ? drawGroupedBars(
            svgRef.current,
            data.prov,
            chartMargins,
            ["Punjab", "Sindh", "KP", "Balochistan"],
            "Number of Risk Factors",
            clickType === "forward" ? "draw" : "update",
            0.3,
            "Children facing risks to on track development outcomes (by province)"
          )
        : vizIndex === 4
        ? drawGroupedBars(
            svgRef.current,
            data.prov,
            chartMargins,
            ["Punjab_DOT", "Sindh_DOT", "KP_DOT", "Balochistan_DOT"],
            "Number of Risk Factors",
            clickType === "forward" ? "update" : "draw",
            0.3,
            "Children developmentally on track (by province)"
          )
        : vizIndex === 5
        ? drawUpset(svgRef.current, upsetData1, false)
        : vizIndex === 6
        ? drawUpset(svgRef.current, upsetData2, false)
        : vizIndex === 7
        ? drawUpset(svgRef.current, upsetData3, false)
        : drawUpset(svgRef.current, upsetData4, true);
    }
  }, [data, vizIndex, clickType]);

  function processEnd() {
    fade.current.classList.remove(styles.desc_fade);
  }

  // console.log(fade.current);

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
          className={`${styles.chart_desc} ${styles.desc_fade}`}
          ref={fade}
          onAnimationEnd={() => processEnd()}
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
      <div className={styles.notesContain}>{footerArr[vizIndex - 1]}</div>
    </div>
  );
}

export default DataStoryComp;
