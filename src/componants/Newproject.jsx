import { useRef } from "react";
import Modal from "./ErrorModal";
import Input from "./Input";

export default function Newproject({onAdd, onCancle}) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation....
    if (enteredTitle.trim() === '' ||  enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
        modal.current.open();
        return;
    }

    onAdd({
        title:enteredTitle,
        description:enteredDescription,
        duedate:enteredDueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4" >Invalid input</h2>
    </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancle}>
            Cancel
          </button>
        </li>
        <li>
          <button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Titel" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
}
