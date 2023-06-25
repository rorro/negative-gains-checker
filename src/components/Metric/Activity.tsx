import { ActivityValue } from '@wise-old-man/utils';
import { getMetricIcon } from '../../utils/metric';
import { OSRSActivity } from '../../types';

interface IProps {
  activity: string;
  wom: ActivityValue;
  osrs: OSRSActivity;
}

function Activity({ activity, wom, osrs }: IProps) {
  const negativeGains = wom.score > osrs.score;

  return (
    <tr style={{ background: negativeGains ? '#ff000020' : '' }}>
      <td className="primary">
        <img src={getMetricIcon(activity, true)} alt="" className="metric-icon" /> {osrs?.name}
      </td>
      <td>{Math.max(wom.score, 0)}</td>
      <td>{Math.max(osrs.score, 0)}</td>
      <td>{Math.max(osrs.score, 0) - Math.max(wom.score, 0)}</td>
    </tr>
  );
}

export default Activity;
