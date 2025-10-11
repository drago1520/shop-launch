import { readFile, writeFile } from 'fs/promises';

async function main() {
  const argv = process.argv.slice(2);

  if (argv.length !== 1) {
    console.error('Usage: tsx fix-empty-string-defaults.ts <path-to-schema>');
    process.exit(1);
  }

  const schemaPath = argv[0];
  const schema = await readFile(schemaPath, 'utf8');

  const updatedSchema = schema.replaceAll("default(')", `default("")`);

  await writeFile(schemaPath, updatedSchema, 'utf8');
  console.log('Success');
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
