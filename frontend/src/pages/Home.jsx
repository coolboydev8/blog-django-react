import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import TagsComponent from "../components/TagsComponent";

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
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <div className="flex flex-col w-[92%] lg:w-64 me-0 lg:me-8 lg:border-r-2 lg:border-pink-300 lg:pe-10 lg:pb-10">
        <h2 className="text-purple-400 text-2xl mb-4">Create a Note</h2>
        <form
          onSubmit={createNote}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-left justify-center">
            <label
              htmlFor="title"
              className="text-white text-md mb-1 text-left"
            >
              Title:
            </label>
            <input
              className="w-full lg:w-64 border-0 mb-2 h-8 p-2 outline-none text-sm"
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="flex flex-col items-left justify-center">
            <label
              htmlFor="content"
              className="text-white text-md mb-1 text-left"
            >
              Content:
            </label>
            <textarea
              className="w-full lg:w-64 border-0 mb-3 h-32 p-2 outline-none text-sm"
              id="content"
              name="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <TagsComponent />
          <input
            type="submit"
            value="Submit"
            className="w-full lg:w-64 text-white hover:text-purple-700 hover:bg-white border border-1 border-purple-200 h-10 cursor-pointer text-sm"
          ></input>
        </form>
      </div>
      <div className="flex flex-col">
        <h2 className="text-purple-400 text-2xl my-4">Notes</h2>
        <div className="flex flex-row flex-wrap items-start justify-center max-w-[880px] mx-auto">
          {notes.map((note) => (
            <Note note={note} onDelete={deleteNote} key={note.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
