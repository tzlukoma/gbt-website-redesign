import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'George B. Thompson Website Content',
  projectId: '9qg3y3we',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemas,
  },
});
