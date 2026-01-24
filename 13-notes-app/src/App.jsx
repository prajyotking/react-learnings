import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]; //CopyTask-----(taskCopyer)----->Task X! No its CopyTask(textCopy Machine for)---> Inputs
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const delTask = [...task];
    delTask.splice(idx, 1)
    setTask(delTask)

    

    
  };

  return (
    <div className="bg-black lg:h-screen sm:max-h-full lg:flex text-white">
      <form
        onSubmit={submitHandler}
        className="p-10 flex flex-col lg:w-1/2 items-start  gap-4"
      >
        <h1 className="font-bold text-3xl">Add Notes</h1>
        {/* Tittle input ------PART-------- */}

        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="border-2 font-medium p-5 rounded-xl w-full"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
        />

        {/* Descrption input ------PART-------- */}

        <textarea
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          className="border-2 font-medium h-42 py-2 px-5 rounded-2xl w-full"
          type="text"
          placeholder="write details"
          value={detail}
        />

        <button className="bg-white text-black font-medium px-5 py-2 rounded w-full active:bg-gray-400">
          + Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="font-bold text-3xl">Your Notes</h1>
        {/*  */}
        <div className="flex flex-wrap overflow-auto h-full mt-5 gap-5">
          {task.map((elem, idx) => {
            return (
             //------------------------------------NOTES_CARD-----------------------------------------
              <div key={idx}  className='h-52 w-40 relative rounded-xl bg-cover  text-black p-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>

                {/* ------------Task_Title---------------- */}
                <h3 className="font-bold text-xl leading-tight">
                  {elem.title}
                </h3>
                
                {/* ------------Task_Detail--------------- */}
                <p className="mt-2">{elem.detail}</p>

                {/* -------------Delete_Button------------ */}
                <button
                  onClick={()=>{
                    deleteNote(idx)
                  }}
                  className="bg-red-500 absolute bottom-3 right-11 rounded active:bg-red-400 text-white w-18"
                >
                  Delete
                </button>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
