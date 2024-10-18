import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const width = Number(searchParams.get('width')) || 1200;
  const height = Number(searchParams.get('height')) || 630;

  const background = searchParams.get('background') || 'white';
  const color = searchParams.get('color') || 'black';

  return new ImageResponse(
    <div
      style={{
        fontSize: 40,
        background,
        color,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {width} x {height}
    </div>,
    {
      width,
      height,
      headers: {
        'Content-Type': 'image/png',
      },
    }
  );
}