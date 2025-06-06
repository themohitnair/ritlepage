import { SubmissionParams } from './types'

export async function generateTitlePage(params: SubmissionParams): Promise<Blob> {
  const response = await fetch('/api/generateTitlePage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
  });

  if (!response.ok) {
      throw new Error('Failed to generate title page');
  }
  return await response.blob();
}
