import { useState } from "react";
import { useAddUserMutation } from "../api/user"

const useAddUser = () => {
    const [_addUser,{isError:_isError,error:_error,...rest}] = useAddUserMutation();

    const [isError,setIsError] = useState();
    const [error,setError] = useState();

    async function addUser(form) {
        try {
            return await _addUser(form).unwrap();
        } catch (err) {
            setIsError(true);
            setError(err.message);
            throw err;
        }
    }

    return [addUser,{isError,error,...rest}];
}

export default useAddUser