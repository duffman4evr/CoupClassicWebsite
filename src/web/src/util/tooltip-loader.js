const wowhead = '$WowheadPower';

const refreshTooltips = () => {
  if (window[wowhead]) {
    window[wowhead].refreshLinks();
  }
};

export default refreshTooltips;
