import { SkillValue } from '@wise-old-man/utils';
import { getMetricIcon } from '../../utils/metric';
import { OSRSSkill } from '../../types';

interface IProps {
  skill: string;
  wom: SkillValue;
  osrs: OSRSSkill;
}

function Skill({ skill, wom, osrs }: IProps) {
  const negativeGains = wom.experience > osrs.xp || wom.level > osrs.level;

  return (
    <tr style={{ background: negativeGains ? '#ff000020' : '' }}>
      <td className="primary">
        <img src={getMetricIcon(skill, true)} alt="" className="metric-icon" /> {osrs?.name}
      </td>
      <td>{Math.max(wom.experience, 0)}</td>
      <td>{Math.max(osrs.xp, 0)}</td>
      <td>{Math.max(wom.level, 0)}</td>
      <td>{Math.max(osrs.level, 0)}</td>
      <td>{Math.max(osrs.xp, 0) - Math.max(wom.experience, 0)}</td>
      <td>{Math.max(osrs.level, 0) - Math.max(wom.level, 0)}</td>
    </tr>
  );
}

export default Skill;
