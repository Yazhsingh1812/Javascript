// import sum, {a,b} from './imp.js' ;
import * as Session from '../Testing/Jas/session.js'
console.log(Session.a+b)


// console.log(a+b)
async function load()
{
    const s= await import('./Jas/session.js')
    console.log(s.a)

}
load()
