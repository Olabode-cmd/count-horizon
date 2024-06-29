import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import AdminLayout from '../../../../layouts/admin'

const SessionDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch the session data based on the id
  // For demonstration, we'll use a placeholder session data
  const sessionData = {
    id,
    name: `Session ${id}`,
    date: "2024-06-24",
    status: "Upcoming",
  };

  return (
    <AdminLayout>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Session Details: {sessionData.name}
        </Text>
        <SimpleGrid columns={2} spacing={10}>
          <Text>ID: {sessionData.id}</Text>
          <Text>Date: {sessionData.date}</Text>
          <Text>Status: {sessionData.status}</Text>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
};

export default SessionDetails;