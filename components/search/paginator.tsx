import { Button, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMemo } from "react";
import { UrlObject } from "url";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  buildHref: (page: number) => UrlObject;
};

const Paginator = ({ currentPage, totalPages, buildHref }: PaginatorProps) => {
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
    <Flex as="nav" justifyContent="flex-end">
      <Flex
        as="ul"
        justifyContent="flex-end"
        shadow="md"
        p={1}
        gap={1}
        borderRadius={8}
      >
        {pages.map((page) => (
          <Button
            key={page}
            as="li"
            variant="ghost"
            disabled={page === currentPage}
            _hover={{
              color: "red.700",
            }}
          >
            <NextLink href={buildHref(page)}>{page}</NextLink>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Paginator;
