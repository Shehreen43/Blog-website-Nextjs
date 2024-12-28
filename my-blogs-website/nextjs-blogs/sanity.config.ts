import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Nextjs-Blogs',

  projectId: '6xe84oec',
  dataset: 'production',
  apiVersion: '2024-12-27',
  useCdn: process.env.NODE_ENV === 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
