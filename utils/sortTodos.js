function sortTodos(todos){

    // ? hadaf in hast ke dakhel in 4ta key bashe ke har kodom in ha value dareh ke yek array hast. 
    
    // ? pas masaln injor mishe todo:[...], inprogress:[...] baray har kodom mikhay injori bokoni. 

    const sortedData = {};

    // * in todos ye array az object hast pas migi bia map bezan va har kodom az on object ha ro begir. 

    todos.map(todo=> {

        // inja rafti gofti ke aya ba in esme hast key ya na agar nist bia yeki dorost bokon va bezar ye array khali. 
        if(!sortedData[todo.status]) sortedData[todo.status]=[];


        // inja gofti boro har kodom az key har ro begir va push kon in todo ke yek object hast.
        sortedData[todo.status].push(todo); 

    })

    return sortedData;
}

export {sortTodos};