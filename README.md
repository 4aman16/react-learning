# react-learning


# Food-ordering
/**
 * 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant container
 *  - Restaurant card
 *   - Image
 *   - 
 *   - 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 * 
 * 
 * 
 */

 There are two types of export and import

 - Default Export / Import

 export default Component
 import Component from path

 Component can be named export also


 - Named Export/Import

 export const variable = "test"
 import {variable} fom path


 Combination also works like named export with default one


 export const variable1 = "test"
 const variable2 = "test"
 export default variable2


# React Hooks

It is similar to JS utility function written by facebook in utility 


- useState() - Super powerful state variable
- useEffect()

# Two types of Rounting

- Client side routing : All the components are loaded so when we go to any other page it just calls the component it doesn't make any network call.
- Server side routing : Make a network call and page comes from network call.