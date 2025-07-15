import { NextRequest, NextResponse } from 'next/server';
import { validateEmailTrackingRequest } from '@/lib/email-tracking';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request
    const validatedRequest = validateEmailTrackingRequest(body);
    if (!validatedRequest) {
      return NextResponse.json(
        { success: false, error: 'Invalid request format. Required: subject, source_page' },
        { status: 400 }
      );
    }
    
    // Log to console for now (can be replaced with external service)
    console.log('Email tracking:', {
      subject: validatedRequest.subject,
      source_page: validatedRequest.source_page,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email tracking logged',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track email', timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}