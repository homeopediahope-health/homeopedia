'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'homeopedia',
  title: 'HomeoPedia Content Manager',
  projectId: 'zf5dtbt9',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
