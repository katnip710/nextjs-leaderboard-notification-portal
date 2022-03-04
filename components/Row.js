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
                marginBottom: '1rem',
                padding: '0.6rem 1rem',
                borderBottom: 'solid hsla(34, 27%, 4%, 0.2) 0.5px'
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
                    backgroundColor: ! isSent ? "red" : "grey",
                    color: 'white'
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