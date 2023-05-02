import React, { useState } from "react";
const brand = ({ value }) => {
  return (
    <div id={"brand"} className="">
      Title: {value}
    </div>
  );
};
const title = ({ value }) => {
  return (
    <input
      className="p-3 border-neutral-400 border rounded-md"
      type="text"
      defaultValue={value}
      name="title"
      id="title"
    />
  );
};
const description = ({ value }) => {
  return (
    <textarea
      name="description"
      id="description"
      className="p-3 rounded-md border border-neutral-400  resize-none"
      rows={4}
      defaultValue={value}
    ></textarea>
  );
};
const FirstComp = ({ posts }) => {
  const [post, setPost] = useState(false);
  const handleSubmit = (e) => {
    let title = e.target[0].value;
    let description = e.target[1].value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    };
    fetch("https://dummyjson.com/products/add", requestOptions);
  };
  const localData = { brand, title, description };
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="gap-4 grid grid-cols-2"
      >
        {posts?.products.map((item, idx) => (
          <div id={item.id} key={idx} className="flex flex-col gap-3 ">
            {Object.keys(localData).map((it) => {
              // return <>{
              if (localData[it] && item[it]) {
                return React.createElement(localData[it], {
                  key: it,
                  value: item[it],
                });
              }
              // localData[it]}</>;
            })}
            {/* <div className="">Title: {it.brand}</div>
            <input onChange={(e) => setPost({ ...it, title: e.target.value })} className="p-3 border-neutral-400 border rounded-md" type="text" name="name" id="name" defaultValue={it.title} />
            <textarea name="desc" id="desc" className="p-3 rounded-md border border-neutral-400  resize-none" rows={4} defaultValue={it.description}></textarea> */}
          </div>
        ))}
        <div className="col-span-2 flex gap-2 justify-end ">
          <button
            className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white transition-all ease-in-out duration-300"
            type="submit"
          >
            Submit
          </button>
          <button
            className="rounded-md p-2 bg-blue-500 hover:bg-blue-700 text-white transition-all ease-in-out duration-300"
            type="reset"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstComp;
