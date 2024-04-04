import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({ data , edit}) {
    const modules = {
        toolbar: edit
    };

    return <ReactQuill theme="snow" value={data} modules={modules} readOnly={!edit} />;
}

export default Editor;