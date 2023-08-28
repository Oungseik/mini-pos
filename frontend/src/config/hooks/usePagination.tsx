import type { Pagination } from "../../types";

import { useState } from "react";

function usePagination({ total, perPage }: { total: number, perPage: number }) {
  const [pagination, setPagination] = useState<Pagination>({ total, perPage, totalPage: (total % perPage), currentPage: 0 });

  function next() {
    const nextPage = pagination.currentPage + 1;
    if (pagination.totalPage >= nextPage)
      setPagination({ ...pagination, currentPage: nextPage })
  }
  function prev() {
    const prevPage = pagination.currentPage - 1;
    if (prevPage >= 0)
      setPagination({ ...pagination, currentPage: prevPage })
  }
  return { totalPage: pagination.totalPage, currentPage: pagination.currentPage, next, prev, setPagination };
}

export { usePagination };


