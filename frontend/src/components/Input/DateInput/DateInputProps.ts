export type DateInputProps = {
  width?: string;
  label?: string;
  currentValue?: any;
  disabled?: boolean;
  onDateChange?: (value: any) => void;
  maxDate?: Date;
  minDate?: Date;
};

export type IOnchangeInputDate = {
  $D: number;
  $H: number;
  $L: string;
  $M: number;
  $W: number;
  $d: Date | string;
  $m: number;
  $ms: number;
  $s: number;
  $u?: string;
  $y: string;
};
