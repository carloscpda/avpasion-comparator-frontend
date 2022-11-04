import { Button, Flex } from "@chakra-ui/react";
import { useMemo } from "react";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
};

const Paginator = ({ currentPage, totalPages, onNavigate }: PaginatorProps) => {
  const pages = useMemo(() => {
    let ps = [];
    if (currentPage > 2) ps.push(currentPage - 2);
    if (currentPage > 1) ps.push(currentPage - 1);
    ps.push(currentPage);
    if (currentPage < totalPages) ps.push(currentPage + 1);
    if (currentPage < totalPages - 1) ps.push(currentPage + 2);
    return ps;
  }, [currentPage, totalPages]);

  return (
    <Flex justifyContent="flex-end">
      <Flex
        justifyContent="flex-end"
        shadow="md"
        p={1}
        gap={1}
        borderRadius={8}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => onNavigate(page)}
            variant="ghost"
            disabled={page === currentPage}
          >
            {page}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Paginator;
