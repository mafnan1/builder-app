import React, { useState } from "react";

const FirstComp = ({ posts }) => {
  const [post, setPost] = useState(false)
  const handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    }
    fetch("https://dummyjson.com/products/add", requestOptions)
  }
  return (
    <div
      className="text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto"
    // onClick={() => {
    //   datatrigger({ test: "param1" });
    //   dispatch(
    //     showConsole("data from comp as paylod to slice " + test.current++)
    //   );
    // }}
    >
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }} className="gap-4 grid grid-cols-2">
        {posts?.products.map((it) => (
          <div id={it.id} className="flex flex-col gap-3 ">
            <div className="">Title: {it.brand}</div>
            <input onChange={(e) => setPost({ ...it, title: e.target.value })} className="p-3 border-neutral-400 border rounded-md" type="text" name="name" id="name" defaultValue={it.title} />
            <textarea name="desc" id="desc" className="p-3 rounded-md border border-neutral-400  resize-none" rows={4} defaultValue={it.description}></textarea>
          </div>
        ))}
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
      </form>

    </div>
  );
};

export default FirstComp;
