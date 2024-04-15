import { useState, useEffect } from "react";
import api from "../api";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await api.get("/api/notes/");
      setNotes(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await api.delete(`/api/notes/delete/${id}/`);
      if (response.status === 204) {
        alert("Note deleted!");
        fetchNotes();
      } else {
        alert("Failed to delete note.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/notes/", { content, title });
      if (response.status === 201) {
        alert("Note created!");
        fetchNotes();
      } else {
        alert("Failed to make note.");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-purple-400 text-2xl my-4">Notes</h2>
      </div>
      <h2 className="text-white text-2xl my-4">Create a Note</h2>
      <form onSubmit={createNote}>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="title" className="text-white text-md">
            Title:
          </label>
          <input
            className="w-56 border-0 mb-2 h-8 p-2 outline-none"
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="content" className="text-white text-md">
            Content:
          </label>
          <textarea
            className="w-56 border-0 mb-2 h-32 p-2 outline-none"
            id="content"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-56 text-white hover:text-purple-700 hover:bg-white border border-1 border-purple-200 h-10 cursor-pointer"
        ></input>
      </form>
    </div>
  );
}

export default Home;
