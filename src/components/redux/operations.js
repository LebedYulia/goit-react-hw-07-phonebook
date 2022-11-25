import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://637f47f35b1cc8d6f93fda57.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, number}, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name, number} );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteTask",
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );