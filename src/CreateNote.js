import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Note from "./Note";


const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [addItem, setAddItem] = useState([]);
    const [expand, setExpand] = useState(false);

    const InputEvent = (e) => {
        const { name, value } = e.target;
        setNote((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            }
        })
        // console.log(note);
    }

    const addEvnt = () => {
        if (note.content !== "" && note.title !== "") {
            setAddItem((previousValue) => {
                return [...previousValue, note]
            })

            setNote({
                title: "",
                content: ""
            });
        }
    }


    const onDelete = (id) => {
        setAddItem((previousValue) => {
            return previousValue.filter((currval, index) => {
                return index !== id;
            })
        })
    }

    const expandIt=()=>{
        setExpand(true);
    }

    const backToNormal=()=>{
        setExpand(false);
    }


    return (
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
                    {expand ? <input type="text" value={note.title} onChange={InputEvent} name="title" placeholder="title" autoComplete="off" /> : null}
                    <textarea rows="" column="" value={note.content} onChange={InputEvent} name="content" placeholder="Write a note..." onClick={expandIt}></textarea>
                    {expand ? <Button onClick={addEvnt}>
                        <AddIcon className="plus_sign" />
                    </Button> : null}

                    <ol>
                        {addItem.map((val, index) => {
                            return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
                        })}
                    </ol>

                </form>
            </div>
        </>
    )
}

export default CreateNote
