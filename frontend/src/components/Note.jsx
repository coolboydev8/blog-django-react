import React from "react";

const Note = ({ note, onDelete }) => {
  const Date = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="flex flex-col justify-center items-center border border-1 border-purple-300 p-4 m-2">
      <p className="text-white text-lg my-2 font-bold">{note.title}</p>
      <p className="text-white text-md my-2">{note.content}</p>
      <p className="text-white text-sm my-2">{Date}</p>
      <button
        className="w-56 text-white hover:text-purple-700 hover:bg-white border border-1 border-purple-200 h-10 cursor-pointer"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
