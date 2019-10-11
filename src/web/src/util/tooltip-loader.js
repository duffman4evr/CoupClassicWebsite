const wowhead = '$WowheadPower';

const loadTooltips = () => {
  if (window[wowhead]) {
    window[wowhead].init();
  }
};

export default loadTooltips;
