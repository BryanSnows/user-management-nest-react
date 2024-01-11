export function passPage(
  dataOnSuccess: {
    data: {
      meta: {
        itemCount: number;
        currentPage: number;
        totalPages: number;
      };
    };
  },
  pageParam: number,
  setPageParam: (e: number) => void,
) {
  const currentPage =
    dataOnSuccess?.data?.meta?.itemCount === 0 &&
    dataOnSuccess?.data?.meta?.currentPage > dataOnSuccess?.data?.meta?.totalPages;

  if (currentPage && pageParam !== 1) {
    setPageParam(pageParam - 1);
  }
}
