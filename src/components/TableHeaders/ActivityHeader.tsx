import WOMLogo from '../../wom_logo.png';
import OSRSLogo from '../../osrs_logo.png';

function ActivityHeader() {
  return (
    <thead className="header">
      <tr>
        <th>Activity</th>

        <th>
          <img src={WOMLogo} alt="" className="header-logo" />
          <br />
          Score
        </th>
        <th>
          <img src={OSRSLogo} alt="" className="header-logo" />
          <br /> Score
        </th>

        <th>Δ Score</th>
      </tr>
    </thead>
  );
}

export default ActivityHeader;
