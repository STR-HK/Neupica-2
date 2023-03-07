export let FlexDirection = {
    Row: 'row', // left to right in ltr; right to left in rtl
    RowReverse: 'row-reverse', // right to left in ltr; left to right in rtl
    Column: 'column', // same as row but top to bottom
    ColumnReverse: 'column-reverse', // same as row-reverse but bottom to top
}

export let FlexWrap = {
    NoWrap: 'nowrap', // all flex items will be on one line
    Wrap: 'wrap', // flex items will wrap onto multiple lines, from top to bottom.
    WrapReverse: 'wrap-reverse', //flex items will wrap onto multiple lines from bottom to top.
}

export let JustifyContent = {
    FlexStart: 'flex-start', // items are packed toward the start of the flex-direction.
    FlexEnd: 'flex-end', // items are packed toward the end of the flex-direction.
    Start: 'start', // items are packed toward the start of the writing-mode direction.
    End: 'end', // items are packed toward the end of the writing-mode direction.
    Left: 'left', // items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
    Right: 'right', // items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
    Center: 'center', // items are centered along the line
    SpaceBetween: 'space-between', // items are evenly distributed in the line; first item is on the start line, last item on the end line
    SpaceAround: 'space-around', // items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides.
    // The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
    SpaceEvenly: 'space-evenly', // items are distributed so that the spacing between any two items (and the space to the edges) is equal.
}

export let AlignItems = {
    FlexStart: 'flex-start',
    FlexEnd: 'flex-end',
    Center: 'center',
    Strech: 'stretch',
    FirstBaseline: 'first baseline',
    LastBaseline: 'last baseline',
    BaseLine: 'baseline',
    Start: 'start',
    End: 'end',
    SelfStart: 'self-start',
    SelfEnd: 'self-end',
}

export let AlignContent = {
    FlexStart: 'flex-start',
    FlexEnd: 'flex-end',
    Center: 'center',
    Strech: 'stretch ',
    SpaceBetween: 'space-between',
    SpaceAround: 'space-around',
    SpaceEvenly: 'space-evenly',
    Start: 'start',
    End: 'end ',
    Baseline: 'baseline',
    FirstBaseline: 'first baseline',
    LastBaseline: 'last baseline',
}

//
// export class Flex {
//     constructor() {
//         this.name = 'Flex'
//
//         this.FlexDirection = {
//             Row: 'row', // left to right in ltr; right to left in rtl
//             RowReverse: 'row-reverse', // right to left in ltr; left to right in rtl
//             Column: 'column', // same as row but top to bottom
//             ColumnReverse: 'column-reverse', // same as row-reverse but bottom to top
//         }
//
//         this.FlexWrap = {
//             NoWrap: 'nowrap', // all flex items will be on one line
//             Wrap: 'wrap', // flex items will wrap onto multiple lines, from top to bottom.
//             WrapReverse: 'wrap-reverse', //flex items will wrap onto multiple lines from bottom to top.
//         }
//
//         this.JustifyContent = {
//             FlexStart: 'flex-start', // items are packed toward the start of the flex-direction.
//             FlexEnd: 'flex-end', // items are packed toward the end of the flex-direction.
//             Start: 'start', // items are packed toward the start of the writing-mode direction.
//             End: 'end', // items are packed toward the end of the writing-mode direction.
//             Left: 'left', // items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
//             Right: 'right', // items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
//             Center: 'center', // items are centered along the line
//             SpaceBetween: 'space-between', // items are evenly distributed in the line; first item is on the start line, last item on the end line
//             SpaceAround: 'space-around', // items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides.
//             // The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
//             SpaceEvenly: 'space-evenly', // items are distributed so that the spacing between any two items (and the space to the edges) is equal.
//         }
//
//         this.AlignItems = {
//             FlexStart: 'flex-start',
//             FlexEnd: 'flex-end',
//             Center: 'center',
//             Strech: 'stretch',
//             FirstBaseline: 'first baseline',
//             LastBaseline: 'last baseline',
//             BaseLine: 'baseline',
//             Start: 'start',
//             End: 'end',
//             SelfStart: 'self-start',
//             SelfEnd: 'self-end',
//         }
//
//         this.AlignContent = {
//             FlexStart: 'flex-start',
//             FlexEnd: 'flex-end',
//             Center: 'center',
//             Strech: 'stretch ',
//             SpaceBetween: 'space-between',
//             SpaceAround: 'space-around',
//             SpaceEvenly: 'space-evenly',
//             Start: 'start',
//             End: 'end ',
//             Baseline: 'baseline',
//             FirstBaseline: 'first baseline',
//             LastBaseline: 'last baseline',
//         }
//
//     }
// }