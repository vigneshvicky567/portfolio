'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating pirate avatar accessory suggestions.
 *
 * - suggestPirateAvatarAccessories - A function that suggests accessories based on user's professional identity.
 * - PirateAvatarAccessorySuggestionInput - The input type for the suggestPirateAvatarAccessories function.
 * - PirateAvatarAccessorySuggestionOutput - The return type for the suggestPirateAvatarAccessories function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PirateAvatarAccessorySuggestionInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('A list of project descriptions from the user\'s portfolio.'),
  skills: z
    .array(z.string())
    .describe('A list of technical and soft skills possessed by the user.'),
});
export type PirateAvatarAccessorySuggestionInput = z.infer<
  typeof PirateAvatarAccessorySuggestionInputSchema
>;

const PirateAvatarAccessorySuggestionOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'Creative, sketch-style accessory or outfit modifications for a pirate avatar that reflect the user\'s professional identity. The suggestions should be detailed enough to inspire visual design.'
    ),
});
export type PirateAvatarAccessorySuggestionOutput = z.infer<
  typeof PirateAvatarAccessorySuggestionOutputSchema
>;

export async function suggestPirateAvatarAccessories(
  input: PirateAvatarAccessorySuggestionInput
): Promise<PirateAvatarAccessorySuggestionOutput> {
  return pirateAvatarAccessorySuggestionFlow(input);
}

const pirateAvatarAccessorySuggestionPrompt = ai.definePrompt({
  name: 'pirateAvatarAccessorySuggestionPrompt',
  input: { schema: PirateAvatarAccessorySuggestionInputSchema },
  output: { schema: PirateAvatarAccessorySuggestionOutputSchema },
  prompt: `You are an AI assistant specialized in creative character design for a "Doodle-Modern" or "Neo-brutalist Sketch" themed portfolio website.
Your task is to analyze a user's professional identity, specifically their project descriptions and skills, and suggest unique, sketch-style accessories or outfit modifications for a pirate avatar.

The suggestions should be visually descriptive and align with the whimsical, DIY, hand-drawn aesthetic of the website, using thick outlines and vibrant colors where appropriate.
Aim for creativity and metaphors that link professional expertise to pirate attire.

User's Project Descriptions:
{{#each projectDescriptions}}- {{this}}
{{/each}}

User's Skills:
{{#each skills}}- {{this}}
{{/each}}

Based on the above, suggest creative pirate avatar accessories or outfit modifications:

Suggestions: `,
});

const pirateAvatarAccessorySuggestionFlow = ai.defineFlow(
  {
    name: 'pirateAvatarAccessorySuggestionFlow',
    inputSchema: PirateAvatarAccessorySuggestionInputSchema,
    outputSchema: PirateAvatarAccessorySuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await pirateAvatarAccessorySuggestionPrompt(input);
    return output!;
  }
);
