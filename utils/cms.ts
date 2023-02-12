import fs from 'fs'
export const fetchContent = (path: string) => {
  const markdown = fs.readFileSync(path, 'utf-8')
  return markdown
}
