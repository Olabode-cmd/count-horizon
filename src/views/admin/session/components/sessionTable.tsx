import {
  Flex,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Tag,
  Button,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";

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
import { info } from "console";

type RowObj = {
  id: number;
  name: string;
  status: string;
  date: string;
  action: any;
};

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function SessionTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  let defaultData = tableData;
  const { isOpen: isOpenViewModal, onOpen: onOpenViewModal, onClose: onCloseViewModal } = useDisclosure();
  const { isOpen: isOpenConfigModal, onOpen: onOpenConfigModal, onClose: onCloseConfigModal } = useDisclosure();
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
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          SESSION NAME
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          STATUS
        </Text>
      ),
      cell: (info) => {
        const status = info.getValue();
        const bgColor = status === "Upcoming" ? "#cbdaf5" : "#e6ffe7";
        const textColor = status === "Upcoming" ? "#1156d6" : "#0ce917";

        return (
          <Tag bg={bgColor} color={textColor} fontSize="sm" fontWeight="500">
            {status}
          </Tag>
        );
      },
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          DATE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
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
        <Flex>
          <button
            className="btn btn-green"
            onClick={() => {
              setSelectedRow(info.row.original);
              onOpenViewModal();
            }}
          >
            View
          </button>
          <button
            className="btn btn-green ml-2"
            onClick={() => {
              setSelectedRow(info.row.original);
              onOpenConfigModal();
            }}
          >
            Config data
          </button>
        </Flex>
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
          Count Sessions
        </Text>
        {/* <Menu /> */}
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
      <Modal isOpen={isOpenViewModal} onClose={onCloseViewModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          {selectedRow && (
            <Box>
              <ModalHeader>Session Details: {selectedRow.name}</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Box>
                  <SimpleGrid columns={{ base: 1, md: 2 }} mb="3" mt="3">
                    <Text>
                      <strong>Name:</strong> {selectedRow.name}
                    </Text>
                    <Text>
                      <strong>Period:</strong> {selectedRow.date}
                    </Text>
                  </SimpleGrid>
                  <hr />
                </Box>
              </ModalBody>
            </Box>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenConfigModal} onClose={onCloseConfigModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          {selectedRow && (
            <Box>
              <ModalHeader>Config data: {selectedRow.name}</ModalHeader>
              <ModalCloseButton />

              <ModalBody>
                <Box>
                  <Text mb="2">
                    Download the excel template if you don't already have it for
                    all data, gently fill in the appropriate cells and upload
                    details.
                  </Text>
                  <Text mb="4">
                    Be sure to double-check details before uploading to avoid
                    errors.
                  </Text>
                  <hr />
                  <Text fontWeight="700" mt="2">
                    Product List
                  </Text>

                  <Flex justifyContent="center" mt="2" mb="2">
                    <button className="btn btn-green">Download Template</button>
                    <button className="btn btn-alt ml-2">Upload Data</button>
                  </Flex>
                  <hr />

                  <Text fontWeight="700" mt="2">
                    List of materials
                  </Text>

                  <Flex justifyContent="center" mt="2" mb="2">
                    <button className="btn btn-green">Download Template</button>
                    <button className="btn btn-alt ml-2">Upload Data</button>
                  </Flex>
                  <hr />

                  <Text fontWeight="700" mt="2">
                    Batch details
                  </Text>

                  <Flex justifyContent="center" mt="2" mb="2">
                    <button className="btn btn-green">Download Template</button>
                    <button className="btn btn-alt ml-2">Upload Data</button>
                  </Flex>
                  <hr />
                </Box>
              </ModalBody>

              <ModalFooter>
                <button className="btn btn-green">Upload all</button>
              </ModalFooter>
            </Box>
          )}
        </ModalContent>
      </Modal>
    </Card>
  );
}
