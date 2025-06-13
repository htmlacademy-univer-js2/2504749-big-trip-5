import { SortType } from '../const';

const sortOptions = [
  { type: SortType.DAY, isDisabled: false },
  { type: SortType.EVENT, isDisabled: true },
  { type: SortType.TIME, isDisabled: false },
  { type: SortType.PRICE, isDisabled: false },
  { type: SortType.OFFER, isDisabled: true }
];

const generateSort = (points) => {
  if (!points.length) {
    return sortOptions.map((option) => ({ ...option, isDisabled: true }));
  }
  return sortOptions;
};

export { generateSort };
