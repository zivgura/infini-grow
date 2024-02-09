import { theme } from '../../theme';

export const getBaselineTitle = (frequency) => `Baseline ${frequency} Budget`;
export const getBaselineFontColor = (isEqual) => isEqual ? theme.colors.darkBlue : theme.colors.lightGray;
export const getBreakdownFieldFontColor = (isEqual) => isEqual ? theme.colors.lightGray : theme.colors.darkBlue;
