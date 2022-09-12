import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, delContacts, addContacts } from '../../shared/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getContacts();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addItems = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isDublicate = contacts.items.find(
        item => item.name === data.name || item.phone === data.phone
      );
      if (isDublicate) {
        alert(
          `Name Such ${data.name} or phone ${data.phone} is already in the phone book!`
        );
        return false;
      }
    },
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/del',
  async (id, { rejectWithValue }) => {
    try {
      const result = await delContacts(id);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
