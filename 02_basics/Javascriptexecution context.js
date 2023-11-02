// Javascript Execution context mainly comprises of 2 parts

/* 1) global execution context (this) which is {} and windows in different cases like windows in server running cases
   2) function Execution context
   3) eval execution context -> related to moongose

   {} = Memory Creation Phase
        execution phase

    let val1 = 10
    let val2 = 5
    function addNum(num1,num2){
        let total = num1+num2
        return total
    }
    let result1 = addNum(val1,val2)
    let result 2 = addNum(10,2)
    
    1) global execution -> {}
    2) Memory phase
        val1 = undefined
        val2 = undefined
        addnum = defination
        result1 = undefined
        result2 = undefined

    3) execution plan
     val1 = 10
     val2 = 5
     addNum = > new variable environment + execution thread
        1) Memory phase
            val1 = undefined
            val2 = undefined
            total = undefined
        2) execution context
            num 1 = 10
            num 2 = 5
            total = 15 => it returns the value to global execution context
        After it gets over it gets deleted
    
    result = 15
    result2 = new variable environment + thread
        1) Memory Phase
        2) Execution context
        Again return the value to global execution and after execution it gets deleted



Call stack -> 1) Global execution
              2) follows stack in LIFO format
              
