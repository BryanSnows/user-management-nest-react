import { ReactNode } from 'react';
import { ISelectCurrentValue } from '../Input/Select/SelectProps';
import { IToggleBox } from '../MultiToggleBox/types';

export interface Paginate {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface BaseProps {
  dataPagination?: Paginate;
  showOnOff?: boolean;
  onOff?: boolean;
  actualPage?: boolean;
  multiToggles?: IToggleBox[];
  setOnOff?: (e: boolean) => void;
  pageParam: number;
  setPageParam: (e: number) => void;
  setSearchParam: (e: string) => void;
  showSelect?: boolean;
  selectLabel?: string;
  selectPlaceholder?: string;
  selectOptions?: Array<{
    id: number;
    value: string;
  }>;
  selectCurrentOption?: ISelectCurrentValue | null;
  handleSelectOptions?: (newValue: ISelectCurrentValue | null) => void;
  selectIsDisabled?: boolean;
  pageTitle: string;
  buttonText: string;
  buttonPath: string;
  canCreate?: boolean;
  children: ReactNode;
}
