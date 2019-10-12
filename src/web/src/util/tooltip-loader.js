const wowhead = '$WowheadPower';
const wh = 'WH';

const refreshTooltips = () => {
  if (window[wowhead] && window[wh].getDataEnv) {
    window[wowhead].refreshLinks();
  }
};

export default refreshTooltips;
