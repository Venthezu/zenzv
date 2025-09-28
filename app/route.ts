import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

export async function POST(req: Request) {
  const form = formidable({ multiples: false, maxFileSize: (parseInt(process.env.UPLOAD_MAX_MB || '20') * 1024 * 1024) });

  return new Promise((resolve, reject) => {
    form.parse(req as any, async (err, fields, files) => {
      if (err) return resolve(NextResponse.json({ error: err.message }, { status: 400 }));

      const file = files.file as formidable.File;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.mkdir(uploadDir, { recursive: true });
      const newPath = path.join(uploadDir, file.originalFilename || file.newFilename);
      await fs.copyFile(file.filepath, newPath);
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${path.basename(newPath)}`;
      resolve(NextResponse.json({ url }));
    });
  });
}
