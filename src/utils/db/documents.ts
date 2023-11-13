import "server-only";
import { cache } from "react";
import { documents } from "@/lib/deta";

interface DocumentSProps {
    projectKey?: string | null | undefined;
    documentKey?: string | null | undefined;
    user?: string | null | undefined;
    document?: any
}

const date: Date = new Date();
const [hour, minutes] = [date.getHours(), date.getMinutes()];

export const getDocumentsByProjectKey = cache(async ({projectKey}: DocumentSProps): Promise<any[]> => {
  try {
    const getDocuments = await documents.fetch({ projectKey });
    return getDocuments.items;
  } catch (error) {
    console.error("Error when fetching documents", error);
    throw error;
  }
});

export const getDocumentByKey = cache(async ({documentKey}: DocumentSProps) => {
  try {
    const document = await documents.fetch({ key: documentKey });
    return document.items[0];
  } catch (error) {
    console.error("Error when fetching document", error);
    throw error;
  }
});

export const createDocument = async ({user, projectKey, document}: DocumentSProps) => {
  try {
    const newDocument = Object.assign(
      {
        user,
        projectKey,
        name: `Doc - ${date.toDateString()} ${hour}:${minutes}`,
        favorites: {},
        createdAt: date,
        updatedAt: date,
      },
      document
    );
    const createDocument = await documents.put(newDocument);

    return createDocument;
  } catch (error) {
    console.error("Error when creating document", error);
    throw error;
  }
};

export const updateDocument = async ({documentKey, document}: DocumentSProps) => {
  try {
    document.content = JSON.stringify(document.content);
    const updates = Object.assign({ updatedAt: date }, document);
    const updateDocument = await documents
      .update(updates, documentKey)
      .then(() => updates);

    return updateDocument;
  } catch (error) {
    console.error("Error when updating document", error);
    throw error;
  }
};

export const deleteDocument = async ({documentKey}: DocumentSProps) => {
  try {
    const deleteDocument = await documents.delete(documentKey).then(() => {
      documentKey;
    });
    return deleteDocument;
  } catch (error) {
    console.error("Error when deleting document:", error);
    throw error;
  }
};
