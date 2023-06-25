export function getMetricIcon(metric: string, smallVersion: boolean) {
  const folder = smallVersion ? 'metrics_small' : 'metrics';
  return `/${folder}/${metric}.png`;
}
