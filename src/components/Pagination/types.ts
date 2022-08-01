export interface PaginationProps {
  page: number;
  total: number;
  onChange: (pageNumber: number) => void;
}
