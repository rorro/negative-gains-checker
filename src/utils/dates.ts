import dayjs from 'dayjs';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormatPlugin);

function isValidISODate(input: unknown) {
  if (!input || typeof input !== 'string') return false;

  // DayJS has a bug with strict parsing with timezones https://github.com/iamkun/dayjs/issues/929
  // So I'll just strip the "Z" timezone
  return input.endsWith('Z') && dayjs(input.slice(0, -1), 'YYYY-MM-DDTHH:mm:ss.SSS', true).isValid();
}

function traverseTransform(input: unknown, transformation: (i: unknown) => unknown): unknown {
  if (Array.isArray(input)) {
    return input.map(item => traverseTransform(item, transformation));
  }

  if (input !== null && typeof input === 'object') {
    return Object.fromEntries(
      Object.keys(input).map(key => [
        key,
        traverseTransform(input[key as keyof typeof input], transformation)
      ])
    );
  }

  return transformation(input);
}

export function transformDates(input: unknown) {
  return traverseTransform(input, val => (isValidISODate(val) ? new Date(val as string) : val));
}
