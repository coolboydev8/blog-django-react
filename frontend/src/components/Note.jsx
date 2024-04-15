import React from "react";

const Note = ({ note, onDelete }) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="flex flex-col justify-center items-center border border-1 border-purple-300 p-4 m-2">
      <p className="text-white text-lg my-2 font-bold ms-0 me-auto underline underline-offset-2">
        {note.title}
      </p>
      <p className="text-white text-sm my-2 ms-0 me-auto">{note.content}</p>
      <p className="text-white text-xs my-2 ms-auto me-0">{formattedDate}</p>
      <button
        className="w-80 text-white hover:text-purple-700 hover:bg-white border border-1 border-purple-200 h-8 text-sm cursor-pointer mt-4"
        onClick={() => onDelete(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
