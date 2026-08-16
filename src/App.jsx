import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [tag, setTag] = useState('');
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() && !details.trim()) return;
    
    setNotes([...notes, { title, details, tag: tag || 'General' }]);
    setTitle('');
    setDetails('');
    setTag('');
  };

  const deleteNote = (idx) => {
    const copyNote = [...notes];
    copyNote.splice(idx, 1);
    setNotes(copyNote);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Notes Studio
          </h1>
          <p className="text-slate-400 text-sm">Capture ideas, structure thoughts, and manage your daily notes effortlessly.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <form onSubmit={submitHandler} className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 focus-within:border-indigo-500/50 transition-all duration-300">
              <h2 className="text-lg font-semibold text-slate-200">Create New Note</h2>

              <div>
                <input
                  type="text"
                  placeholder="e.g. Q3 Design Roadmap"
                  className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <input 
                  type="text" 
                  value={tag} 
                  placeholder="e.g. Work, Personal, Ideas" 
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <textarea
                  name="note"
                  rows={6}
                  placeholder="Jot down details, checklists, links, or key insights..."
                  className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all text-sm leading-relaxed"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 active:scale-[0.99] transition-all duration-200 text-sm"
              >
                Add Note
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-lg font-semibold text-slate-200">All Notes</h2>
              <span className="text-xs text-slate-500 font-mono">{notes.length} Saved</span>
            </div>

            {notes.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl bg-slate-900/30 text-slate-500">
                <p className="text-sm">No notes yet. Fill out the form on the left to add your first note!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {notes.map((elem, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-base text-slate-100 line-clamp-1">
                          {elem.title || 'Untitled Note'}
                        </h3>
                        <span className="text-xs text-slate-500 font-mono shrink-0">Aug 16</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-wrap">
                        {elem.details}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex justify-between items-center">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {elem.tag}
                      </span>
                      <button 
                        onClick={() => deleteNote(idx)} 
                        className="text-xs text-slate-500 hover:text-red-400 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
                  
        </div>

      </div>
    </div>
  )
}

export default App