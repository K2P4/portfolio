import { extractText, getDocumentProxy } from 'unpdf';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const callOpenRouter = async ({ prompt, model = 'deepseek/deepseek-v3.2', base64Data = null, isEmbedding = false }) => {
  if (!OPENROUTER_API_KEY) throw new Error('OpenRouter API Key missing');

  const endpoint = isEmbedding ? 'embeddings' : 'chat/completions';
  const body = isEmbedding
    ? { model, input: prompt }
    : {
        model,
        messages: [
          {
            role: 'user',
            content: [{ type: 'text', text: prompt }, ...(base64Data ? [{ type: 'image_url', image_url: { url: `data:application/pdf;base64,${base64Data}` } }] : [])],
          },
        ],
      };

  const response = await fetch(`https://openrouter.ai/api/v1/${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (data.error) throw new Error(data.error.message || 'OpenRouter Error');
  return isEmbedding ? data.data[0].embedding : data.choices?.[0]?.message?.content || '';
};

export const extractPdfText = async (file) => {
  try {
    const buffer = await file.arrayBuffer();
    const pdf = await getDocumentProxy(new Uint8Array(buffer));
    const { text } = await extractText(pdf, { mergePages: true });
    return text || '';
  } catch (error) {
    console.error('PDF extraction failed:', error);
    throw new Error('Could not extract text from PDF');
  }
};

export const chunkText = (text, maxChars = 1000) => {
  if (!text) return [];
  const words = text.split(/\s+/);
  const chunks = [];
  let currentChunk = '';

  for (const word of words) {
    if (currentChunk.length + word.length + 1 > maxChars) {
      if (currentChunk) chunks.push(currentChunk);
      currentChunk = word;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + word;
    }
  }
  if (currentChunk) chunks.push(currentChunk);
  return chunks;
};

export const getEmbedding = async (text) => {
  try {
    return await callOpenRouter({
      prompt: text,
      model: 'nvidia/llama-nemotron-embed-vl-1b-v2:free',
      isEmbedding: true,
    });
  } catch (error) {
    throw new Error('Embedding failed');
  }
};

export const generateChatResponse = async (question, context) => {
  const prompt = `You are a friendly and polite AI assistant representing Thura and this portfolio. 

Follow these instructions to craft the perfect response:
1. Tone: Warm, engaging, and highly professional. Speak as if you are a personal representative of Thura.
2. Language: Always respond in the SAME language used by the user. If the user asks in Myanmar (Burmese), respond in Myanmar (Burmese) clearly and naturally.
3. Length: Be very concise and to the point. Keep your answers short (maximum 2-3 sentences) unless the user explicitly asks for detailed information. Avoid long paragraphs.
4. Format: Use clear language. Break up information into short bullet points if listing things.
5. Source Material: Answer the user's question ONLY using the information provided in the CONTEXT below.
6. Missing Info: If the CONTEXT does not contain the answer, warmly let the user know that you don't have that specific information on hand, but they can reach out to Thura directly. 
7. Accuracy: Do NOT guess, invent, or hallucinate facts that are outside the provided context.

CONTEXT:
${context ? context : 'No relevant information found in the knowledge base.'}

USER QUESTION:
${question}`;

  try {
    return await callOpenRouter({ prompt });
  } catch (error) {
    return await callOpenRouter({ prompt, model: 'nvidia/nemotron-3-super-120b-a12b:free' });
  }
};
