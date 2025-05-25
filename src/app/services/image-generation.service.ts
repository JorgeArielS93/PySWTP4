import { Injectable } from '@angular/core';
import { GoogleGenAI, Modality } from '@google/genai';

@Injectable({
  providedIn: 'root',
})
export class ImageGenerationService {
  private ai = new GoogleGenAI({ apiKey: 'AIzaSyBeDAgW33mQ9N6uR0BeCi1HBal9MU9XZN4' });

  async generateImage(prompt: string): Promise<string | null> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.0-flash-preview-image-generation',
        contents: prompt,
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      // Manejo seguro de la respuesta
      const candidates = response?.candidates;
      const parts = candidates?.[0]?.content?.parts;

      if (!parts) {
        console.warn('No se encontraron partes de contenido en la respuesta.');
        return null;
      }

      const imagePart = parts.find((p: any) => p?.inlineData?.data);

      if (!imagePart || !imagePart.inlineData?.data) {
        console.warn('No se encontró una imagen válida en la respuesta.');
        return null;
      }

      return `data:image/png;base64,${imagePart.inlineData.data}`;
    } catch (error) {
      console.error('Error al generar la imagen:', error);
      return null;
    }
  }
}