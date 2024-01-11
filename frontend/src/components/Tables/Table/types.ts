export interface ITableHeader {
  key: string;
  value: string;
  leftHeader?: boolean;
  leftBody?: boolean;
  columnWidth?: string;
  tab?: boolean;
}

export type TableProps = {
  headers: ITableHeader[];
  data: any[];
  hideLineBottom?: boolean;
  id?: string;
  loading?: boolean;
  emptyMessage?: string;
  instruction?: string | JSX.Element;
  enableActions?: boolean;
  status?: boolean;
  totalPages?: number;
  currentPage?: number;
  otherColor?: string;
  textColor?: string;
  canChangeStatus?: boolean;
  canEdit?: boolean;
  canDownload?: boolean;
  canResetPassword?: boolean;
  canViewDetail?: boolean;
  canStart?: boolean;
  isPlannigGoal?: boolean;

  onDetail?: (item: any) => void;
  onResetPassword?: (item: any) => void;
  onChangeStatus?: (item: any) => void;
  onPageChanges?: (page: number) => void;
  onEdit?: (item: any) => void;
  onDownload?: (item: any) => void;
  onStart?: (item: any) => void;
};
