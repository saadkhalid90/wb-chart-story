import { useEffect } from "react";
import { useData } from "./useData";
import { csv } from "d3";

function StackedBarVertical({ svgWidth, svgHeight }) {
  const data = useData();

  useEffect(() => {
  }, [data]);

  return (
    <div></div>
  );
}

export default StackedBarVertical;
