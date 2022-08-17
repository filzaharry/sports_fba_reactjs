import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'

export default function FinishPayment() {
  return (
    <>
         <div className='m-10 min-h-full pt-52'>
             <img className='mx-auto w-50 py-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAALS0lEQVR4nNWbf2yVVxnHP897f/S2QOG25dfaC4WxFZfF4jKBubll2Vb8UTKIGcaYafQfjXFLFhMHOllZokEjsqh/LGr0j03NWNymrIvgOuYygVVn9iPb6ChltBQkUgqllN723vfxj3vf2/P+uvf2B8U9yUnfe97nnPN8v+c5P9+nQpmyb0RTsQy7LWgRAYEOS9l6W7V0eXW7RzQVjbEbpUVgXlidmv8rRdrVsGd15xl/LwIdWWXr6oTfNq8Ua7sg+0Y0VZHhTaBGBKx8QREGYxbNa6ukz9HtHtFULJrT9Rptijc/zBAzP4iMICLyz4OSpXmVYVuQWMVeOhLPsBuosQzw+eekrewydWMxdivUOIYEJVtzhpvJ1nB9J0lQknzKt2+8S2rEbVuQRMshQKDFyjdiMdFgnowNpq4qLUGu6tIJayjoRYBrCH7PEHGX1wDbgqQsArzgjSGA5TFbcYP2YgoFP2F0eAHPSy8RhR8TZYo1B5Q5BCLQ4QIvhSGACPtMXVvpKOXKU07OkPHkm0MCJjxUcdsWJGVNgq8NaZNlcciCpOkBljAQgTXNVXLS0e0Z1SZbOAQkYXIeAJA81Umy7yBij3N5wQoGGu9kvLLWZawJ1JtvTIYDmQxrrjNsC5KyPOC2aumKWjSL8IwFQwJDEWGPFzzAyoR0kaVZ4RmFodBeDEiJC73U9ewnMj6MlU0zZ+AIDW/9jkh6qKRH5EEjuTb3xMoAb5J3xeXIJb2GKPejPAbEg3QWHd9P8tTrvvzhuhs4vfoLfg/IpT6Fh8bj7F8tcnGydpU1Cc6ErJ4jp4Afv5dWRNkZpJO4eJKgQVJ1vjs3sfq7qy8eZ01K5NxU7SprCMykWBmeVMD2JMmOk7h0OqRMGvC7vA0PTQc8zKIHmGIHzISV53sQOxOsH61wbZsdb7Dj7J+uLbNOwJjFV4Ly5507QtgakY1U5LzEzCy5wpcns0bAvy/pNVHhflV2eG2PZkaYP/BuaNlstDJwDpAx7gKen45dLgKOZbTVstluQbNCvLDU4D9smIcQ39IUopv1NO7o1Z0+jJVNhxqZjcRzHqDufT/KzrdV//5xkcHJgDalMAkey2hrxGavBZ80wXsNDgXv2aXZ5Ma6c8ixzXwmDkTxkQEWnvqHtzZXGkssCGunKZ7mrSNpve+oavVUCCh4QMTm0aBNgdecwHzv9jRgu4rHMwBEsyw//jyWjhfdkVyuWuIfAhO/U6LssdPwQTpXc8CJMSvwoSi/t+LsTIlcdqoxl8EmFzANAR4C1uxZG39Pm3mOfurEi8y9+GEAze50qWqpr+4w4k1+jPyIwrUqbLfH6ehTrfQRIFD09qRYTwcapPjIcc79tkL9yQ4WnXm9JHhQLlctLq9N43cRucUe42EfAVi52TnMhUPng4AyXi8oXHrk39f3v0x9/4HiZuYlXZFkLFrlvjAJGmKmbSH2F3SFL/sIWB6VF7BoBTqBsSBjQse5B7zXC0y3re/voKG/I4jCwDRUvSK87hBCypCU8+BaBhuj0g60m3nOIUbIHWImBd5DWKq/g9SpjvJMzMvQvEbXBGhr7i6CfJ14ngt3Isa7guTzFHqdrKKnwXWHH6iOjFY8DrIZWFCu0dWxam6uvYmW+g1EJJIDf+pllvW/VG4VMyJ2tJILS9YxuOxuEGviFktoWx6THVBiJxgZqXgc4WtlO1ZehsYu8PLpAyjw2frPsfTMQZb1/23KQKYqVmaE5MkDuevrZfc42QetKD8p6BStQdg0HQPeGHiD+UPdrOzbS7lj/kqk6tOHUOhWaIvGuNvcBxQ/CwRd6U5ChtIXuL7n6WnXM12JZEbOrqqQ64LelSLgOEhyOo3Hx4emU3ym5NdhLwpD4Hha7+0Z1VeOpXW4O616NK26tm7NTdNv++q5PuhJ0Mc4e/wHYdZF8+B3IrndkVm8tqIGna77yqy6//c4O3eXbGkL3McESbQ3rffawsPOGm7KwkTNDNg0iwTI5V/Ilp+WDR7AsoWHwkxcmKidvhfOpmjlg7qnLfDGOUzkwzG9qDA3aP985vIA3+384bRsOhidtZv3IOlH5Hf8t7dNtjzjvY8BSuwD6iqSWM7Xvyl7wFWdBOtR+5HBNV/NHE2rdqdVj6V16Fhan+sZ1SYAy4J/hRFgiUVtfAFFP+eUSleXAECpPnPIhDVPYJNYHOof0ZSlNj8r5qR1idrp4f8/IICAyUggmYmxy1qekL0oP3JdNhqyKFH7kfeAC0tuNYEXPqqibLAAGivk+7bFRhUOCAyb0RcLEzUfWQKy0SrONdzDudRn/LEEeQpKTtHr2x/cgvJ0Kb0wOVRlT7XopOXMso2cW3oXRCKuII7AsJrc856SH0Zs7B4pzVO4zOJO8NySO9A8+DJkIJLhOyV1I5FYzwzOPVdUav/zCpYduNybMgTsiWZY01AlJ8vq2nV//vYgk7gRMuVw9ewNAY8MovIEsnC73NkW/NWVMr8N2jY9IkzxZDjLbjAhSUS3wZksEHoaLGu4iOixj+IqAAqi3yqGrbyvwzY9U+/Jq+YBTvNFx6CLgO4RTVkxdmPTojDP4bHjxGv89p0/TtmCqyoqobdBYBDQP6KpTJQ3ValRT9Tlojm1vouRqBXl/tUbubNhLSpwoPd1nup6gYwvyuPqEJCJJ7m4+FYGG1q39aSf2Gas/RdV6LCzbF2ZkK4CAeMxdosSeAOyqLLOh+NLTa20Xlu4ambjqhaywJPveeMVZoeAs8s2M7i0BSJRX9ywR+ahbBKLO7pHtHliElRazELmDmpRVS0W4prcbqlfx5iNK32qfv1VmwTPL7kLIhMjOmTnZ0rSirCrQEDYvkWAiFjUJmpcbaZtSKs7jdr2VdsILTj9EmJnfNterxRMU1DyhyEAZCLG12TOkcVVdahqIb3ae9jnAa/2Hnbp6Cx6QF3fs6w6/A1Wdj5AzYk/IZqb/M3eD+gTLfiMZtkqFneQj/HFYTBfctGcOjgzUfIvR/aSVVjbsB6AzpOHae96Af+iM7uToJW5RLK/HRGL88s3B3uBFsjY53qf/1eXXSgbBKpNxp478lf+8M5zkzbo1esbqBzumXS56Yodm0Pv2l/6et8BLzCQzbLGtRNcVSV9jTHZ0hiX+cvjIo1xkRX59NTbz26c7C4wWTGf/uu+SSZWTTH3vRJJkTDXH1LYk83mgqnLDpWtiM/tUOXEZDi4bfl6MomFnLjxEUbnNs4qAcOLb58In1faoxkaVsRFVlbI/FUV8kUnknxSB/2bn/x6kxL5OaqfBirD9JKJBdzWuJ77bryXiJWfZtRm3sA/qT57kMRwD9HMEFfio2kmXsOlJbdzoWETKrn+Hc+QCgudn9FL+w9G9R4R9puwvBhLQfYaZK5EIeHyLj3T7Z32MkUImJFo8XdV4z2j2mIJvwm8fjKT9/009R3wZp4JXhWsCL86OqINQbYHesD7o9qKsl2EG0R5T4Qd1yek3avnhNaq0kw+fshpmIDnoN+lDJKA56Bed/56wbt+w5jCW+gEHh8B74xqq6Xs9bKKsLmpQgob/RMZbVWbvSYox92vOAEBwJ26TVs84N125vH4hoAqjxYiPM3CNttcevnQ2kD39ebPVAqpPwhgMfAKZPN4fBcittLkhKHZajQofMxFQD60NnDPLW5F76swLwgaj8UmQaf6IA/0EuC8d54dPH4PgC4n0rMwjnLpfY+xXV52y5rUinlImbomMC+4csArYOfx+FcBpc0Bboa7Iuww1bI2bd5GnVTKla0AoFYxYvC7eiGpH1wpcuwc2TsCCfjEHGnPKq02dKoyrEqnCp+/ISEvmnrXJqRdlVZVOlUZC9uThZIQ8lwWaA/wQNDBOmO20ilM4Pkfw9xWCiAgsLAAAAAASUVORK5CYII=" />
             <p className='text-xl font-bold text-center text-gray-800'>Thank you !</p>
             <p className='text-light text-center'>Please wait for confirmation</p>
             <p className='text-light text-center'>by the related admin</p>



            <div className='my-10 pt-30'>
                <Link to="/home">
                <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
                text-white 
                underline underline-offset-4 decoration-gray-700
                text-lg decoration-4
                bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                Back To Home
                </button></Link></div>
        </div>



    <BottomNav/>

</>
  )
}
