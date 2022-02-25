import { Box, Text, Button } from 'theme-ui';

export default function Row({ id, rank, name }) {

    const handleClick = async () => {
        console.log(id)

        const res = await fetch('/api/twilio', {
            method:"POST",
            body: JSON.stringify({userId: id})
        })
        const data =  await res.json()
        console.log(data)
    }

    return (
        <div>
            <Box key={id} sx={{
                display: "grid",
                gridTemplateAreas: "'rank name button'",
                gridTemplateColumns: "10% 75% 15%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'beige',
                marginBottom: '1rem'
            }}>
                <Text sx={{
                    gridArea: "rank",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>{rank}</Text>
                <Text sx={{
                    gridArea: "name",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>{name}</Text>
                <Button sx={{
                    gridArea: "button",
                    fontSize: "1rem",
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "left",
                    color: 'black',
                    cursor: 'pointer',
                    backgroundColor: 'red',
                    color: 'white'
                }} onClick={handleClick}>Notify</Button>
            </Box>
        </div>
    )
}