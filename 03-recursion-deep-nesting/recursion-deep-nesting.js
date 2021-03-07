function recursionDeepNesting(array){
    if(Array.isArray(array)){
        const result = array.length ? array.map((value) => {
            return Array.isArray(value) ? 1 + recursionDeepNesting(value) : 1;
        }) : [1];
    
        return Math.max(...result);
    }

    return 0;
}

module.exports = recursionDeepNesting;
