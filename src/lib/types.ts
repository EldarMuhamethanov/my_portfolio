export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export interface ProjectData {
  id: string
  name: string
  photos: string[]
  githubUrl?: string
  site?: string
  shortDescription: string
  description: string[]
  stack: string[]
}
