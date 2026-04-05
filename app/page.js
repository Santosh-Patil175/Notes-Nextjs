"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📝 Notes App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write a note..."
          />
          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Notes List */}
        <ul className="space-y-3">
          {notes.map((n, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-700">{n}</span>
              <button
                onClick={() => deleteNote(i)}
                className="text-red-500 hover:text-red-700 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}