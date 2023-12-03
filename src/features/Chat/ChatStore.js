import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, uuidv4 } from 'utils';
import { loadable } from 'utils/loadable';
const initialState = {
  thread: 'Lisa',
  messages: loadable
};
export const getMessages = createAsyncThunk('chat/messagesReceived', async (user) => {
  const [error, response] = await api.get(`/messages.json?thread=${user}`);
  if (error) return false;
  return response.messages;
});
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    postMessage: {
      reducer(state, action) {
        const { id, author, message, time } = action.payload;
        state.messages.data.push({
          id,
          author,
          message,
          time
        });
      },
      prepare(author, message) {
        return {
          payload: {
            id: uuidv4(),
            author,
            message,
            time: JSON.stringify(new Date())
          }
        };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, ({ messages }) => {
      messages.loading = true;
    });
    builder.addCase(getMessages.fulfilled, ({ messages }, { payload }) => {
      messages.loading = false;
      if (payload) {
        messages.data = payload;
      } else {
        messages.error = true;
      }
    });
    builder.addCase(getMessages.rejected, ({ messages }) => {
      messages.loading = false;
      messages.error = true;
    });
  }
});
export const { postMessage } = chatSlice.actions;
export default chatSlice.reducer;
