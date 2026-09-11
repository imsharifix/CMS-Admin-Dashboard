import "./Feature.css";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanune</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,400</span>
          <span className="featureRate negative">
            -11.4
            <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compare to last Month</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">Revanune</span>
        <div className="featureContainer">
          <span className="featureMoney">$1,500</span>
          <span className="featureRate negative">
            -1.4
            <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compare to last Month</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">Revanune</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,244</span>
          <span className="featureRate">
            +24.4
            <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">Compare to last Month</span>
      </div>
    </div>
  );
}

export default Feature;
