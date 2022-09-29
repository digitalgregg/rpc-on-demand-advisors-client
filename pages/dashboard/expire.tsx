import React from "react";

const Expire = () => {
    const someDate = new Date();
    const numberOfDaysToAdd = 30;
    const result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    const getDate = new Date(result).toDateString();

    const formate = new Date(
        "Wed Sep 28 2022 23:50:54 GMT+0600 (Bangladesh Standard Time)"
    );
    const res = formate.setDate(formate.getDate());
    const data = new Date(res).toDateString();
    console.log(data, "(((((((()))))))))))");

    return (
        <>
            Subscription expire
            <br />
            <button>Add</button>
        </>
    );
};

export default Expire;
