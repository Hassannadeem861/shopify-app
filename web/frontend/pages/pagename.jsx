import { Card, Page, Layout, TextField, Button } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = useCallback((value) => setTitle(value), []);
  const handleDescriptionChange = useCallback((value) => setDescription(value), []);

  return (
    <Page title="Zendesk Ticket Generate">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
              Create New Ticket
            </h2>

            {/* Title Field */}
            <TextField label="Title" value={title} onChange={handleTitleChange} autoComplete="off" />

            {/* Description Field */}
            <TextField
              label="Description"
              value={description}
              onChange={handleDescriptionChange}
              multiline={4}
              autoComplete="off"
            />

            {/* Submit Button */}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <Button primary onClick={() => console.log({ title, description })}>
                Submit
              </Button>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
