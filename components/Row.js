import { Box, Text, Button } from 'theme-ui';
import { useState } from 'react'

export default function Row({ id, rank, name, score }) {

    const [isSent, setSent] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const handleClick = async () => {
        console.log(id)
        console.log(name)
        setLoading(true)

        const res = await fetch('/api/twilio', {
            method:"POST",
            body: JSON.stringify({playerId: id})
        })
        const data =  await res.json()
        console.log(data)
        setSent(true)
        setLoading(false)
    }

    return (
        <div>
            <Box key={id} sx={{
                display: "grid",
                gridTemplateAreas: "'rank name score button'",
                gridTemplateColumns: "10% 40% 35% 15%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: '0.6rem 2rem',
                borderBottom: 'solid hsla(34, 27%, 4%, 0.1) 0.5px',
                fontFamily: 'sans-serif',
                fontWeight: '600',
                fontSize: '.9rem',
            }}>
                <Text sx={{
                    gridArea: "rank",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black',
                    width: "100%",
                }}>{rank}</Text>
                <Text sx={{
                    gridArea: "name",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>{name}</Text>
                <Text sx={{
                    gridArea: "score",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>{score}</Text>
                <Button sx={{
                    gridArea: "button",
                    fontSize: "1rem",
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "left",
                    color: 'black',
                    cursor: 'pointer',
                    backgroundColor: ! isSent ? "lightBlue" : "hsla(34, 27%, 4%, 0.5)",
                    color: ! isSent ? 'black' : 'white',
                    fontFamily: 'sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    boxShadow: '3px 3px 5px hsla(34, 27%, 4%, 0.5)',
                }} onClick={handleClick} disabled={isSent || isLoading}>
                {isLoading
                    ? <Text>Sending...</Text>
                    : <div>
                    {isSent ? <Text>Sent</Text>
                    : <Text>Notify</Text>
                    }</div>
                }
                </Button>
            </Box>
        </div>
    )
}