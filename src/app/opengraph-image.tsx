import { readFile } from 'fs/promises';
import { join } from 'path';
import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'edge', // Usa la función como un middleware en el edge
};

export default async function OpengraphImage() {
    const logoData = await readFile(join(process.cwd(), 'public', 'KODIKAS.png'));
    const logoBase64 = logoData.toString('base64'); // Convierte la imagen a Base64
    const logoSrc = `data:image/png;base64,${logoBase64}`; // Define el formato de la imagen

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                }}
            >
                <img
                    src={logoSrc}
                    alt="KODIKAS"
                    className="w-1/2 h-auto object-cover "
                />
            </div>
        ),
        {
            width: 1200, // Ancho de la imagen OG
            height: 630, // Alto de la imagen OG
        }
    );
}
