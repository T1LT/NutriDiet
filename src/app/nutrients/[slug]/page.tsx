"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { NutritionFacts } from "@prisma/client";
import TablePaginationActions from "./TablePaginationActions";
import capitalize from "@/lib/utils/capitalize";

const Nutrients = ({ params }: { params: { slug: string } }) => {
  const nutrient = params.slug;
  // TODO: fix this
  type nutrientDataType = Pick<NutritionFacts, "id" | "name" | nutrient>;

  const router = useRouter();
  const [nutrientData, setNutrientData] = useState<
    nutrientDataType | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // to avoid a layout jump when reaching the last page with empty rows
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - nutrientData?.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/nutrients?nutrient=${nutrient}`);
      const data = await res.json();
      setNutrientData(data);
      setLoading(false);
    })();
  }, [nutrient]);

  // TODO: replace loading with actual loader
  if (!nutrientData || loading) return <>Loading...</>;

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="h-1/2 w-1/2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="results table">
            <TableHead sx={{ backgroundColor: "lightgray" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Food Item (100g serving)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  {capitalize(nutrient.split("_").join(" "))} (mg)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? nutrientData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : nutrientData
              ).map((row: nutrientDataType, idx: number) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    <div
                      onClick={() => router.push(`/nutritionfacts/${row.id}`)}
                      className="cursor-pointer"
                    >
                      {row.name}
                    </div>
                  </TableCell>
                  <TableCell align="right">{row[nutrient]}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={3}
                count={nutrientData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </TableContainer>
      </div>
    </div>
  );
};

export default Nutrients;
