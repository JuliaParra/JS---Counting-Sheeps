const list1 = [true, true,true, false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
const list2 = [false, false, false ];

 export function countSheeps(list) {
    let sheepCount = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === true) {
            sheepCount++;
        }
    }

    if (sheepCount > 0) {
        return `There are ${sheepCount} sheep in total`;

    }else{
        return `the wolf ate the sheep`;
    }
}


    console.log(countSheeps(list1));
    console.log(countSheeps(list2));
 