"use client";
import { useState, useEffect } from "react";

export default function Home() {
   // State to store current input value
  const [note, setNote] = useState("");

  // State to store list of notes
  const [notes, setNotes] = useState([]);

  // Load saved notes from localStorage 
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Function to add a new note
  const addNote = () => {
    if (note.trim() === "") return;

    // Add new note to existing notes array
    setNotes([...notes, note]);
    setNote("");
  };

  // Function to delete a note by index
  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);

    setNotes(newNotes); // Update state with remaining notes
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        
        {/* App Title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📝 Notes App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={note}
            onChange={(e) => setNote(e.target.value)} // Update input state
            placeholder="Write a note..."
          />
          <button
            onClick={addNote} // Call addNote function on click
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
              {/* Display note text */}
              <span className="text-gray-700">{n}</span>

              {/* Delete button */}
              <button
                onClick={() => deleteNote(i)} // Delete specific note
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