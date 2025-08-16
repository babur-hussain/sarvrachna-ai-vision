# Chatbot Setup Guide

## Current Implementation

The chatbot is currently implemented as a floating button in the bottom-right corner of the website. It uses dummy credentials and predefined responses for demonstration purposes.

## Components

### 1. FloatingChatbot (`src/components/sections/FloatingChatbot.tsx`)
- Floating chat button that opens a drawer
- Handles user interactions and message display
- Currently uses dummy responses

### 2. Configuration (`src/config/chatbot.ts`)
- Centralized configuration for all chatbot settings
- Easy to update for live integration
- Contains dummy API credentials

### 3. LiveChatSection (`src/components/sections/LiveChatSection.tsx`)
- Promotional content about AI capabilities
- No longer contains hardcoded chatbot

## Features

- ✅ Floating chat button (bottom-right)
- ✅ Drawer-based chat interface
- ✅ Predefined quick questions
- ✅ Typing indicators
- ✅ Message history
- ✅ Responsive design
- ✅ Error handling

## Future Live Integration

### 1. Update API Configuration

In `src/config/chatbot.ts`, replace the dummy API configuration:

```typescript
api: {
  baseUrl: "https://your-live-api-endpoint.com/chat",
  apiKey: "your_actual_api_key",
  model: "gpt-4", // or your preferred model
  temperature: 0.7,
  maxTokens: 1000,
}
```

### 2. Implement Real API Calls

Replace the `simulateApiCall` function in `src/config/chatbot.ts`:

```typescript
export const makeApiCall = async (message: string): Promise<string> => {
  try {
    const response = await fetch(chatbotConfig.api.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${chatbotConfig.api.apiKey}`,
      },
      body: JSON.stringify({
        message,
        model: chatbotConfig.api.model,
        temperature: chatbotConfig.api.temperature,
        maxTokens: chatbotConfig.api.maxTokens,
      }),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    const data = await response.json();
    return data.response || data.message;
  } catch (error) {
    console.error('Chatbot API error:', error);
    throw error;
  }
};
```

### 3. Update FloatingChatbot Component

In `src/components/sections/FloatingChatbot.tsx`, replace:

```typescript
// Replace this line:
const response = await simulateApiCall(message);

// With this:
const response = await makeApiCall(message);
```

### 4. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CHATBOT_API_URL=https://your-api-endpoint.com
VITE_CHATBOT_API_KEY=your_api_key_here
VITE_CHATBOT_MODEL=gpt-4
```

Then update the config to use environment variables:

```typescript
api: {
  baseUrl: import.meta.env.VITE_CHATBOT_API_URL || "https://api.sarvrachna.ai/chat",
  apiKey: import.meta.env.VITE_CHATBOT_API_KEY || "dummy_api_key_12345",
  model: import.meta.env.VITE_CHATBOT_MODEL || "gpt-4",
  // ... rest of config
}
```

## Customization Options

### UI Customization
- Colors: Update `ui.primaryColor`, `ui.secondaryColor`, `ui.accentColor`
- Position: Change `ui.position` (currently "bottom-right")
- Button size: Modify `ui.buttonSize`
- Drawer height: Adjust `ui.drawerHeight`

### Feature Toggles
- Quick questions: `features.quickQuestions`
- Typing indicator: `features.typingIndicator`
- Message history: `features.messageHistory`
- File upload: `features.fileUpload` (future)
- Voice chat: `features.voiceChat` (future)

### Response Customization
- Greeting message: `responses.greeting`
- Fallback response: `responses.fallback`
- Predefined Q&A: `responses.predefined`

## Testing

1. Start the development server: `npm run dev`
2. Navigate to the website
3. Look for the floating chat button in the bottom-right corner
4. Click to open the chatbot
5. Test predefined questions and custom messages

## Security Considerations

- Never commit API keys to version control
- Use environment variables for sensitive data
- Implement rate limiting on your API
- Validate user input before sending to AI services
- Consider implementing user authentication for chat history

## Support

For questions about the chatbot implementation or live integration, refer to the code comments or create an issue in the repository.
