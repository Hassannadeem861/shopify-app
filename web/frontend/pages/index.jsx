import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Stack,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

const tickets = [
  { id: 1234, inquiry: "query1", status: "Fulfilled", date: "1-1-1990" },
  { id: 5678, inquiry: "query2", status: "Pending", date: "2-2-1992" },
  { id: 9101, inquiry: "query3", status: "Closed", date: "3-3-1993" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Fulfilled":
      return "success";
    case "Pending":
      return "warning";
    case "Closed":
      return "error";
    default:
      return "default";
  }
};

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Page fullWidth>
      <TitleBar title="Zendesk Ticket Generator" />
      <Layout>
        <Layout.Section>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Zendesk Ticket Generate
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ backgroundColor: "#008060", color: "#fff", textTransform: "none" }}
              onClick={handleOpen}
            >
              Create Ticket
            </Button>
          </Stack>

          <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: "auto" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f8f9fa" }}>
                <TableRow>
                  <TableCell><strong>No.</strong></TableCell>
                  <TableCell><strong>Inquiry</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Date</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.map((ticket, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.inquiry}</TableCell>
                    <TableCell>
                      <Chip label={ticket.status} color={getStatusColor(ticket.status)} variant="outlined" />
                    </TableCell>
                    <TableCell>{ticket.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Layout.Section>
      </Layout>

      {/* Modal for Creating Ticket */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" fontWeight="bold" gutterBottom>
            Create New Ticket
          </Typography>
          
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
            <Button onClick={handleClose} color="error" variant="outlined">
              Cancel
            </Button>
            <Button
              onClick={() => {
                console.log({ title, description });
                handleClose();
              }}
              variant="contained"
              sx={{ backgroundColor: "#008060", color: "#fff" }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Page>
  );
};

export default HomePage;
