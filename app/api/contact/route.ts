import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const data = await request.json();
        const { name } = data;
        console.log('Received data:', data);
        const responseMessage = `Thank you for your interest, ${name}`;
        return NextResponse.json({ message: responseMessage });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Error processing request' },
            { status: 500 },
        );
    }
}
