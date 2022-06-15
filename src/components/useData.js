import { useState, useEffect } from "react";
import riskData from './data/RiskFactorsDist.csv';
import riskDataProv from './data/RiskFactorsDistProv.csv';
import {csv} from 'd3';

export function useData(){
  const [data, setData] = useState(null);
  const [dataProv, setDataProv] = useState(null);

  useEffect(() => {
    csv(riskData, preProc1)
      .then(data => setData(data));


    csv(riskDataProv, preProc2)
      .then(dataProv => setDataProv(dataProv));
  }, []);

  if (dataProv && data) {
    return {
      gender: data,
      prov: dataProv
    };
  }
  else {
    return null;
  }
}

function preProc1(row){
  row.Male = +row.Male;
  row.Female = +row.Female;
  row.Male_DOT = +row.Male_DOT;
  row.Female_DOT = +row.Female_DOT;
  return row;
}

function preProc2(row){
  row.Punjab = +row.Punjab;
  row.Punjab_DOT = +row.Punjab_DOT;
  row.Sindh = +row.Sindh;
  row.Sindh_DOT = +row.Sindh_DOT;
  row.KP = +row.KP;
  row.KP_DOT = +row.KP_DOT;
  row.Balochistan = +row.Balochistan;
  row.Balochistan_DOT = +row.Balochistan_DOT;
  return row;
}