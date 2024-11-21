import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const RichTextEditor = ({input, setInput}) => {
  const quillRef = useRef(null);

    const handleChange = (content) => {
        setInput({...input, description:content});
    }
   
  return <ReactQuill ref={quillRef} theme="snow" value={input.description} onChange={handleChange} />;
}
export default RichTextEditor