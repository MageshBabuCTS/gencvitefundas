import { useState } from "react";

function InputComp() {
const [filterText,setFilterText] = useState('');

return (
    <form>
        <label>
            <input type="text" value={filterText}  onChange={(e) => setFilterText(e.target.value)} />
        </label>
    </form>
);

}

export default InputComp;