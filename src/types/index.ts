export interface ProjectProps {
    createdAt: Date,
    description: string,
    key: string,
    name: string,
    updatedAt: Date,
    user: string,
    website: string
  }

  export interface DocumentProps {
    audience: string,
    content: string,
    createdAt: Date,
    favorites: any,
    key: string,
    name: string,
    projectKey: string,
    style: string,
    tone: string,
    topic: string,
    updatedAt: Date,
    user: string
  }

  export interface CardProps {
    key: string,
    name?: string,
    description?: string,
    topic?: string,
    createdAt?: Date,
    updatedAt?: Date,
  }

export interface UserProps {
  createdAt: string,
  email: string,
  key: string,
  locale: string,
  name: string,
  subscription: number,
  suspended: boolean,
  tokens: {
    current: number,
  }
}