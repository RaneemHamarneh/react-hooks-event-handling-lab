// Code Keypad Component Here

export default function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleChange} />
        </div>
    )
}
