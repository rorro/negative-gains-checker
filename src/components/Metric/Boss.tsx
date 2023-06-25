import { BossValue } from '@wise-old-man/utils';
import { getMetricIcon } from '../../utils/metric';
import { OSRSActivity } from '../../types';

interface IProps {
  boss: string;
  wom: BossValue;
  osrs: OSRSActivity;
}

function Boss({ boss, wom, osrs }: IProps) {
  const negativeGains = wom.kills > osrs.score;

  return (
    <tr style={{ background: negativeGains ? '#ff000020' : '' }}>
      <td className="primary">
        <img src={getMetricIcon(boss, true)} alt="" className="metric-icon" /> {osrs?.name}
      </td>
      <td>{Math.max(wom.kills, 0)}</td>
      <td>{Math.max(osrs.score, 0)}</td>
      <td>{Math.max(osrs.score, 0) - Math.max(wom.kills, 0)}</td>
    </tr>
  );
}

export default Boss;
