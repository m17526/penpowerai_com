import "server-only";
import { cache } from "react";
import { documents, projects } from "@/lib/deta";

interface ProjectsProps {
    email?: string | null | undefined;
    user?: string | null | undefined,
    name?: string | null | undefined,
    description?: string | null | undefined,
    website?: string | null | undefined,
    projectKey?: string | null | undefined
}

const date: Date = new Date();
const [hour, minutes]: [number, number] = [date.getHours(), date.getMinutes()];

export const getProjects = cache(async ({email}: ProjectsProps): Promise<any[]> => {
  try {
    const getProjects = await projects.fetch({ user: email });
    return getProjects.items;
  } catch (error) {
    console.error("Error when fetching projects", error);
    throw error;
  }
});

export const getProject = cache(async ({projectKey}: ProjectsProps): Promise<any> => {
  try {
    const project = await projects.get(projectKey);
    return project;
  } catch (error) {
    console.error("Error when fetching project", error);
    throw error;
  }
});

export const createProject = async ({user, name, description, website}: ProjectsProps): Promise<any> => {
  try {
    const newProject = {
      user,
      name: name || `Pro - ${date.toDateString()} ${hour}:${minutes}`,
      description,
      website,
      createdAt: date,
      updatedAt: date,
    };
    const createProject = await projects.put(newProject);
    return createProject;
  } catch (error) {
    console.error("Error when creating project", error);
    throw error;
  }
};

export const deleteProject = async (projectKey: ProjectsProps): Promise<any> => {
  try {
    const deleteProject = await projects.delete(projectKey).then(() => {
      projectKey;
    });
    return deleteProject;
  } catch (error) {
    console.error("Error when deleting project:", error);
    throw error;
  }
};

export const deleteProjectWithDocuments = async ({user, projectKey}: ProjectsProps): Promise<any> => {
  try {
    const { items } = await documents.fetch({ user, projectKey });

    const deleteDocumentPromises = items.map(async (document: {key: string}) => {
      await documents.delete(document.key);
    });
    await Promise.all(deleteDocumentPromises);

    await projects.delete(projectKey);

    const deleted = {
      projectKey: projectKey,
      documentsKey: items.map((document: {key: string}) => document.key),
    };

    return deleted;
  } catch (error) {
    console.error("Error when deleting project and documents:", error);
    throw error;
  }
};