import WOMLogo from '../../wom_logo.png';
import OSRSLogo from '../../osrs_logo.png';

function SkillsHeader() {
  return (
    <thead className="header">
      <tr>
        <th>Skill</th>

        <th>
          <img src={WOMLogo} alt="" className="header-logo" />
          <br />
          XP
        </th>
        <th>
          <img src={OSRSLogo} alt="" className="header-logo" />
          <br /> XP
        </th>

        <th>
          <img src={WOMLogo} alt="" className="header-logo" />
          <br />
          Level
        </th>
        <th>
          <img src={OSRSLogo} alt="" className="header-logo" />
          <br /> Level
        </th>

        <th>Δ XP</th>
        <th>Δ Level</th>
      </tr>
    </thead>
  );
}

export default SkillsHeader;
