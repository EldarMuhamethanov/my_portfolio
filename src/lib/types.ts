export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type ProjectDescriptionBlock = {
  type: 'paragraph',
  text: string
} | {
  type: 'list',
  items: string[],
} | {
    type: 'header'
    level: 1 | 2 | 3,
    text: string
  }

export interface ProjectData {
  id: string
  name: string
  photos: string[]
  githubUrl?: string
  site?: string
  shortDescription: string
  description: ProjectDescriptionBlock[]
  stack: string[]
}

export interface ExperienceData {
  company: string
  location: string
  position: string
  link: string
  start: string
  end: string
  tasks: string[]
  achievements: string[]
  stack: string[]
}

export type JobStatus = 'not-looking' | 'looking' | 'open-to-work'
