const upsetData1 = [
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 6.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 5.9,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 5.9,
  },
  {
    comb: [
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 5.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 4.7,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 4.3,
  },
  { comb: ["Not enrolled in ECE", "Negative punishment"], value: 4.2 },
  { comb: ["Negative punishment"], value: 3.5 },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 3.2,
  },
  { comb: ["Living in a rural area", "Negative punishment"], value: 3 },
  { comb: ["No stimulation at home", "Negative punishment"], value: 3 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.9,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.8,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.5,
  },
  { comb: ["Not enrolled in ECE"], value: 1.1 },
  {
    comb: [
      "Low Maternal Education",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.1,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Negative punishment"],
    value: 1.1,
  },
  { comb: [], value: 1.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1,
  },
  { comb: ["Not enrolled in ECE", "No stimulation at home"], value: 1 },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.9,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.9,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.9,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.8,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.8,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.8,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.8,
  },
  { comb: ["Not enrolled in ECE", "Living in a rural area"], value: 0.7 },
  {
    comb: ["Stunted Growth", "No stimulation at home", "Negative punishment"],
    value: 0.7,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0.7,
  },
  { comb: ["Living in a rural area", "No stimulation at home"], value: 0.6 },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.6,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.6,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.6,
  },
  { comb: ["Stunted Growth", "Negative punishment"], value: 0.5 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.5,
  },
  { comb: ["No stimulation at home"], value: 0.5 },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  { comb: ["Living in a rural area"], value: 0.4 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: ["Stunted Growth", "Living in a rural area", "Negative punishment"],
    value: 0.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.4,
  },
  { comb: ["Low Maternal Education", "Negative punishment"], value: 0.4 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "No stimulation at home"],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.2,
  },
  { comb: ["Stunted Growth", "Not enrolled in ECE"], value: 0.2 },
  { comb: ["Low Maternal Education", "Not enrolled in ECE"], value: 0.2 },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: ["Not enrolled in ECE", "Having a disability", "Negative punishment"],
    value: 0.2,
  },
  { comb: ["Low Maternal Education", "No stimulation at home"], value: 0.2 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Living in a rural area"],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Low Maternal Education", "Living in a rural area"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.1,
  },
  { comb: ["Having a disability", "Negative punishment"], value: 0.1 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth"], value: 0.1 },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Not enrolled in ECE"],
    value: 0.1,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: ["Poverty", "Living in a rural area", "Negative punishment"],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "No stimulation at home"], value: 0.1 },
  { comb: ["Low Maternal Education"], value: 0.1 },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Negative punishment"],
    value: 0.1,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "Living in a rural area"], value: 0.1 },
  {
    comb: ["Poverty", "No stimulation at home", "Negative punishment"],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Living in a rural area", "No stimulation at home"],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Stunted Growth", "Having a disability", "Negative punishment"],
    value: 0,
  },
  { comb: ["Not enrolled in ECE", "Having a disability"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0,
  },
  { comb: ["Stunted Growth", "Low Maternal Education"], value: 0 },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "No stimulation at home"],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "Negative punishment"],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Poverty", "Living in a rural area"], value: 0 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "Living in a rural area"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Not enrolled in ECE", "Living in a rural area"],
    value: 0,
  },
  { comb: ["Living in a rural area", "Having a disability"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Having a disability"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  { comb: ["Low Maternal Education", "Having a disability"], value: 0 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Stunted Growth", "Poverty", "Negative punishment"], value: 0 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Poverty", "Not enrolled in ECE", "Negative punishment"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Not enrolled in ECE", "No stimulation at home"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Poverty", "No stimulation at home"], value: 0 },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
];

const upsetData2 = [
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 6.5,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 5.8,
  },
  { comb: ["Not enrolled in ECE", "Negative punishment"], value: 4.2 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 4.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 4,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 3.8,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 3.7,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 3.6,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 3.5,
  },
  { comb: ["Negative punishment"], value: 3.4 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 3.4,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 3.3,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Negative punishment"],
    value: 2.7,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 2.7,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 2.6,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 2.5,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 2,
  },
  { comb: ["No stimulation at home", "Negative punishment"], value: 1.5 },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 1.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.4,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 1.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 1,
  },
  { comb: ["Not enrolled in ECE"], value: 1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 1,
  },
  { comb: ["Stunted Growth", "Negative punishment"], value: 0.9 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.9,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.7,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.7,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0.6,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.6,
  },
  { comb: ["Stunted Growth", "Not enrolled in ECE"], value: 0.6 },
  { comb: ["Not enrolled in ECE", "No stimulation at home"], value: 0.6 },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Not enrolled in ECE"],
    value: 0.5,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.5,
  },
  { comb: [], value: 0.5 },
  { comb: ["Low Maternal Education", "Negative punishment"], value: 0.4 },
  { comb: ["Low Maternal Education", "Not enrolled in ECE"], value: 0.4 },
  { comb: ["Living in a rural area", "Negative punishment"], value: 0.4 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "No stimulation at home"],
    value: 0.4,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Living in a rural area"],
    value: 0.4,
  },
  {
    comb: [
      "Low Maternal Education",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.4,
  },
  {
    comb: ["Stunted Growth", "No stimulation at home", "Negative punishment"],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0.3,
  },
  { comb: ["Not enrolled in ECE", "Living in a rural area"], value: 0.3 },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: ["Not enrolled in ECE", "Having a disability", "Negative punishment"],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.2,
  },
  { comb: ["No stimulation at home"], value: 0.2 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.2,
  },
  {
    comb: ["Stunted Growth", "Living in a rural area", "Negative punishment"],
    value: 0.1,
  },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Negative punishment"],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0.1,
  },
  { comb: ["Living in a rural area"], value: 0.1 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Low Maternal Education", "No stimulation at home"], value: 0.1 },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Low Maternal Education"], value: 0.1 },
  {
    comb: ["Low Maternal Education", "Poverty", "Not enrolled in ECE"],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Having a disability", "Negative punishment"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "No stimulation at home"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Living in a rural area", "No stimulation at home"], value: 0.1 },
  {
    comb: [
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Low Maternal Education", "Living in a rural area"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: ["Poverty", "Not enrolled in ECE", "Living in a rural area"],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Not enrolled in ECE", "Having a disability"], value: 0.1 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "Negative punishment"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Living in a rural area", "Negative punishment"],
    value: 0,
  },
  { comb: ["Having a disability", "No stimulation at home"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Having a disability"],
    value: 0,
  },
  { comb: ["Stunted Growth", "Low Maternal Education"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "Living in a rural area"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  { comb: ["Having a disability"], value: 0 },
  { comb: ["Poverty", "Not enrolled in ECE", "Negative punishment"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Living in a rural area", "No stimulation at home"],
    value: 0,
  },
  {
    comb: ["Stunted Growth", "Having a disability", "Negative punishment"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Poverty", "Negative punishment"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Poverty", "Not enrolled in ECE"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Stunted Growth", "Having a disability"], value: 0 },
  { comb: ["Stunted Growth", "Living in a rural area"], value: 0 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
    ],
    value: 0,
  },
  { comb: ["Stunted Growth", "Low Maternal Education", "Poverty"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  { comb: ["Low Maternal Education", "Having a disability"], value: 0 },
];

const upsetData3 = [
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 12.6,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 8.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 6.5,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 6.4,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 6.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 5.5,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 4.7,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 3.9,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.8,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 2.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 2.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 1.9,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.7,
  },
  { comb: ["Not enrolled in ECE", "Negative punishment"], value: 1.6 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1.6,
  },
  {
    comb: [
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.5,
  },
  { comb: ["Living in a rural area", "Negative punishment"], value: 1.5 },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 1.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0.9,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.9,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Negative punishment"],
    value: 0.8,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.8,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0.8,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.8,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.7,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.7,
  },
  { comb: ["Negative punishment"], value: 0.6 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.6,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.6,
  },
  { comb: ["Not enrolled in ECE", "Living in a rural area"], value: 0.6 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.5,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: ["Stunted Growth", "Living in a rural area", "Negative punishment"],
    value: 0.4,
  },
  {
    comb: [
      "Low Maternal Education",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.4,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  { comb: ["Not enrolled in ECE"], value: 0.3 },
  { comb: ["No stimulation at home", "Negative punishment"], value: 0.3 },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Living in a rural area"],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.3,
  },
  { comb: ["Low Maternal Education", "Not enrolled in ECE"], value: 0.3 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.3,
  },
  { comb: ["Not enrolled in ECE", "No stimulation at home"], value: 0.2 },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.2,
  },
  { comb: ["Living in a rural area", "No stimulation at home"], value: 0.2 },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Not enrolled in ECE"],
    value: 0.2,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.2,
  },
  { comb: ["Living in a rural area"], value: 0.2 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.2,
  },
  { comb: ["Stunted Growth", "Not enrolled in ECE"], value: 0.2 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.2,
  },
  { comb: ["Low Maternal Education", "Living in a rural area"], value: 0.2 },
  { comb: ["Low Maternal Education", "Negative punishment"], value: 0.2 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "Negative punishment"], value: 0.1 },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "No stimulation at home"],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: ["Stunted Growth", "No stimulation at home", "Negative punishment"],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "Living in a rural area"], value: 0.1 },
  { comb: [], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: ["Not enrolled in ECE", "Having a disability", "Negative punishment"],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["No stimulation at home"], value: 0.1 },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Negative punishment"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Not enrolled in ECE", "Living in a rural area"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  { comb: ["Low Maternal Education"], value: 0 },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  { comb: ["Having a disability", "Negative punishment"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  { comb: ["Stunted Growth"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Not enrolled in ECE", "No stimulation at home"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "Having a disability",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Living in a rural area", "Negative punishment"],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "Living in a rural area"],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "Living in a rural area", "No stimulation at home"],
    value: 0,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Having a disability",
      "No stimulation at home",
    ],
    value: 0,
  },
  { comb: ["Stunted Growth", "No stimulation at home"], value: 0 },
  { comb: ["Stunted Growth", "Low Maternal Education"], value: 0 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Having a disability",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Poverty", "No stimulation at home", "Negative punishment"],
    value: 0,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "No stimulation at home",
      "Negative punishment",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Having a disability",
      "Negative punishment",
    ],
    value: 0,
  },
];

const upsetData4 = [
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 21.8,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 11.2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 10.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 10.3,
  },
  {
    comb: [
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 5.1,
  },
  {
    comb: [
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 5,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 4.9,
  },
  { comb: ["Low Maternal Education", "Not enrolled in ECE"], value: 4.7 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 4.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 2,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 1.6,
  },
  { comb: ["Not enrolled in ECE", "Living in a rural area"], value: 1.6 },
  { comb: ["Low Maternal Education", "No stimulation at home"], value: 1.6 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1.6,
  },
  { comb: ["Not enrolled in ECE"], value: 1.4 },
  {
    comb: [
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 1.3,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 1.1,
  },
  {
    comb: ["Stunted Growth", "Low Maternal Education", "Not enrolled in ECE"],
    value: 1.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.9,
  },
  { comb: ["Low Maternal Education"], value: 0.8 },
  { comb: ["Not enrolled in ECE", "No stimulation at home"], value: 0.8 },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "Living in a rural area"],
    value: 0.8,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
    ],
    value: 0.7,
  },
  { comb: ["Low Maternal Education", "Living in a rural area"], value: 0.6 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.6,
  },
  { comb: ["Living in a rural area", "No stimulation at home"], value: 0.6 },
  { comb: ["No stimulation at home"], value: 0.5 },
  {
    comb: ["Low Maternal Education", "Poverty", "Living in a rural area"],
    value: 0.4,
  },
  { comb: ["Stunted Growth", "Not enrolled in ECE"], value: 0.4 },
  { comb: [], value: 0.3 },
  {
    comb: ["Stunted Growth", "Not enrolled in ECE", "No stimulation at home"],
    value: 0.3,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "Not enrolled in ECE"],
    value: 0.3,
  },
  { comb: ["Living in a rural area"], value: 0.2 },
  { comb: ["Stunted Growth", "Low Maternal Education"], value: 0.2 },
  {
    comb: [
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0.2,
  },
  {
    comb: [
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  {
    comb: ["Poverty", "Not enrolled in ECE", "Living in a rural area"],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "Living in a rural area"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0.1,
  },
  { comb: ["Stunted Growth", "No stimulation at home"], value: 0.1 },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Not enrolled in ECE",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Low Maternal Education",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
  {
    comb: ["Low Maternal Education", "Poverty", "No stimulation at home"],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Not enrolled in ECE",
      "Living in a rural area",
    ],
    value: 0,
  },
  {
    comb: [
      "Stunted Growth",
      "Poverty",
      "Living in a rural area",
      "No stimulation at home",
    ],
    value: 0,
  },
];

export { upsetData1, upsetData2, upsetData3, upsetData4 };
