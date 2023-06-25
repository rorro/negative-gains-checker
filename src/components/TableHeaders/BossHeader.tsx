import WOMLogo from '../../wom_logo.png';
import OSRSLogo from '../../osrs_logo.png';

function BossHeader() {
  return (
    <thead className="header">
      <tr>
        <th>Boss</th>

        <th>
          <img src={WOMLogo} alt="" className="header-logo" />
          <br />
          KC
        </th>
        <th>
          <img src={OSRSLogo} alt="" className="header-logo" />
          <br /> KC
        </th>

        <th>Δ KC</th>
      </tr>
    </thead>
  );
}

export default BossHeader;
