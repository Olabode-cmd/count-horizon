import {
  Flex,
  Box,
  Table,
  Tag,
  Tbody,
  Td,
  Input,
  Text,
  Th,
  Thead,
  SimpleGrid,
  Tr,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import * as React from "react";
// import Link from "next/link";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// Custom components
import Card from "components/card/Card";

type RowObj = {
  id: number;
  productId: string;
  itemName: string;
  batch: string;
  logisticArea: string;
  expectedQuantity: number;
  countedQuantity: number;
  variance: number;
  date: string;
  discrepancyStatus: string;
  action: any;
};

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function ReconTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  let defaultData = tableData;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRow, setSelectedRow] = React.useState<RowObj | null>(null);

  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          ID
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("itemName", {
      id: "itemName",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          ITEM
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("batch", {
      id: "batch",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          BATCH
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("logisticArea", {
      id: "logisticArea",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          LOGISTIC AREA
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("expectedQuantity", {
      id: "expectedQuantity",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          EXPECTED
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("countedQuantity", {
      id: "countedQuantity",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          COUNTED QUANTITY
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("variance", {
      id: "variance",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          VARIANCE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("discrepancyStatus", {
      id: "discrepancyStatus",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          DISCREPANCY
        </Text>
      ),
      cell: (info) => {
        const status = info.getValue();

        let bgColor, textColor;

        switch (status) {
          case "Error":
            bgColor = "#f7d5d5";
            textColor = "#d61111";
            break;
          case "Null":
            bgColor = "#e6ffe7";
            textColor = "#0ce917";
            break;
          default:
            bgColor = "#ffffff";
            textColor = "#000000";
            break;
        }

        return (
          <Tag bg={bgColor} color={textColor} fontSize="sm" fontWeight="500">
            {status}
          </Tag>
        );
      },
    }),
    columnHelper.accessor("action", {
      id: "action",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          ACTION
        </Text>
      ),
      cell: (info) => (
        <Box>
          <button
            className="btn btn-green"
            onClick={() => {
              setSelectedRow(info.row.original);
              onOpen();
            }}
          >
            View
          </button>
        </Box>
      ),
    }),
  ];

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Product Data
        </Text>


        <button className='btn btn-green'>Generate report</button>
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: "14px" }}
                          minW={{ sm: "150px", md: "200px", lg: "auto" }}
                          borderColor="transparent"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          {selectedRow && (
            <Box>
              <ModalHeader>Config data: {selectedRow.itemName}</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Text color='red.600' mb='5'>Discrepancy error in quantity</Text>
                <SimpleGrid columns={2} spacing={3}>
                  <Box>
                    <Text>Product ID</Text>
                    <Input defaultValue={selectedRow.productId} />
                  </Box>

                  <Box>
                    <Text>Logistic Area</Text>
                    <Input defaultValue={selectedRow.logisticArea} />
                  </Box>

                  <Box>
                    <Text>Expected Quantity</Text>
                    <Input defaultValue={selectedRow.expectedQuantity} />
                  </Box>

                  <Box>
                    <Text>Counted Quantity</Text>
                    <Input defaultValue={selectedRow.countedQuantity} />
                  </Box>
                </SimpleGrid>
              </ModalBody>

              <ModalFooter>
                <button className="btn btn-green">Update</button>
              </ModalFooter>
            </Box>
          )}
        </ModalContent>
      </Modal>
    </Card>
  );
}