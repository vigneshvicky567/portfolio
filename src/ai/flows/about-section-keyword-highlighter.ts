'use server';
/**
 * @fileOverview A Genkit flow for analyzing text in an 'About' section to identify and suggest keywords for highlighting.
 *
 * - suggestHighlightKeywords - A function that handles the keyword suggestion process.
 * - SuggestHighlightKeywordsInput - The input type for the suggestHighlightKeywords function.
 * - SuggestHighlightKeywordsOutput - The return type for the suggestHighlightKeywords function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SuggestHighlightKeywordsInputSchema = z.object({
  aboutSectionText: z
    .string()
    .describe("The text content from the user's 'About' section in their portfolio."),
});
export type SuggestHighlightKeywordsInput = z.infer<typeof SuggestHighlightKeywordsInputSchema>;

const SuggestHighlightKeywordsOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe(
      "A list of important skills, experiences, or achievements identified in the 'About' section text, to be highlighted."
    ),
});
export type SuggestHighlightKeywordsOutput = z.infer<typeof SuggestHighlightKeywordsOutputSchema>;

export async function suggestHighlightKeywords(
  input: SuggestHighlightKeywordsInput
): Promise<SuggestHighlightKeywordsOutput> {
  return suggestHighlightKeywordsFlow(input);
}

const highlightKeywordsPrompt = ai.definePrompt({
  name: 'highlightKeywordsPrompt',
  input: { schema: SuggestHighlightKeywordsInputSchema },
  output: { schema: SuggestHighlightKeywordsOutputSchema },
  prompt: `You are an AI assistant specializing in analyzing professional portfolio 'About' sections.
Your task is to identify and extract the most important keywords representing skills, experiences, and achievements from the provided text.
These keywords will be used to dynamically highlight the user's core strengths on their website.

Consider what a recruiter or potential employer would find most relevant and impactful.
Keywords should be concise and directly reflect a skill, experience, or achievement.
Examples of good keywords: "11 years", "Microservices", "cloud development", "Munich", "React", "Node.js", "team leadership", "project management".

Provided 'About' section text:
{{{aboutSectionText}}}

Based on the text above, provide a JSON object containing a 'keywords' array. Each element in the 'keywords' array should be a string representing a distinct keyword or short phrase to highlight. Do not include any other explanatory text or conversational filler.`,
});

const suggestHighlightKeywordsFlow = ai.defineFlow(
  {
    name: 'suggestHighlightKeywordsFlow',
    inputSchema: SuggestHighlightKeywordsInputSchema,
    outputSchema: SuggestHighlightKeywordsOutputSchema,
  },
  async (input) => {
    const { output } = await highlightKeywordsPrompt(input);
    if (!output) {
      throw new Error('Failed to generate highlight keywords.');
    }
    return output;
  }
);
